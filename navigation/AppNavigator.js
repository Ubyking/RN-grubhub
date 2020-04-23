import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryItemsScreen from '../screens/CategoryItemsScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import Colors from '../constants/Colors';

const AppNavigator = createStackNavigator(
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
    mode: 'modal',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor,
      },
      headerTintColor: 'white',
    },
  }
);

export default createAppContainer(AppNavigator);
