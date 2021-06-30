import React, { useCallback } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";

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

  const scrollY = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const headerStyleAnimated = useAnimatedStyle(() => {
    return {
      height: interpolate(
        scrollY.value,
        [0, 200],
        [200, 70],
        Extrapolate.CLAMP
      ),
    };
  });

  const carImageStyleAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, 75, 150],
        [1, 0.3, 0],
        Extrapolate.CLAMP
      ),
    };
  });

  const { car } = route.params as Params;

  const handleChoseRentalPeriod = useCallback(() => {
    navigation.navigate("Schedules", {
      car,
    });
  }, [navigation]);

  return (
    <Container>
      <StatusBar barStyle="dark-content" />

      <Animated.View style={[headerStyleAnimated]}>
        <Header>
          <BackButton
            onPress={() => {
              navigation.goBack();
            }}
          />
        </Header>

        <Animated.View style={carImageStyleAnimated}>
          <ImageSlider imagesURL={car.photos} />
        </Animated.View>
      </Animated.View>

      <Animated.ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
        }}
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
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

        <About>
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
          {car.about}
        </About>
      </Animated.ScrollView>
      <Footer>
        <Button
          onPress={handleChoseRentalPeriod}
          title="Escolher período de aluguel"
        />
      </Footer>
    </Container>
  );
}
