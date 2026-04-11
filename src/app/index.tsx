import React from "react";
import { ScrollView, Image, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { ImageBackground } from "react-native";

export default function Index() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
   <ImageBackground
      source={require("../assets/fundo1.png")}
      style={{ flex: 1 }}
    >
      <ScrollView>
        <View style={{ padding: 20 }}>
          
          <Searchbar
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />

          {/* NOVIDADES */}
          <Text style={styles.title}>NOVIDADES</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={require("../assets/ALBIONONLINE.png")} style={styles.card} />
            <Image source={require("../assets/DeD.png")} style={styles.card} />
          </ScrollView>

        </View>
      </ScrollView>
      <View>
        {/*JOGOS*/}
          <Text style={styles.title}>JOGOS</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Image source={require("../assets/ALBIONONLINE.png")} style={styles.card} />
            <Image source={require("../assets/DeD.png")} style={styles.card} />
            <Image source={require("../assets/dagger.png")} style={styles.card} />
            <Image source={require("../assets/elder.png")} style={styles.card} />
            <Image source={require("../assets/wow.png")} style={styles.card} />
          </ScrollView>
     {/*RPG DE MESA */} 
      <Text style={styles.title}>JOGOS</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image source={require("../assets/ALBIONONLINE.png")} style={styles.card} />
        <Image source={require("../assets/DeD.png")} style={styles.card} />
        <Image source={require("../assets/dagger.png")} style={styles.card} />
        <Image source={require("../assets/elder.png")} style={styles.card} />
        <Image source={require("../assets/wow.png")} style={styles.card} />
        </ScrollView>
     </View>    
    </ImageBackground>
  );
}

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
    marginTop: 20,
  },

  card: {
    width: 150,
    height: 90,
    borderRadius: 10,
    marginHorizontal: 10,
  },
});