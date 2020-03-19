import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

const AlbumDetail = () => {
  return (
   <View style={styles.cardContainerStyle}>
      <View style={[styles.thumbnailContainerStyle, styles.cardSectionStyle]}>
         <Image
         style={styles.thumbnailStyle}
         source={{
            uri: "https://i1.kknews.cc/SIG=16ka6m7/ctp-vzntr/1540718129540204230573s.jpg"
         }}
         />
         <View style={styles.headerContentStyle}>
         <Text>Ａlan Walker</Text>
         <Text>Faded</Text>
         </View>
      </View>
      <View style={styles.cardSectionStyle}>
         <Image
         style={styles.imageStyle}
         source={{
            uri:
               "https://4.bp.blogspot.com/-dmXaDZkkGTQ/VxJjfEIg8kI/AAAAAAAACmw/9SKscKckL_AjYiXAl35rrXpmv7CtOtB6wCKgB/s1600/Faded-by-Alan-Walker.jpg"
         }}
         />
      </View>
   </View>
  );
};

const styles = StyleSheet.create({
  thumbnailContainerStyle: {
    flexDirection: "row",
    justifyContent: "flex-start"
  },
  thumbnailStyle: {
    height: 50,
    width: 50,
    margin: 5
  },
  headerContentStyle: {
    flexDirection: "column",
    justifyContent: "space-around",
    paddingLeft: 10
  },
  cardContainerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#ddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  },
  cardSectionStyle: {
    padding: 5,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderBottomWidth: 1
  },
  imageStyle: {
    height: 300,
    width: null
  }
});

export default AlbumDetail;
