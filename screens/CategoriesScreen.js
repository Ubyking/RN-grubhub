import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import CategoryItemsScreen from './CategoryItemsScreen';

const CategoriesScreen = (props) => {
  return (
    <View style={styles.screenContainer}>
      <Text>Categories Screen</Text>
      <Button
        title='Go to CategoryItems screen'
        onPress={() => {
          props.navigation.navigate({ routeName: 'CategoryItemsScreen' });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CategoriesScreen;
