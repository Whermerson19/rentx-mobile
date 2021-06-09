import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.background_secondary};
`;

export const Header = styled.View`
  flex-direction: row;

  justify-content: space-between;
  align-items: center;

  position: absolute;

  margin-top: ${RFValue(50)}px;

  margin-left: ${RFValue(24)}px;
`;

export const SliderContainer = styled.View`
  margin-top: ${RFValue(32)}px;
`;

export const Content = styled.ScrollView.attrs({
  contenContainerStyle: {
    padding: 24,
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})``;

export const Details = styled.View``;

export const Description = styled.View``;

export const Brand = styled.Text``;

export const Name = styled.Text``;

export const Rent = styled.View``;

export const Period = styled.Text``;

export const Price = styled.Text``;
