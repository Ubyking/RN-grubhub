import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummydata';
import CustomHeaderButton from '../components/CustomHeaderButton';

const ItemDetailsScreen = (props) => {
  const itemId = props.navigation.getParam('itemId');

  const selectMeal = MEALS.find((meal) => meal.id === itemId);

  return (
    <View style={styles.screenContainer}>
      <Text>{selectMeal.title}</Text>
    </View>
  );
};

ItemDetailsScreen.navigationOptions = (navigationData) => {
  const itemId = navigationData.navigation.getParam('itemId');
  const selectMeal = MEALS.find((meal) => meal.id === itemId);

  return {
    headerTitle: selectMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title='favourite'
          iconName='ios-star'
          onPress={() => console.log('marked as favourite')}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginVertical: 10,
  },
});

export default ItemDetailsScreen;
