import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import Logo from "../../assets/logo.svg";
import { CardCar } from "../../components/CardCar";

import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";

export function Home() {
  const data = [
    {
      brand: "audi",
      name: "RS Coumpé 5",
      rent: {
        period: "ao dia",
        price: 120,
      },
      thumbnail: "",
    },
    {
      brand: "audi",
      name: "RS Coumpé 6",
      rent: {
        period: "ao dia",
        price: 150,
      },
      thumbnail: "",
    },
  ];

  const navigation = useNavigation();

  const handleCarDetails = useCallback(() => {
    navigation.navigate("CarDetails");
  }, [navigation]);

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

          <TotalCars>Total de 12 carros</TotalCars>
        </HeaderContent>
      </Header>

      <CarList
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5]}
        keyExtractor={(item) => String(item)}
        renderItem={(item) => (
          <CardCar
            onPress={handleCarDetails}
            brand="audi"
            name="RS Coumpé 5"
            rent={{
              period: "ao dia",
              price: 120,
            }}
            thumbnail="url"
          />
        )}
      />
    </Container>
  );
}
