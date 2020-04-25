import React from 'react';
import ListItem from '../components/ListItem';
import ListRenderer from '../components/ListRenderer';

import { CATEGORIES, MEALS } from '../data/dummydata';

const CategoryItemsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const displayItems = MEALS.filter(
    (meal) => meal.categroryIds.indexOf(catId) >= 0
  );

  return <ListRenderer listData={displayItems} navigation={props.navigation} />;
};

CategoryItemsScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectCategory = CATEGORIES.find((cat) => cat.id === catId);

  return {
    headerTitle: selectCategory.title,
  };
};

export default CategoryItemsScreen;
