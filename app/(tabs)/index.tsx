// import { Image } from 'expo-image';
// import { Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';

// /*import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';*/


// const blurhash =
//   '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

// export default function HomeScreen() {
//   return (
//     <SafeAreaView>
//     <View style={styles.mainContainer}>
//             <Image
//         style={styles.image}
//         source="https://picsum.photos/seed/696/3000/2000"
//                 placeholder={{ blurhash }}
//       />
//       <Text style={styles.subContainer}>
//         Hello
//       </Text>
//     </View>
//     <View style={styles.box}>
//       <Text>Munna</Text>
//     </View>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//       mainContainer:{
//         flex:1,
//         backgroundColor:"black"
//   },
//     image: {
//     flex: 1,
//     width: '100%',
//     backgroundColor: '#0553',
//   },
//   subContainer:{
//     backgroundColor:"black",
//     height:300,
//     margin:20,
//     borderRadius:10,
//     justifyContent:"center",
//     textAlign:"center",
//     alignItems:"center",
//   },
//   box:{
//     height:200,
//     width:300,
//     // backgroundColor:"red",
//     margin:20,
//     alignItems:"center",
//     borderRadius:10
//     }
// });










import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList, TouchableOpacity, useColorScheme } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";

const images = [
  "https://picsum.photos/id/1015/600/800",
  "https://picsum.photos/id/1016/600/800",
  "https://picsum.photos/id/1018/600/800",
  "https://picsum.photos/id/1020/600/800",
  "https://picsum.photos/id/1024/600/800",
  "https://picsum.photos/id/1025/600/800",
];

export default function SavedScreen() {
  const scheme = useColorScheme(); 

  const renderItem = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={styles.imageCard} />
  );

  return (
    <SafeAreaView style={[styles.container, scheme === "dark" ? styles.dark : styles.light]}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color={scheme === "dark" ? "white" : "black"} />
       
        <View style={styles.profile}></View>
      </View>

      <View style={styles.tabs}>
        <Text style={[styles.tabText, scheme === "dark" ? { color: "#aaa" } : { color: "#444" }]}>
          Followers
        </Text>
        <Text style={[styles.tabActive, scheme === "dark" ? { color: "white" } : { color: "black" }]}>
          Saved
        </Text>
        <Text style={[styles.tabText, scheme === "dark" ? { color: "#aaa" } : { color: "#444" }]}>
          Following
        </Text>
      </View>

      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.gallery}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  light: {
    backgroundColor: "#fff",
  },
  dark: {
    backgroundColor: "#000",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    marginTop: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "orange",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  tabText: {
    fontSize: 16,
    color: "#888",
  },
  tabActive: {
    fontSize: 18,
    fontWeight: "700",
  },
  gallery: {
    paddingHorizontal: 10,
  },
  imageCard: {
    flex: 1,
    aspectRatio: 1,
    margin: 5,
    borderRadius: 12,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    borderTopWidth: 0.5,
    borderColor: "#ccc",
  },
  plusButton: {
    backgroundColor: "black",
    borderRadius: 25,
    padding: 10,
  },
});

