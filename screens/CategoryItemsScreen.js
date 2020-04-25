import React from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';

import ListItem from '../components/ListItem';

import { CATEGORIES, MEALS } from '../data/dummydata';

const CategoryItemsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const displayItems = MEALS.filter(
    (meal) => meal.categroryIds.indexOf(catId) >= 0
  );

  const renderItemHandler = (itemData) => {
    return (
      <ListItem
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        onSelectItem={() => {
          props.navigation.navigate({
            routeName: 'ItemDetailsScreen',
            params: {
              itemId: itemData.item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screenContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={displayItems}
        renderItem={renderItemHandler}
        style={{ width: '100%' }}
      />
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
    margin: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginVertical: 10,
  },
});

export default CategoryItemsScreen;
