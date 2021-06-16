import React, { useCallback, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { useTheme } from "styled-components";

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
  MyCarsButton,
} from "./styles";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CarDTO[]>([]);

  const navigation = useNavigation();
  const theme = useTheme();

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

      <MyCarsButton onPress={handleOpenMyCars}>
        <Ionicons name="ios-car-sport" size={30} color={theme.colors.shape} />
      </MyCarsButton>
    </Container>
  );
}
