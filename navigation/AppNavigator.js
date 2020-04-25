import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
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

const AppTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: AppStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons
              name='ios-restaurant'
              size={22}
              color={tabInfo.tintColor}
            />
          );
        },
      },
    },
    Faves: {
      screen: FavouriteItemsScreen,
      navigationOptions: {
        tabBarIcon: (tabInfo) => {
          return (
            <Ionicons name='ios-star' size={22} color={tabInfo.tintColor} />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor,
    },
  }
);

export default createAppContainer(AppTabNavigator);
