import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Animated, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Hamburger from './hamburger';

const { width } = Dimensions.get('window');

type ToggleDrawerType = () => void;

export default function Home() {
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
          <Ionicons name="menu" size={24} color="black" style={styles.menuIcon} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.groupName}>Group Name</Text>
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
    backgroundColor: '#75BED4',
  },
  menuIcon: {
    alignSelf: 'flex-start',
    margin: 10,
  },
  content: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    margin: 20,
    borderRadius: 10,
    padding: 20,
    justifyContent: 'flex-start',
  },
  groupName: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 999,
  },
  drawerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: width * 0.75,
    height: '100%',
    zIndex: 1000,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
});
