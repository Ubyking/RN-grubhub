import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  StyleSheet,
  Platform,
} from 'react-native';

const CategoryGridTile = (props) => {
  let TouchComp = TouchableOpacity;

  // get the platform specific handler
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchComp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.gridItem}>
      <TouchComp
        style={{ flex: 1 }}
        onPress={props.onSelect}
        activeOpacity={0.8}
      >
        <View
          style={{ ...styles.container, ...{ backgroundColor: props.color } }}
        >
          <Text style={styles.titleStyle}>{props.title}</Text>
        </View>
      </TouchComp>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 7,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  gridItem: {
    flex: 1,
    margin: 7,
    height: 125,
  },
  titleStyle: {
    fontFamily: 'open-sans-bold',
    fontSize: 11,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
