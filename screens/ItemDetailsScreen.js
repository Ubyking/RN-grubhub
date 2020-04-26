import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../components/CustomHeaderButton';

const CustomItem = (props) => {
  return (
    <View style={styles.customItem}>
      <Text style={styles.customItemText}>{props.children}</Text>
    </View>
  );
};

const ItemDetailsScreen = (props) => {
  const availableMeals = useSelector((state) => state.mealsReducer.meals);
  const itemId = props.navigation.getParam('itemId');
  const selectMeal = availableMeals.find((meal) => meal.id === itemId);

  useEffect(() => {
    props.navigation.setParams({ mealTitle: selectMeal.title });
  }, [selectMeal]);

  return (
    <View style={styles.screenContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={{ uri: selectMeal.imageUrl }}
          style={styles.imageStyle}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.headerTextStyle}>{selectMeal.duration} Mins</Text>
          <Text style={styles.headerTextStyle}>
            {selectMeal.complexity.toUpperCase()}
          </Text>
          <Text style={styles.headerTextStyle}>
            {selectMeal.affordability.toUpperCase()}
          </Text>
        </View>
        <Text style={styles.sectionHeaderStyle}>Ingredients:</Text>
        {selectMeal.ingredients.map((ingredient) => (
          <CustomItem style={styles.textStyle} key={ingredient}>
            {ingredient}
          </CustomItem>
        ))}
        <Text style={styles.sectionHeaderStyle}>Method:</Text>
        {selectMeal.steps.map((step) => (
          <CustomItem style={styles.textStyle} key={step}>
            {step}
          </CustomItem>
        ))}
      </ScrollView>
    </View>
  );
};

ItemDetailsScreen.navigationOptions = (navigationData) => {
  const itemId = navigationData.navigation.getParam('itemId');
  const mealTitle = navigationData.navigation.getParam('mealTitle');

  return {
    headerTitle: mealTitle,
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
    margin: 7,
  },
  imageStyle: {
    height: 250,
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  detailsContainer: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontFamily: 'open-sans-bold',
    fontSize: 14,
  },
  textStyle: {
    fontFamily: 'open-sans',
    fontSize: 14,
  },
  sectionHeaderStyle: {
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  customItem: {
    marginVertical: 3,
    marginHorizontal: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
  },
  customItemText: {
    fontFamily: 'open-sans',
    fontSize: 12,
  },
});

export default ItemDetailsScreen;
