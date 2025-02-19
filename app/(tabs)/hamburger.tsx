import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";

const Hamburger = () => (
  <View style={styles.drawerContainer}>
    <View style={styles.drawerHeader}>
      <View style={styles.profileCircle} />
      <Text style={styles.profileName}>Meredith</Text>
    </View>
    <Link href="/home" asChild>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="home" size={30} color="black" />
        <Text style={styles.drawerItemText}>Home</Text>
      </TouchableOpacity>
    </Link>
    <Link href="/friendsList" asChild>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="people" size={30} color="black" />
        <Text style={styles.drawerItemText}>Friends</Text>
      </TouchableOpacity>
    </Link>
    <TouchableOpacity style={styles.drawerItem}>
      <Ionicons name="bar-chart" size={30} color="black" />
      <Text style={styles.drawerItemText}>Leaderboard</Text>
    </TouchableOpacity>
    <Link href="/usersGroups" asChild>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="people-circle" size={30} color="black" />
        <Text style={styles.drawerItemText}>Groups</Text>
      </TouchableOpacity>
    </Link>
    <Link href="/findGroup" asChild>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="search" size={30} color="black" />
        <Text style={styles.drawerItemText}>Find a Group</Text>
      </TouchableOpacity>
    </Link>
    <Link href="/settings" asChild>
      <TouchableOpacity style={styles.drawerItem}>
        <Ionicons name="settings" size={30} color="black" />
        <Text style={styles.drawerItemText}>Settings</Text>
      </TouchableOpacity>
    </Link>
  </View>
);

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  drawerHeader: {
    backgroundColor: '#ADD8E6',
    height: 220,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 45,
    marginBottom: 20
  },
  profileCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#6ca0dc',
    marginBottom: 10,
  },
  profileName: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 5
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingTop: 15,
    marginLeft: 20,
  },
  drawerItemText: {
    fontSize: 20,
    marginLeft: 15,
  },
});

export default Hamburger;
