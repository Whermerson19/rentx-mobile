import React from "react";
import { useState, useRef } from "react";
import { FlatList, ViewToken } from "react-native";

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
interface ChangeImagesProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesURL }: Props) {
  const [imagesIndex, setImagesIndex] = useState(0);

  const indexChange = useRef((info: ChangeImagesProps) => {
    const index = info.viewableItems[0].index!;

    setImagesIndex(index);
  });

  return (
    <Container>
      <ImageIndexContainer>
        {imagesURL.map((item, index) => (
          <ImageIndex key={index} active={index === imagesIndex} />
        ))}
      </ImageIndexContainer>

      <FlatList
        data={imagesURL}
        keyExtractor={(key) => key}
        renderItem={({ item }) => (
          <CarImageWrapper>
            <CarImage source={{ uri: item }} resizeMode="cover" />
          </CarImageWrapper>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={indexChange.current}
      />
    </Container>
  );
}
