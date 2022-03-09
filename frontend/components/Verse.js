import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import bible from "../jsonData/oldtest.json";

const Verse = (props) => {

// console.log(bible.Leviticus["ምዕራፍ 1።\n"][1]);

  return (
    <View style = {styles.item}>
      <Text>
        <Text>{props.text}</Text>
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({

});

export default Verse;
