import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize';

import { RectButton } from 'react-native-gesture-handler'

interface ContainerProps {
  bgColor: string;
}

export const Container = styled(RectButton)<ContainerProps>`
  width: 100%;

  padding: ${RFValue(19)}px;

  justify-content: center;
  align-items: center;

  background-color: ${props => props.bgColor};
`;

export const Title = styled.Text<ContainerProps>`
  font-family: ${props => props.theme.fonts.primary_500};
  font-size: ${RFValue(15)}px;

  color: ${props => props.bgColor};
`;