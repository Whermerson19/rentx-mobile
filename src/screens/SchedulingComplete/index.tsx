import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { useWindowDimensions, StatusBar } from "react-native";
import { useTheme } from "styled-components";

import LogoSvg from "../../assets/logo_background_gray.svg";
import DoneSvg from "../../assets/done.svg";

import { Button } from "../../components/Button";

import { Container, Content, Title, Message, ConfirmButton } from "./styles";

export function SchedulingComplete() {
  const { width } = useWindowDimensions();

  const theme = useTheme();

  const navigation = useNavigation();

  const handleFinishRental = useCallback(() => {
    navigation.navigate("Home");
  }, [navigation]);

  return (
    <Container>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <LogoSvg width={width} />

      <Content>
        <DoneSvg width={80} height={80} />

        <Title>Carro alugado!</Title>

        <Message>
          Agora você só precisa ir {"\n"}
          até a concessionária da RENTX pagar o seu automóvel.
        </Message>

        <ConfirmButton>
          <Button
            onPress={handleFinishRental}
            title="OK"
            color={theme.colors.shape_dark}
          />
        </ConfirmButton>
      </Content>
    </Container>
  );
}
