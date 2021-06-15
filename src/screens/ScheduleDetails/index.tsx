import React, { useCallback } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { CarDTO } from "../../dtos/CarDTO";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import { useMemo } from "react";
import { format } from "date-fns";
import { api } from "../../services/api";

import { Alert, StatusBar } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import {
  Container,
  Header,
  SliderContainer,
  Content,
  Details,
  Description,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  AccessoriesContainer,
  RentalPeriod,
  CalendarIcon,
  DateInfo,
  DateTitle,
  DateValue,
  RentalPrice,
  RentalPriceDetails,
  RentalPriceLabel,
  RentalPriceQuota,
  RentalPriceTotal,
  Footer,
} from "./styles";

interface Params {
  car: CarDTO;
  dates: string[];
}

export function ScheduleDetails() {
  const theme = useTheme();

  const navigation = useNavigation();
  const route = useRoute();

  const { car, dates } = route.params as Params;

  const handleConfirmRental = useCallback(async () => {
    const schedulesByCar = await api.get(`/schedules_bycars/${car.id}`);

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    api
      .put(`/schedules_bycars/${car.id}`, {
        id: car.id,
        unavailable_dates,
      })
      .then((response) => navigation.navigate("SchedulingComplete"))
      .catch(() => Alert.alert("Erro ao concluir o agendamento"));
  }, [navigation, car, dates]);

  const totalRental = useMemo(() => {
    const price = car.rent.price;
    const days = dates.length;

    return price * days;
  }, [car, dates]);

  return (
    <Container>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />

      <Header>
        <BackButton
          onPress={() => {
            navigation.goBack();
          }}
        />
      </Header>

      <SliderContainer>
        <ImageSlider imagesURL={car.photos} />
      </SliderContainer>

      <Content>
        <Details>
          <Description>
            <Brand>{car.brand}</Brand>
            <Name>{car.name}</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ {car.rent.price}</Price>
          </Rent>
        </Details>

        <AccessoriesContainer>
          {car.accessories.map((accessory) => (
            <Accessory
              key={accessory.type}
              icon={getAccessoryIcon(accessory.type)}
              name={accessory.name}
            />
          ))}
        </AccessoriesContainer>

        <RentalPeriod>
          <CalendarIcon>
            <Feather
              name="calendar"
              size={RFValue(24)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{format(new Date(dates[0]), "dd/MM/yyyy")}</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>
              {format(new Date(dates[dates.length - 1]), "dd/MM/yyyy")}
            </DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} x{dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {totalRental}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>
      <Footer>
        <Button
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirmRental}
        />
      </Footer>
    </Container>
  );
}
