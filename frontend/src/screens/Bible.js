import React from "react";
import { StyleSheet, Text, View,ScrollView, SafeAreaView } from "react-native";
import bible from "../../jsonData/oldtest.json";
import Verse from "../../components/Verse";

const Bible = () => {
  //console.log(bible.Leviticus["ምዕራፍ 1።\n"][1]);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <SafeAreaView style={styles.container}>
        {/* StatusBar */}
        <View style={styles.header}>
          <Text style={styles.sectiontitle}>ኦሪት ዘጸአት</Text>
        </View>
        <View style={styles.contentwrapper}>
          {/* Wrapper for all the contents*/}
          <Verse text={"1" + bible.Leviticus["ምዕራፍ 1።\n"][1]} />
          <Verse text={"2" + bible.Leviticus["ምዕራፍ 1።\n"][2]} />
          <Verse text={"3" + bible.Leviticus["ምዕራፍ 1።\n"][3]} />
          <Verse text={"4" + bible.Leviticus["ምዕራፍ 1።\n"][4]} />
          <Verse text={"5" + bible.Leviticus["ምዕራፍ 1።\n"][5]} />
          <Verse text={"6" + bible.Leviticus["ምዕራፍ 1።\n"][6]} />
          <Verse text={"7" + bible.Leviticus["ምዕራፍ 1።\n"][7]} />
          <Verse text={"8" + bible.Leviticus["ምዕራፍ 1።\n"][8]} />
          <Verse text={"9" + bible.Leviticus["ምዕራፍ 1።\n"][9]} />
          <Verse text={"10" + bible.Leviticus["ምዕራፍ 1።\n"][10]} />
          <Verse text={"11" + bible.Leviticus["ምዕራፍ 1።\n"][11]} />
          <Verse text={"12" + bible.Leviticus["ምዕራፍ 1።\n"][12]} />
          <Verse text={"13" + bible.Leviticus["ምዕራፍ 1።\n"][13]} />
          <Verse text={"14" + bible.Leviticus["ምዕራፍ 1።\n"][14]} />
          <Verse text={"15" + bible.Leviticus["ምዕራፍ 1።\n"][15]} />
          <Verse text={"16" + bible.Leviticus["ምዕራፍ 1።\n"][16]} />
          <Verse text={"17" + bible.Leviticus["ምዕራፍ 1።\n"][17]} />
          <Verse text={"18" + bible.Leviticus["ምዕራፍ 1።\n"][18]} />
          <Verse text={"19" + bible.Leviticus["ምዕራፍ 1።\n"][19]} />
          <Verse text={"20" + bible.Leviticus["ምዕራፍ 1።\n"][20]} />
          <Verse text={"21" + bible.Leviticus["ምዕራፍ 1።\n"][21]} />
          <Verse text={"22" + bible.Leviticus["ምዕራፍ 1።\n"][22]} />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1C8FE2",
  },
  sectiontitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contentwrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  header: {
    paddingTop: 11,
    paddingHorizontal: 20,
    // resizeMode: "contain",
    // marginLeft: "10%",
  },
});

export default Bible;
