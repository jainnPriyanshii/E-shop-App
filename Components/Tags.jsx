import {
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StatusBar,
  } from "react-native";
  import React, { useState } from "react";
  
  const Tags = () => {
    const [selected, setSelected] = useState("Trending Now");
    const tags = ["Trending Now", "All", "New", "Fashion", "Mens","Womens"];
    return (
      <View style={styles.container}>
        <FlatList
          horizontal
          data={tags}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => setSelected(item)}>
                <Text
                  style={[
                    styles.tagText,
                    item == selected ? styles.isSelected : null,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={styles.container}
        />
      </View>
    );
  };
  
  export default Tags;
  
  const styles = StyleSheet.create({
   
    tagText: {
      fontSize: 16,
      fontFamily: "Poppins-Regular",
      borderRadius: 14,
      paddingHorizontal: 30,
      paddingVertical: 10,
      marginHorizontal: 10,
      backgroundColor: "#DFDCDC",
      color: "#938F8F",
      fontWeight: "700",
      
    },
    isSelected: {
      backgroundColor: "#E96E6E",
      color: "#FFFFFF",
    },
    container: {
      marginTop:8,
     marginBottom:10,
      paddingLeft:3,
    //   paddingTop:StatusBar.currentHeight,
    },
  });