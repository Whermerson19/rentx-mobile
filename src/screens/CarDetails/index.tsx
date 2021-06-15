import React, { useCallback } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { StatusBar } from "react-native";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";

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
  About,
  Footer,
} from "./styles";
import { CarDTO } from "../../dtos/CarDTO";

interface Params {
  car: CarDTO;
}

export function CarDetails() {
  const navigation = useNavigation();
  const route = useRoute();

  const { car } = route.params as Params;

  const handleChoseRentalPeriod = useCallback(() => {
    navigation.navigate("Schedules", {
      car,
    });
  }, [navigation]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />

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
            <Name>{car.name}5</Name>
          </Description>

          <Rent>
            <Period>{car.rent.period}</Period>
            <Price>R$ ${car.rent.price}</Price>
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

        <About>{car.about}</About>
      </Content>
      <Footer>
        <Button
          onPress={handleChoseRentalPeriod}
          title="Escolher período de aluguel"
        />
      </Footer>
    </Container>
  );
}
