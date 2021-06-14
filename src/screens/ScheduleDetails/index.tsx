import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

import { StatusBar } from "react-native";

import { RFValue } from "react-native-responsive-fontsize";

import { useTheme } from "styled-components";

import { Feather } from "@expo/vector-icons";

import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";
import { Button } from "../../components/Button";

import speedSvg from "../../assets/speed.svg";
import accelerationSvg from "../../assets/acceleration.svg";
import peopleSvg from "../../assets/people.svg";
import forceSvg from "../../assets/force.svg";
import gasolineSvg from "../../assets/gasoline.svg";
import exchangeSvg from "../../assets/exchange.svg";

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

export function ScheduleDetails() {
  const theme = useTheme();

  const navigation = useNavigation();

  const handleConfirmRental = useCallback(() => {
    navigation.navigate("SchedulingComplete");
  }, [navigation]);

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
        <ImageSlider
          imagesURL={[
            "https://freepngimg.com/thumb/audi/35227-5-audi-rs5-red.png",
          ]}
        />
      </SliderContainer>

      <Content>
        <Details>
          <Description>
            <Brand>Audi</Brand>
            <Name>RS Coupé 5</Name>
          </Description>

          <Rent>
            <Period>Ao dia</Period>
            <Price>R$ 120</Price>
          </Rent>
        </Details>

        <AccessoriesContainer>
          <Accessory icon={speedSvg} name="380 km/h" />
          <Accessory icon={accelerationSvg} name="3.2s" />
          <Accessory icon={forceSvg} name="800 HP" />
          <Accessory icon={gasolineSvg} name="Gasolina" />
          <Accessory icon={exchangeSvg} name="Auto" />
          <Accessory icon={peopleSvg} name="2 pessoas" />
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
            <DateValue>12/06/2021</DateValue>
          </DateInfo>

          <Feather
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>12/06/2021</DateValue>
          </DateInfo>
        </RentalPeriod>

        <RentalPrice>
          <RentalPriceLabel>TOTAL</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
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
