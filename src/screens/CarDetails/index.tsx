import React from "react";
import { Accessory } from "../../components/Accessory";
import { BackButton } from "../../components/BackButton";
import { ImageSlider } from "../../components/ImageSlider";

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import peopleSvg from '../../assets/people.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'

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
import { Button } from "../../components/Button";

export function CardDetails() {
  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
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

        <About>
          Este é automóvel desportivo. Surgiu do 
          lendário touro de lide indultado 
          na praça Real Maestranza de Sevilla. É um 
          belíssimo carro para quem gosta de acelerar.
        </About>

      </Content>
      <Footer>
        <Button title="Escolher período de aluguel" />
      </Footer>
    </Container>
  );
}
