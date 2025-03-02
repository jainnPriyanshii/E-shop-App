import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Tags = () => {
  const [selected, setSelected] = useState("Trending Now");
  const tags = ["Trending Now", "All", "New", "Fashion", "Mens", "Womens","Kids","Sale","Accessories"];

  return (
    <View style={styles.container}>
      <FlatList
        data={tags}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.tagButton,
              item === selected ? styles.isSelected : null,
            ]}
            onPress={() => setSelected(item)}
          >
            <Text
              style={[
                styles.tagText,
                item === selected ? styles.selectedText : null,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Tags;

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingLeft: 5,
  },
  listContainer: {
    flexGrow: 1,
  },
  tagButton: {
    borderRadius: 14,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 5, // Spacing between vertical items
    backgroundColor: "#DFDCDC",
  },
  tagText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#938F8F",
  },
  isSelected: {
    backgroundColor: "#E96E6E",
  },
  selectedText: {
    color: "#FFFFFF",
  },
});
