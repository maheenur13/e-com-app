import React, { FC } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon
} from 'react-native-heroicons/outline';

const Header: FC = () => {
  return (
    <View className="bg-white py-2">
      <View className="flex-row py-2 items-center mx-4 spce-x-2">
        <Image
          source={{
            uri: 'https://links.papareact.com/wru'
          }}
          className="h-7 w-7 mr-2 bg-gray-400 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver now!</Text>
          <View className="flex-row align-middle">
            <Text>Current Location</Text>
            <ChevronDownIcon size={19} color={'#00CCBB'} />
          </View>
        </View>
        <UserIcon size={25} color={'#00CCBB'} />
      </View>
      <View className="flex-row items-center space-x-2 mt-1 pb-2 mx-4">
        <View className="flex-row flex-1 space-x-2  bg-gray-200 px-3 py-2 overflow-hidden">
          <MagnifyingGlassIcon size={22} color={'gray'} />
          <TextInput placeholder="Restaurants and cuisines" keyboardType="default" />
        </View>
        <AdjustmentsVerticalIcon size={24} color={'#00CCBB'} />
      </View>
    </View>
  );
};

export default Header;
