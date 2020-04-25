import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ListItem from './ListItem';

const ListRenderer = (props) => {
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
    <View style={styles.listContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={props.listData}
        renderItem={renderItemHandler}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    margin: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ListRenderer;
