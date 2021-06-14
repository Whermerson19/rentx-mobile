import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface DateValuesProps {
  selected: boolean;
}

export const Container = styled.View`
  flex: 1;

  background-color: ${(props) => props.theme.colors.background_secondary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;

  background-color: ${(props) => props.theme.colors.header};

  justify-content: center;
  padding: ${RFValue(24)}px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.secoundary_600};
  font-size: ${RFValue(34)}px;
  margin: ${RFValue(24)}px 0;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DateInfo = styled.View`
  width: 30%;
`;

export const DateTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary_500};
  font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValuesProps>`
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;

  ${({ theme, selected }) =>
    !selected &&
    css`
      border-bottom-width: 1px;
      border-bottom-color: ${theme.colors.text};
      padding-bottom: 5px;
    `};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: 24,
    flex: 1,
  },
  showsVerticalScrollIndicator: false,
})``;

export const Footer = styled.View`
  padding: ${RFValue(24)}px;
`;
