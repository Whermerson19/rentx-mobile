import React, { useCallback, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { format } from "date-fns";

import { Alert, StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, DayProps, MarkedDateProps } from "../../components/Calendar";
import { CarDTO } from "../../dtos/CarDTO";
import { generateInterval } from "../../components/Calendar/generateInterval";

import ArrowSvg from "../../assets/arrow.svg";

import {
  Container,
  Header,
  Title,
  RentalPeriod,
  DateInfo,
  DateTitle,
  DateValue,
  Content,
  Footer,
} from "./styles";

interface RentalPeriod {
  start: number;
  end: number;
  startFormatted: string;
  endFormatted: string;
}

interface Params {
  car: CarDTO;
}

export function Schedules() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );

  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );

  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>(
    {} as RentalPeriod
  );

  const theme = useTheme();

  const route = useRoute();

  const { car } = route.params as Params;

  const navigation = useNavigation();

  const handleConfirmRental = useCallback(() => {
    if (!rentalPeriod.startFormatted || !rentalPeriod.endFormatted) {
      Alert.alert("Selecione um intervalo");
    } else {
      navigation.navigate("ScheduleDetails", {
        car,
        dates: Object.keys(markedDates),
      });
    }
  }, [navigation, rentalPeriod]);

  const handleChangeDate = useCallback(
    (day: DayProps) => {
      let start = !lastSelectedDate.timestamp ? day : lastSelectedDate;
      let end = day;

      if (start.timestamp > end.timestamp) {
        start = end;
        end = start;
      }

      setLastSelectedDate(end);

      const interval = generateInterval(start, end);
      setMarkedDates(interval);

      const firstDate = Object.keys(interval)[0];
      const endDate = Object.keys(interval)[Object.keys(interval).length - 1];

      setRentalPeriod({
        start: start.timestamp,
        end: end.timestamp,
        startFormatted: format(new Date(firstDate), "dd/MM/yyyy"),
        endFormatted: format(new Date(endDate), "dd/MM/yyyy"),
      });
    },
    [lastSelectedDate, format, generateInterval]
  );

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        translucent
        backgroundColor={undefined}
      />

      <Header>
        <BackButton
          onPress={() => navigation.goBack()}
          color={theme.colors.shape}
        />

        <Title>
          Escolha uma
          {"\n"}data de início e{"\n"}fim do aluguel.
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={!!rentalPeriod.startFormatted}>
              {rentalPeriod.startFormatted}
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={!!rentalPeriod.endFormatted}>
              {rentalPeriod.endFormatted}
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar markedDate={markedDates} onDayPress={handleChangeDate} />
      </Content>

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>
    </Container>
  );
}
