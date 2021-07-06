import React, { useCallback, useState, useEffect } from "react";
import { StatusBar, BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RFValue } from "react-native-responsive-fontsize";

import { RectButton, PanGestureHandler,  } from "react-native-gesture-handler";

import { useTheme } from "styled-components";

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler
} from 'react-native-reanimated'

import { Ionicons } from "@expo/vector-icons";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import { Load } from "../../components/Load";
import { CardCar } from "../../components/CardCar";

import Logo from "../../assets/logo.svg";

import {
  Container,
  Header,
  HeaderContent,
  TotalCars,
  CarList,
} from "./styles";

const ButtonAnimated = Animated.createAnimatedComponent(RectButton)

export function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CarDTO[]>([]);

  const navigation = useNavigation();
  const theme = useTheme();

  const positionY = useSharedValue(0)
  const positionX = useSharedValue(0)

  const myCarsButtonStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: positionX.value},
        {translateY: positionY.value},
      ]
    }
  })

  const onGestureHandler = useAnimatedGestureHandler({
    onStart(event, ctx: any) {
      ctx.positionX = positionX.value;
      ctx.positionY = positionY.value;
    },
    onActive(event, ctx: any) {
      positionX.value = ctx.positionX + event.translationX;
      positionY.value = ctx.positionY + event.translationY
    },
    onEnd() {

    }
  })

  const handleCarDetails = useCallback(
    (car: CarDTO) => {
      navigation.navigate("CarDetails", { car });
    },
    [navigation]
  );

  const handleOpenMyCars = useCallback(() => {
    navigation.navigate("MyCars");
  }, [navigation]);

  useEffect(() => {
    async function loadCars() {
      try {
        const response = await api.get("/cars");
        setData(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }

    loadCars();
  }, []);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => true)
  }, [])

  return (
    <Container>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(12)} />

          <TotalCars>Total de {data.length} carros</TotalCars>
        </HeaderContent>
      </Header>

      {loading ? (
        <Load />
      ) : (
        <CarList
          showsVerticalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <CardCar onPress={() => handleCarDetails(item)} data={item} />
          )}
        />
      )}

      <PanGestureHandler onGestureEvent={onGestureHandler} >
        <Animated.View
          style={[
            myCarsButtonStyle,
            {
              position: 'absolute',
              bottom: 13,
              right: 22,
              width: 60,
              height: 60,
              borderRadius: 30,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.colors.main
            }
          ]}
        >
          <ButtonAnimated onPress={handleOpenMyCars}>
            <Ionicons name="ios-car-sport" size={30} color={theme.colors.shape} />
          </ButtonAnimated>
        </Animated.View> 
      </PanGestureHandler>
    </Container>
  );
}