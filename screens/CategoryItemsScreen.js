import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import ItemDetailsScreen from './ItemDetailsScreen';

const CategoryItemsScreen = (props) => {
  return (
    <View style={styles.screenContainer}>
      <Text>Category Items Screen</Text>
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
