import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';
import { useSelector } from 'react-redux';

import ListRenderer from '../components/ListRenderer';

const FavouriteItemsScreen = (props) => {
  const favourites = useSelector((state) => state.mealsReducer.favouriteMeals);

  if (favourites.length === 0 || !favourites) {
    return (
      <View style={styles.emptyScreenContainer}>
        <Text style={styles.textDirective}>No favourites currently.</Text>
        <Text>You should add some!</Text>
      </View>
    );
  }

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

const styles = StyleSheet.create({
  emptyScreenContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDirective: {
    width: '70%',
    fontFamily: 'open-sans-bold',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default FavouriteItemsScreen;
