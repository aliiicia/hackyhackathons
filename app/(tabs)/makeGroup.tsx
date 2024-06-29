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
  TextInput,
  Switch,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Hamburger from "./hamburger";
import DropDownPicker from "react-native-dropdown-picker";
import { Link } from "expo-router";
const { width } = Dimensions.get("window");

type ToggleDrawerType = () => void;

export default function Home() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const toggleDrawer: ToggleDrawerType = () => {
    setDrawerVisible(!drawerVisible);
  };
  const [themeOpen, setThemeOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(null);
  const [theme, setTheme] = useState([
    { label: "Tree", value: "tree" },
    { label: "Dog", value: "dog" },
    { label: "Cat", value: "cat" },
    { label: "Toilet", value: "toilet" },
  ]);

  const [targetOpen, setTargetOpen] = useState(false);
  const [currentTarget, setCurrentTarget] = useState(null);
  const [target, setTarget] = useState([
    { label: "Steps", value: "steps" },
    { label: "Calories", value: "calories" },
  ]);

  const [isPrivate, setIsPrivate] = useState(false);
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
          <Text style={styles.groupName}>Make Group</Text>
          <ScrollView contentContainerStyle={{ justifyContent: "flex-start" }}>
            <View>
              <Text style={styles.title}>Group Name</Text>
              <TextInput style={styles.input} placeholderTextColor="#7d7d7d" />
            </View>
            <View>
              <Text style={styles.title}>Description</Text>
              <TextInput
                style={styles.description}
                multiline={true}
                placeholderTextColor="#7d7d7d"
              />
            </View>
            <View>
              <Text style={styles.title}>Steps Goal</Text>
              <TextInput style={styles.input} placeholderTextColor="#7d7d7d" />
            </View>
            <View>
              <Text style={styles.title}>Theme</Text>
              <DropDownPicker
                open={themeOpen}
                value={currentTheme}
                items={theme}
                setOpen={setThemeOpen}
                setValue={setCurrentTheme}
                setItems={setTheme}
                listMode="MODAL"
                style={styles.picker}
              />
            </View>
            <View>
              <Text style={styles.title}>Target</Text>
              <DropDownPicker
                open={targetOpen}
                value={currentTarget}
                items={target}
                setOpen={setTargetOpen}
                setValue={setCurrentTarget}
                setItems={setTarget}
                listMode="MODAL"
                style={styles.picker}
              />
            </View>
            <Link href="/addMembers" asChild>
              <TouchableOpacity style={styles.addMembers}>
                <Text style={styles.buttonText}>Add Members</Text>
                <Ionicons name="person-add-outline" size={20} color="black" />
              </TouchableOpacity>
            </Link>
            <View style={styles.toggleContainer}>
              <Switch
                style={styles.toggle}
                trackColor={{ true: "#75BED4" }}
                onValueChange={setIsPrivate}
                value={isPrivate}
              ></Switch>
              <Text>Private Group</Text>
            </View>
            <Link href="/usersGroups" asChild>
              <TouchableOpacity style={styles.createGroup}>
                <Text style={styles.buttonText}>Create Group</Text>
              </TouchableOpacity>
            </Link>
          </ScrollView>
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
  },
  groupName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  title: {
    marginTop: 10,
    fontWeight: "bold",
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#D9D9D9",
  },
  toggleContainer: {
    marginTop: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  toggle: {
    marginRight: 10,
  },
  picker: {
    marginTop: 10,
    backgroundColor: "#D9D9D9",
    borderColor: "#ccc",
    borderRadius: 5,
  },
  description: {
    height: 100,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: "#D9D9D9",
  },
  addMembers: {
    marginTop: 20,
    backgroundColor: "#4EA6C2",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "black",
    flexDirection: "row",
    alignSelf: "flex-start",
    alignItems: "center",
  },
  createGroup: {
    marginTop: 10,
    backgroundColor: "#4EA6C2",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: "black",
  },
  buttonText: {
    textAlign: "center",
    marginRight: 10,
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
});
