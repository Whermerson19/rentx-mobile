import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.header};
  padding-top: ${RFValue(70)}px;
`;

export const Content = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  padding-bottom: ${RFValue(80)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(30)}px;
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.secoundary_500};

  margin-top: ${RFValue(40)}px;
`;

export const Message = styled.Text`
  font-size: ${RFValue(15)}px;
  color: ${(props) => props.theme.colors.text_detail};
  font-family: ${(props) => props.theme.fonts.primary_400};

  text-align: center;

  line-height: ${RFValue(25)}px;
  margin-top: ${RFValue(16)}px;
`;

export const ConfirmButton = styled.View`
  width: ${RFValue(80)}px;
  height: ${RFValue(56)}px;

  align-items: center;
  justify-content: center;

  margin: ${RFValue(80)}px 0;
`;
