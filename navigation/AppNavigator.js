import React from 'react';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryItemsScreen from '../screens/CategoryItemsScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import FavouriteItemsScreen from '../screens/FavouriteItemsScreen';
import FiltersScreen from '../screens/FiltersScreen';

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
        height: 65,
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
      },
    },
  }
);

const FiltersStackNavigator = createStackNavigator(
  {
    Filters: FiltersScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 65,
        backgroundColor: Colors.extrasColor,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
      },
    },
  }
);

const FavesStackNavigator = createStackNavigator(
  {
    Faves: FavouriteItemsScreen,
    ItemDetails: ItemDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        height: 65,
        backgroundColor: Colors.accentColor,
      },
      headerTintColor: 'white',
      headerTitleStyle: {
        fontFamily: 'open-sans-bold',
        fontSize: 14,
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
          <Ionicons name='ios-restaurant' size={20} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.primaryColor,
    },
  },
  Faves: {
    screen: FavesStackNavigator,
    navigationOptions: {
      tabBarIcon: (tabInfo) => {
        return <Ionicons name='ios-star' size={20} color={tabInfo.tintColor} />;
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
          height: 60,
          activeTintColor: Colors.accentColor,
        },
      });

const MainNavigator = createDrawerNavigator(
  {
    DrawerFaves: {
      screen: AppTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals',
      },
    },
    DrawerFilters: {
      screen: FiltersStackNavigator,
      navigationOptions: {
        drawerLabel: 'Filters',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.primaryColor,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
  }
);

export default createAppContainer(MainNavigator);
