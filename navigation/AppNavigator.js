import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryItemsScreen from '../screens/CategoryItemsScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import FavouriteItemsScreen from '../screens/FavouriteItemsScreen';
import Colors from '../constants/Colors';

const AppStackNavigator = createStackNavigator(
  {
    CategoriesScreen: {
      screen: CategoriesScreen,
    },
    CategoryItemsScreen: {
      screen: CategoryItemsScreen,
    },
    ItemDetailsScreen: {
      screen: ItemDetailsScreen,
    },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontSize: 16,
      },
    },
  }
);

const tabScreenConfig = {
  Meals: {
    screen: AppStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return (
          <Ionicons name='ios-restaurant' size={22} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Faves: {
    screen: FavouriteItemsScreen,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={22} color={tabInfo.tintColor} />;
      },
      tabBarColor: Colors.accentColor,
    },
  },
};

const AppTabNavigator =
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        //activeTintColor: Colors.accentColor,
        shifting: true,
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Colors.accentColor,
        },
      });

export default createAppContainer(AppTabNavigator);
