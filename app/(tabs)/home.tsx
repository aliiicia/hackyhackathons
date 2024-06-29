import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Animated, Dimensions, TouchableWithoutFeedback, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CircularProgress } from 'react-native-circular-progress';
import Hamburger from './hamburger';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import ProgressBar from 'react-native-progress-bar-horizontal';

const mockData = [
  { id: '1', name: 'Adrian', progress: 0.30, photo: require('../../assets/pfp/adrian.png') },
  { id: '2', name: 'Daniel', progress: 0.50, photo: require('../../assets/pfp/daniel.png') },
  { id: '3', name: 'Jamal', progress: 0.77, photo: require('../../assets/pfp/jamal.png') },
  { id: '4', name: 'Meredith', progress: 0.40, photo: require('../../assets/pfp/meredith.png') },
  { id: '5', name: 'Alicia', progress: 0.10, photo: require('../../assets/pfp/alicia.png') },
];

const { width } = Dimensions.get('window');

type ToggleDrawerType = () => void;

export default function Home() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleDrawer: ToggleDrawerType = () => {
    setDrawerVisible(!drawerVisible);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const renderContent = () => {
    if (selectedIndex === 0) {
      return (
        <View style={styles.progressContainer}>
          <View style={styles.progressBarContainer}>
            <CircularProgress
              size={250}
              width={15}
              fill={55}
              tintColor="#00A3FF"
              backgroundColor="#D9D9D9"
            >
              {() => (
                <Text style={styles.progressText}>55%</Text>
              )}
            </CircularProgress>
          </View>
          <Image
            source={require('../../assets/images/dog.gif')}
            style={styles.gifImage}
          />
        </View>
      );
    } else {
      return (
        <View style={styles.progressContainer}>
          <TouchableOpacity style={styles.editIconContainer}>
            <Ionicons name="pencil" size={24} color="black" />
          </TouchableOpacity>
          {mockData.map((user) => (
            <View key={user.id} style={styles.userContainer}>
              <Image source={user.photo } style={styles.userPhoto} />
              <View style={styles.userDetails}>
                <Text style={styles.userName}>{user.name}</Text>
                <ProgressBar
                  progress={user.progress}
                  borderWidth={1}
                  fillColor="#00A3FF"
                  unfilledColor="#D9D9D9"
                  height={10}
                  duration={100}
                />
              </View>
            </View>
          ))}
        </View>
      );
    }
  };

  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Ionicons name="menu" size={24} color="black" style={styles.menuIcon} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.groupName}>hacky hackathons</Text>
          {renderContent()}
          <SegmentedControl
            values={['Home', 'Progress']}
            selectedIndex={selectedIndex}
            onChange={(event) => {
              setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
            }}
            style={styles.segmentedControl}
          />
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
    alignItems: 'center',
    position: 'relative',
  },
  groupName: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  segmentedControl: {
    position: 'absolute',
    bottom: 20,
    width: '90%',
  },
  progressContainer: {
    alignItems: 'center',
    
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  progressBarContainer: {
    position: 'absolute',
    top: '20%',
  },
  gifImage: {
    width: 250,
    height: 250,
  },
  progressText: {
    fontSize: 50,
    color: '#000',
    fontWeight: 'bold',
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
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  editIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
  },
});
