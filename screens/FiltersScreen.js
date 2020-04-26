import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton';

import Colors from '../constants/Colors';

//import { FlatList } from 'react-native-gesture-handler';

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text style={styles.optionText}>{props.label}</Text>
      <Switch
        trackColor={{ true: Colors.sliderColor }}
        thumbColor={Colors.primaryColor}
        value={props.state}
        onValueChange={props.onChange}
      />
    </View>
  );
};

const FiltersScreen = (props) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVeggie, setIsVeggie] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);

  return (
    <View style={styles.screenContainer}>
      <Text>Filters Screen</Text>
      <FilterSwitch
        label='Gluten Free'
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      />
      <FilterSwitch
        label='Vegetarian Options'
        state={isVeggie}
        onChange={(newValue) => setIsVeggie(newValue)}
      />
      <FilterSwitch
        label='Vegan Options'
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      />
      <FilterSwitch
        label='Lactose Free'
        state={isLactoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      />
    </View>
  );
};

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerTitle: 'Filters',
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
  screenContainer: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  filterContainer: {
    marginTop: 10,
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
  optionText: {
    fontFamily: 'open-sans',
    fontSize: 12,
  },
});

export default FiltersScreen;
