import React, { useCallback, useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { api } from "../../services/api";
import { CarDTO } from "../../dtos/CarDTO";

import Logo from "../../assets/logo.svg";
import { CardCar } from "../../components/CardCar";

import { Container, Header, HeaderContent, TotalCars, CarList } from "./styles";
import { Load } from "../../components/Load";

export function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<CarDTO[]>([]);

  const navigation = useNavigation();

  const handleCarDetails = useCallback(() => {
    navigation.navigate("CarDetails");
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
            <CardCar onPress={handleCarDetails} data={item} />
          )}
        />
      )}
    </Container>
  );
}
