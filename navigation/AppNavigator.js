import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryItemsScreen from '../screens/CategoryItemsScreen';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';

const AppNavigator = createStackNavigator({
  CategoriesScreen: CategoriesScreen,
  CategoryItemsScreen: CategoryItemsScreen,
  ItemDetailsScreen: ItemDetailsScreen,
});

export default createAppContainer(AppNavigator);
