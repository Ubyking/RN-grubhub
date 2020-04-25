import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import ListRenderer from '../components/ListRenderer';

import { MEALS } from '../data/dummydata';

const FavouriteItemsScreen = (props) => {
  const dummyFavs = MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2'
  );
  return <ListRenderer listData={dummyFavs} navigation={props.navigation} />;
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
