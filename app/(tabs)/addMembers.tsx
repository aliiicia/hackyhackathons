import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Image,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { Link } from "expo-router";

type User = {
  id: string;
  name: string;
  selected: boolean;
  photo: any;
};

const mockData = [
  {
    id: "1",
    name: "Adrian",
    selected: false,
    photo: require("../../assets/pfp/adrian.png"),
  },
  {
    id: "2",
    name: "Daniel",
    selected: false,
    photo: require("../../assets/pfp/daniel.png"),
  },
  {
    id: "3",
    name: "Jamal",
    selected: false,
    photo: require("../../assets/pfp/jamal.png"),
  },
  {
    id: "5",
    name: "Alicia",
    selected: false,
    photo: require("../../assets/pfp/alicia.png"),
  },
];

const { width } = Dimensions.get("window");

type ToggleDrawerType = () => void;

export default function FriendsList() {
  const [searchText, setSearchText] = useState("");
  const [users, setUsers] = useState<User[]>(mockData);

  const handleChange = (id: string) => {
    let temp = users.map((user) => {
      if (id == user.id) {
        return { ...user, selected: !user.selected };
      }
      return user;
    });
    setUsers(temp);
  };

  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.container}>
        <Link href="/makeGroup" asChild>
          <TouchableOpacity>
            <Ionicons
              name="chevron-back-outline"
              size={24}
              color="black"
              style={styles.menuIcon}
            />
          </TouchableOpacity>
        </Link>
        <View style={styles.content}>
          <Text style={styles.groupName}>Add Members</Text>
          <View style={styles.search}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search for user"
              placeholderTextColor="black"
              value={searchText}
              onChangeText={setSearchText}
            />
            <Ionicons
              name="search"
              size={24}
              color="black"
              style={styles.searchIcon}
            />
          </View>
          {users
            .filter((user) => user.name.match(searchText))
            .map((user) => (
              <View key={user.id} style={styles.userContainer}>
                <Image source={user.photo} style={styles.userPhoto} />
                <View style={styles.userDetails}>
                  <Text style={styles.userName}>{user.name}</Text>
                  <Checkbox
                    color="#8F619F"
                    value={user.selected}
                    onValueChange={() => {
                      handleChange(user.id);
                    }}
                  />
                </View>
              </View>
            ))}
          <Link href="/makeGroup" asChild>
            <TouchableOpacity style={styles.addMembers}>
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </SafeAreaView>
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
    alignItems: "stretch",
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
  addMembers: {
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
  search: {
    backgroundColor: "#E0E0E0",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
});
