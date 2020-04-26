import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { useSelector } from 'react-redux';

import ListRenderer from '../components/ListRenderer';

const FavouriteItemsScreen = (props) => {
  const favourites = useSelector((state) => state.mealsReducer.favouriteMeals);

  return <ListRenderer listData={favourites} navigation={props.navigation} />;
};

FavouriteItemsScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Favourite Meals',
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navigationData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
  };
};

export default FavouriteItemsScreen;
