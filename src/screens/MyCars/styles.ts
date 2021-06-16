import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;

  align-items: center;
  background-color: ${(props) => props.theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFValue(325)}px;

  background-color: ${(props) => props.theme.colors.header};

  justify-content: center;
  padding: ${RFValue(30)}px;
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.secoundary_600};
  font-size: ${RFValue(34)}px;
  margin: ${RFValue(24)}px 0;
`;

export const Subtitle = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-family: ${(props) => props.theme.fonts.secoundary_400};
  font-size: ${RFValue(15)}px;
`;

export const Content = styled.View`
  width: 100%;

  flex: 1;

  padding: 0 ${RFValue(16)}px;
`;

export const Appointments = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: ${RFValue(24)}px 0;
`;

export const AppointmentTitle = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.primary_400};
  font-size: ${RFValue(15)}px;
`;

export const AppointmentQuantity = styled.Text`
  color: ${(props) => props.theme.colors.title};
  font-family: ${(props) => props.theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;
`;

export const CarWrapper = styled.View`
  width: 100%;
  margin-bottom: ${RFValue(16)}px;
`;

export const CarFooter = styled.View`
  width: 100%;
  padding: ${RFValue(12)}px;

  margin-top: -${RFValue(10)}px;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.background_secondary}; ;
`;

export const CarFooterTitle = styled.Text`
  color: ${(props) => props.theme.colors.text_detail};
  font-family: ${(props) => props.theme.fonts.secoundary_500};
  font-size: ${RFValue(13)}px;
`;

export const CarFooterPeriod = styled.View`
  flex-direction: row;
`;

export const CarFooterDate = styled.Text`
  color: ${(props) => props.theme.colors.title};
  font-family: ${(props) => props.theme.fonts.primary_400};
  font-size: ${RFValue(13)}px;
`;
