import React from "react";

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

interface Props {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: number;
  };
  thumbnail: string;
}

export function CardCar({ brand, name, rent, thumbnail }: Props) {
  return (
    <Container>
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
