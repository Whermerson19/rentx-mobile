import React from "react";
import { useWindowDimensions } from "react-native";
import { useTheme } from "styled-components";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Button } from "../../components/Button";

import { Container, Content, Title, Message, ConfirmButton } from "./styles";

export function ScheduluingComplete() {
  const { width } = useWindowDimensions();

  const theme = useTheme();

  return (
    <Container>
      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX pagar o seu automóvel.
        </Message>

        <ConfirmButton>
          <Button title="OK" color={theme.colors.shape_dark} />
        </ConfirmButton>
      </Content>
    </Container>
  );
}
