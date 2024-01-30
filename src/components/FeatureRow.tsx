import { type FC } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

import Restaurantcard from './Restaurantcard';

interface PropsType {
    id: string;
    description: string;
    title: string;
}

const FeatureRow: FC<PropsType> = ({ description, id, title }) => {
    return (
        <View className="px-4">
            <View className="mt-4 flex-row items-center justify-between">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color={'#00CCBB'} size={22} />
            </View>
            <Text className="text-xs text-gray-500">{description}</Text>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="pt-4"
            >
                <Restaurantcard
                    address="123 dhaka"
                    dishes={[]}
                    genre="Japanese"
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    lat={12}
                    long={22}
                    rating={4.6}
                    shortDescription="This is the best food item!"
                    title="Best Chicken fry!"
                />
                <Restaurantcard
                    address="123 dhaka"
                    dishes={[]}
                    genre="Japanese"
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    lat={12}
                    long={22}
                    rating={4.6}
                    shortDescription="This is the best food item!"
                    title="Best Chicken fry!"
                />
                <Restaurantcard
                    address="123 dhaka"
                    dishes={[]}
                    genre="Japanese"
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    lat={12}
                    long={22}
                    rating={4.6}
                    shortDescription="This is the best food item!"
                    title="Best Chicken fry!"
                />
                <Restaurantcard
                    address="123 dhaka"
                    dishes={[]}
                    genre="Japanese"
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    lat={12}
                    long={22}
                    rating={4.6}
                    shortDescription="This is the best food item!"
                    title="Best Chicken fry!"
                />
                <Restaurantcard
                    address="123 dhaka"
                    dishes={[]}
                    genre="Japanese"
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    lat={12}
                    long={22}
                    rating={4.6}
                    shortDescription="This is the best food item!"
                    title="Best Chicken fry!"
                />
                <Restaurantcard
                    address="123 dhaka"
                    dishes={[]}
                    genre="Japanese"
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    lat={12}
                    long={22}
                    rating={4.6}
                    shortDescription="This is the best food item!"
                    title="Best Chicken fry!"
                />
                <Restaurantcard
                    address="123 dhaka"
                    dishes={[]}
                    genre="Japanese"
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    lat={12}
                    long={22}
                    rating={4.6}
                    shortDescription="This is the best food item!"
                    title="Best Chicken fry!"
                />
                <Restaurantcard
                    address="123 dhaka"
                    dishes={[]}
                    genre="Japanese"
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    lat={12}
                    long={22}
                    rating={4.6}
                    shortDescription="This is the best food item!"
                    title="Best Chicken fry!"
                />
                <Restaurantcard
                    address="123 dhaka"
                    dishes={[]}
                    genre="Japanese"
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    lat={12}
                    long={22}
                    rating={4.6}
                    shortDescription="This is the best food item!"
                    title="Best Chicken fry!"
                />
                <Restaurantcard
                    address="123 dhaka"
                    dishes={[]}
                    genre="Japanese"
                    id="1"
                    imgUrl="https://links.papareact.com/gn7"
                    lat={12}
                    long={22}
                    rating={4.6}
                    shortDescription="This is the best food item!"
                    title="Best Chicken fry!"
                />
            </ScrollView>
        </View>
    );
};

export default FeatureRow;
