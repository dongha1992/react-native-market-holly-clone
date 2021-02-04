import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntdIcon from 'react-native-vector-icons/AntDesign';
import FeatherIcon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Recommend from '../screens/Recommend';
import Category from '../screens/Category';
import Search from '../screens/Search';
import MyHolly from '../screens/MyHolly';
import { Theme } from '../constants';

const Tab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName={'홈'}>
      <Tab.Screen
        name='홈'
        component={HomeTabNavigator}
        options={{
          tabBarIcon: ({ focused }) =>
            focused ? (
              <IoniconsIcon
                name='home-sharp'
                size={25}
                color={Theme.colors.mainColor}
              />
            ) : (
              <IoniconsIcon
                name='home-outline'
                size={25}
                color={Theme.colors.grayColor}
              />
            ),
        }}
      />
      <Tab.Screen name='추천' component={Recommend}></Tab.Screen>
      <Tab.Screen name='카테고리' component={Category}></Tab.Screen>
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
