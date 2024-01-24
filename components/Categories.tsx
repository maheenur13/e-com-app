import React from 'react';
import { ScrollView } from 'react-native';
import CategoryCard from './CategoryCard';

const Categories = () => {
  return (
    <ScrollView
      className="bg-gray-100"
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      showsHorizontalScrollIndicator={false}>
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 1" />
      <CategoryCard imageUrl="https://links.papareact.com/wru" title="Testing 2" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 3" />
      <CategoryCard imageUrl="https://links.papareact.com/wru" title="Testing 4" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 5" />
      <CategoryCard imageUrl="https://links.papareact.com/wru" title="Testing 6" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 7" />
      <CategoryCard imageUrl="https://links.papareact.com/wru" title="Testing 8" />
      <CategoryCard imageUrl="https://links.papareact.com/gn7" title="Testing 9" />
    </ScrollView>
  );
};

export default Categories;
