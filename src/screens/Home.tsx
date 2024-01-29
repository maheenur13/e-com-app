import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native';

import Categories from '../components/Categories';
import FeatureRow from '../components/FeatureRow';
import Header from '../components/Header';

const Home = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);
    return (
        <SafeAreaView className="bg-gray-200 ">
            <StatusBar />
            <ScrollView>
                <Header />

                <Categories />
                <FeatureRow
                    title="Featured"
                    description="Paid placements from our partners"
                    id="featured"
                />
                <FeatureRow
                    title="Featured"
                    description="Paid placements from our partners"
                    id="featured"
                />
                <FeatureRow
                    title="Featured"
                    description="Paid placements from our partners"
                    id="featured"
                />
                <FeatureRow
                    title="Featured"
                    description="Paid placements from our partners"
                    id="featured"
                />
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;
