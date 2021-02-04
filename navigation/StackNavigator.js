import React, { useEffect, useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNavigation from './BottomTabNavigator';
import ProductDetail from '../screens/ProductDetail';
import WriteReview from '../screens/WriteReview';
import ReviewDetail from '../screens/ReviewDetail';
import WriteInquire from '../screens/WriteInquire';
import Cart from '../screens/Cart';
import SelectProduct from '../screens/SelectProduct';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='main' component={BottomTabNavigation}></Stack.Screen>
      <Stack.Screen
        name='productDetail'
        component={ProductDetail}></Stack.Screen>
      <Stack.Screen
        name='writeReview'
        component={WriteReview}
        options={{
          title: '구매후기작성',
          headerShown: false,
        }}
      />
      <Stack.Screen name='reviewDetail' component={ReviewDetail}></Stack.Screen>
      <Stack.Screen name='inquire' component={WriteInquire}></Stack.Screen>
      <Stack.Screen name='cart' component={Cart}></Stack.Screen>
      <Stack.Screen name='select' component={SelectProduct}></Stack.Screen>
    </Stack.Navigator>
  );
};

export default StackNavigator;
