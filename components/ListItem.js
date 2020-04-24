import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const ListItem = (props) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={props.onSelectItem} activeOpacity={0.7}>
        <View>
          <View style={{ ...styles.itemRow, ...styles.ItemHeaderRow }}>
            <ImageBackground
              source={{ uri: props.image }}
              style={styles.bgImage}
            >
              <View style={styles.titleContainer}>
                <Text style={styles.titleStyle} numberOfLines={1}>
                  {props.title}
                </Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...styles.itemRow, ...styles.itemDetailRow }}>
            <Text style={styles.itemDetailText}>{props.duration} mins</Text>
            <Text style={styles.itemDetailText}>
              {props.complexity.toUpperCase()}
            </Text>
            <Text style={styles.itemDetailText}>
              {props.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 240,
    width: '100%',
    backgroundColor: '#f5f5f5',
    marginBottom: 15,
    borderRadius: 5,
    elevation: 7,
    overflow: 'hidden',
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  titleContainer: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  titleStyle: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'right',
  },
  itemRow: {
    flexDirection: 'row',
  },
  ItemHeaderRow: {
    height: '88%',
  },
  itemDetailRow: {
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '12%',
  },
  itemDetailText: {
    fontFamily: 'open-sans-bold',
    fontSize: 11,
  },
});

export default ListItem;
