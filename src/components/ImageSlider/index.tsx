import React from "react";
import {
  Container,
  ImageIndexContainer,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from "./styles";

interface Props {
  imagesURL: string[];
}

export function ImageSlider({ imagesURL }: Props) {
  return (
    <Container>
      <ImageIndexContainer>
        <ImageIndex active={true} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
        <ImageIndex active={false} />
      </ImageIndexContainer>

      <CarImageWrapper>
        <CarImage source={{ uri: imagesURL[0] }} resizeMode="contain" />
      </CarImageWrapper>
    </Container>
  );
}
