import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(126)}px;

  background-color: ${(props) => props.theme.colors.background_secondary};

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px;
  margin-bottom: ${RFValue(16)}px;
`;

export const Detail = styled.View``;

export const Brand = styled.Text`
  font-family: ${(props) => props.theme.fonts.secoundary_500};
  color: ${(props) => props.theme.colors.text_detail};

  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${(props) => props.theme.fonts.secoundary_500};
  color: ${(props) => props.theme.colors.title};

  font-size: ${RFValue(15)}px;
`;

export const About = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: ${RFValue(16)}px;
`;

export const Rent = styled.View`
  margin-right: ${RFValue(24)}px;
`;

export const Period = styled.Text`
  font-family: ${(props) => props.theme.fonts.secoundary_500};
  color: ${(props) => props.theme.colors.text_detail};

  font-size: ${RFValue(10)}px;

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${(props) => props.theme.fonts.secoundary_500};
  color: ${(props) => props.theme.colors.main};

  font-size: ${RFValue(15)}px;
`;

export const Type = styled.View``;

export const CarImage = styled.Image`
  width: ${RFValue(167)}px;
  height: ${RFValue(85)}px;
`;
