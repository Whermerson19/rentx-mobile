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
  /* padding: ${RFValue(30)}px 0; */
`;

export const Content = styled.ScrollView.attrs({
  contenContainerStyle: {
    alignItems: "center",
  },
  showsVerticalScrollIndicator: false,
})`
  padding: 0 ${RFValue(24)}px;
`;

export const Details = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(32)}px;
`;

export const Description = styled.View``;

export const Brand = styled.Text`
  font-family: ${(props) => props.theme.fonts.secoundary_500};
  font-size: ${RFValue(10)}px;

  color: ${(props) => props.theme.colors.text_detail};

  text-transform: uppercase;
`;

export const Name = styled.Text`
  font-family: ${(props) => props.theme.fonts.secoundary_500};
  font-size: ${RFValue(25)}px;

  color: ${(props) => props.theme.colors.title};
`;

export const Rent = styled.View``;

export const Period = styled.Text`
  font-family: ${(props) => props.theme.fonts.secoundary_500};
  font-size: ${RFValue(10)}px;

  color: ${(props) => props.theme.colors.text_detail};

  text-transform: uppercase;
`;

export const Price = styled.Text`
  font-family: ${(props) => props.theme.fonts.secoundary_500};
  font-size: ${RFValue(25)}px;

  color: ${(props) => props.theme.colors.main};
`;

export const AccessoriesContainer = styled.View`
  width: 100%;

  flex-direction: row;
  flex-wrap: wrap;

  align-items: center;
  justify-content: space-between;

  margin: ${RFValue(16)}px 0;
`;

export const RentalPeriod = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: ${RFValue(40)}px;

  border-bottom-width: 1px;
  border-bottom-color: ${(props) => props.theme.colors.line};
  padding-bottom: ${RFValue(16)}px;
`;

export const CalendarIcon = styled.View`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;

  background-color: ${(props) => props.theme.colors.main};

  justify-content: center;
  align-items: center;
`;

export const DateInfo = styled.View``;

export const DateTitle = styled.Text`
  font-family: ${(props) => props.theme.fonts.primary_500};
  font-size: ${RFValue(10)}px;

  color: ${(props) => props.theme.colors.text_detail};

  text-transform: uppercase;
`;

export const DateValue = styled.Text`
  font-family: ${(props) => props.theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;

  color: ${(props) => props.theme.colors.title};
`;

export const RentalPrice = styled.View`
  width: 100%;

  margin-top: ${RFValue(16)}px;
`;

export const RentalPriceLabel = styled.Text`
  font-family: ${(props) => props.theme.fonts.primary_500};
  font-size: ${RFValue(10)}px;

  color: ${(props) => props.theme.colors.text_detail};

  text-transform: uppercase;
`;

export const RentalPriceDetails = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const RentalPriceQuota = styled.Text`
  font-family: ${(props) => props.theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;

  color: ${(props) => props.theme.colors.title};
`;

export const RentalPriceTotal = styled.Text`
  font-family: ${(props) => props.theme.fonts.secoundary_500};
  font-size: ${RFValue(24)}px;

  color: ${(props) => props.theme.colors.success};
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  background-color: ${(props) => props.theme.colors.background_primary};

  padding: ${RFValue(24)}px;
`;
