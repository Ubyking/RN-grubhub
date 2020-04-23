import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { CATEGORIES } from '../data/dummydata';

const CategoryItemsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);

  return (
    <View style={styles.screenContainer}>
      <Text>Category Items Screen</Text>
      <Text>Selected Category: {selectCategory.title}</Text>
      <View style={styles.buttonStyle}>
        <Button
          title='Item Details screen'
          onPress={() =>
            props.navigation.navigate({ routeName: 'ItemDetailsScreen' })
          }
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title='Go back to Categories'
          onPress={() => props.navigation.goBack()}
        />
      </View>
    </View>
  );
};

CategoryItemsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectCategory.title,
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

export default CategoryItemsScreen;
