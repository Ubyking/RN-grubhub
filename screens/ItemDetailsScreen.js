import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ItemDetailsScreen = (props) => {
  return (
    <View style={styles.screenContainer}>
      <Text>Items Details Screen</Text>
      <View style={styles.buttonStyle}>
        <Button
          title='Go back to Category Items'
          onPress={() => props.navigation.goBack()}
        />
      </View>
      <View style={styles.buttonStyle}>
        <Button
          title='Go back to Categories (home)'
          onPress={() => props.navigation.popToTop()}
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

export default ItemDetailsScreen;
