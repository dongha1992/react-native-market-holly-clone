import React from 'react';
import { Button } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewProduct from '../screens/NewProduct';
import BestProduct from '../screens/BestProduct';
import Shopping from '../screens/Shopping';
import Event from '../screens/Event';
import HomeRecommend from '../screens/HomeRecommend';

const MainTabStack = createMaterialTopTabNavigator();

const HomeTabNavigator = () => {
  return (
    <MainTabStack.Navigator>
      <MainTabStack.Screen name='컬리추천' component={HomeRecommend} />
    </MainTabStack.Navigator>
  );
};

export default HomeTabNavigator;
