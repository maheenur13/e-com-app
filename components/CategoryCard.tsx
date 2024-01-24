import React, { FC } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';

type PropsTypes = {
  imageUrl: string;
  title: string;
};

const CategoryCard: FC<PropsTypes> = ({ imageUrl, title }) => {
  return (
    <TouchableOpacity className="relative">
      <Image
        source={{
          uri: imageUrl
        }}
        className="h-20 w-20 rounded bg-gray-400 mx-1"
      />
      <Text className="absolute bottom-1 left-1 text-white font-bold text-center">{title}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
