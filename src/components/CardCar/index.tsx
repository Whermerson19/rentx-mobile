import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import GasolineSvg from "../../assets/gasoline.svg";
import CarExample from "../../assets/car_example.png";

import {
  Container,
  Detail,
  Brand,
  Name,
  About,
  Rent,
  Period,
  Price,
  Type,
  CarImage,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useCallback } from "react";

interface Props extends RectButtonProps {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

export function CardCar({ brand, name, rent, thumbnail, ...rest }: Props) {
  const navigation = useNavigation();

  return (
    <Container {...rest}>
      <Detail>
        <Brand>{brand}</Brand>
        <Name>{name}</Name>

        <About>
          <Rent>
            <Period>{rent.period}</Period>
            <Price>{`R$ ${rent.price}`}</Price>
          </Rent>

          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Detail>

      <CarImage resizeMode="contain" source={CarExample} />
    </Container>
  );
}
