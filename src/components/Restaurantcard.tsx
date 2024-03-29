import React, { type FC } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline';

interface PropsType {
    id: string;
    imgUrl: string;
    title: string;
    rating: number;
    genre: string;
    address: string;
    shortDescription: string;
    dishes: any[];
    long: number;
    lat: number;
}

const Restaurantcard: FC<PropsType> = ({
    address,
    dishes,
    genre,
    id,
    imgUrl,
    lat,
    long,
    rating,
    shortDescription,
    title,
}) => {
    return (
        <TouchableOpacity className="bg-white mr-3 shadow-md">
            <Image
                source={{
                    uri: imgUrl,
                }}
                className="h-36 w-64 rounded-sm"
            />
            <View className="px-2 pb-2">
                <Text className="font-bold text-lg pt-2">{title}</Text>
                <View className="flex-row items-center space-x-1">
                    <StarIcon color={'green'} opacity={0.5} size={12} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-500">{rating}</Text> .{' '}
                        {genre}
                    </Text>
                </View>
                <View className="flex-row items-center space-x-1">
                    <MapPinIcon color={'gray'} opacity={0.4} size={12} />
                    <Text className=" text-xs text-gray-500">
                        Nearby {address}
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default Restaurantcard;
