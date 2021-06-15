import React, { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "react-native";
import { useTheme } from "styled-components";

import { BackButton } from "../../components/BackButton";
import { Button } from "../../components/Button";
import { Calendar, DayProps, MarkedDateProps } from "../../components/Calendar";

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
import { generateInterval } from "../../components/Calendar/generateInterval";

export function Schedules() {
  const [lastSelectedDate, setLastSelectedDate] = useState<DayProps>(
    {} as DayProps
  );

  const [markedDates, setMarkedDates] = useState<MarkedDateProps>(
    {} as MarkedDateProps
  );

  const theme = useTheme();

  const navigation = useNavigation();

  const handleConfirmRental = useCallback(() => {
    navigation.navigate("ScheduleDetails");
  }, [navigation]);

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
    },
    [lastSelectedDate]
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
            <DateValue selected={false}></DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}></DateValue>
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
