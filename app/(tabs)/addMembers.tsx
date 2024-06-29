import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Hamburger from "./hamburger";
import Checkbox from "expo-checkbox";

const mockData = [
  {
    id: "1",
    name: "Adrian",
    streak: 15,
    photo: require("../../assets/pfp/adrian.png"),
    description: "three sum pro",
  },
  {
    id: "2",
    name: "Daniel",
    streak: 12,
    photo: require("../../assets/pfp/daniel.png"),
    description: "Peaked masters in tft",
  },
  {
    id: "3",
    name: "Jamal",
    streak: 7,
    photo: require("../../assets/pfp/jamal.png"),
    description: "Recovering valorant addict ",
  },
  {
    id: "5",
    name: "Alicia",
    streak: 20,
    photo: require("../../assets/pfp/alicia.png"),
    description: "I love tartare",
  },
];

const { width } = Dimensions.get("window");

type ToggleDrawerType = () => void;

export default function FriendsList() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawer: ToggleDrawerType = () => {
    setDrawerVisible(!drawerVisible);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Ionicons
            name="menu"
            size={24}
            color="black"
            style={styles.menuIcon}
          />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.groupName}>Your Friends</Text>
          <TouchableOpacity style={styles.addCircleIconContainer}>
            <Ionicons name="add-circle" size={24} color="black" />
          </TouchableOpacity>
          {mockData.map((user) => (
            <View key={user.id} style={styles.userContainer}>
              <Image source={user.photo} style={styles.userPhoto} />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{user.name}</Text>
                <Checkbox />
              </View>
            </View>
          ))}
        </View>
      </SafeAreaView>
      {drawerVisible && (
        <TouchableWithoutFeedback onPress={closeDrawer}>
          <View style={styles.overlay}>
            <Animated.View style={styles.drawerOverlay}>
              <Hamburger />
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#75BED4",
  },
  menuIcon: {
    alignSelf: "flex-start",
    margin: 10,
  },
  content: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    margin: 20,
    borderRadius: 10,
    padding: 20,
    paddingTop: 80,
    justifyContent: "flex-start",
    alignItems: "center",
    position: "relative",
  },
  groupName: {
    fontSize: 24,
    fontWeight: "bold",
    position: "absolute",
    top: 20,
    left: 20,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: 999,
  },
  drawerOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: width * 0.75,
    height: "100%",
    zIndex: 1000,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  userPhoto: {
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 10,
  },
  userDetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  userDescription: {
    fontSize: 14,
    color: "#828282",
  },
  addCircleIconContainer: {
    position: "absolute",
    top: 25,
    right: 20,
    zIndex: 1,
  },
});
