import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 0 ${RFValue(24)}px;

  background-color: ${props => props.theme.colors.background_primary};
`;

export const Header = styled.View`
  width: 100%;

  margin-top: ${RFValue(115)}px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(40)}px;
  font-family: ${props => props.theme.fonts.secoundary_600};
  color: ${props => props.theme.colors.title};
`;

export const Subtitle = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${props => props.theme.fonts.primary_400};
  color: ${props => props.theme.colors.text};
  line-height: ${RFValue(25)}px;

  margin-top: ${RFValue(16)}px;
`;

export const Form = styled.View`
  width: 100%;

  margin: ${RFValue(64)}px 0;
`;

export const Buttons = styled.View``;
