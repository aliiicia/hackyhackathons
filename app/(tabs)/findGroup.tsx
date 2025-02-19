import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Animated, Dimensions, TouchableWithoutFeedback, Image, ScrollView, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Hamburger from './hamburger';

const mockData = [
  { id: '1', name: 'raccoons', photo: require('../../assets/groups/raccoons.png'), target: 'Steps - 10,000 daily', description: 'I love racoons' },
  { id: '2', name: 'UNSW', photo: require('../../assets/groups/unsw.png'), target: 'Calories burned - 1000 daily', description: 'This group is for students from the University of New South Wales!' }
];

const { width } = Dimensions.get('window');

type ToggleDrawerType = () => void;

export default function usersGroups() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const [searchText, setSearchText] = useState('');

  const toggleDrawer: ToggleDrawerType = () => {
    setDrawerVisible(!drawerVisible);
  };

  const closeDrawer = () => {
    setDrawerVisible(false);
  };

  const toggleGroupDetails = (groupId: string) => {
    setExpandedGroup(expandedGroup === groupId ? null : groupId);
  };

  const renderContent = () => {
    return (
      <ScrollView contentContainerStyle={styles.progressContainer}>
        {mockData.map((group, index) => (
          <View key={group.id} style={[styles.groupContainer, index === 0 && { marginTop: 30 }]}>
            <View style={styles.groupHeader}>
              <Image source={group.photo} style={styles.groupPhoto} />
              <Text style={styles.groupName}>{group.name}</Text>
              <TouchableOpacity onPress={() => toggleGroupDetails(group.id)}>
                <Ionicons name={expandedGroup === group.id ? "chevron-up" : "chevron-down"} size={24} color="black" />
              </TouchableOpacity>
            </View>
            {expandedGroup === group.id && (
              <View style={styles.groupExtraDetails}>
                <Text style={styles.groupTarget}>Target</Text>
                <View style={styles.targetBox}>
                  <Text>{group.target}</Text>
                </View>
                <Text style={styles.groupDescriptionLabel}>Description</Text>
                <View style={styles.descriptionBox}>
                  <Text>{group.description}</Text>
                </View>
                <TouchableOpacity style={styles.groupPageButton}>
                  <Text style={styles.groupPageButtonText}>Join Group</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
    <View style={styles.appContainer}>
      <SafeAreaView style={styles.container}>
        <TouchableOpacity onPress={toggleDrawer}>
          <Ionicons name="menu" size={24} color="black" style={styles.menuIcon} />
        </TouchableOpacity>
        <View style={styles.content}>
          <Text style={styles.title}>Find a group</Text>
          <TouchableOpacity style={styles.filterIconContainer}>
            <Ionicons name="filter" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.search}>
            <TextInput
              style={styles.searchInput}
              placeholder="Enter a Group Code"
              placeholderTextColor="black"
              value={searchText}
              onChangeText={setSearchText}
            />
            <Ionicons name="search" size={24} color="black" style={styles.searchIcon} />
          </View>
          {renderContent()}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 20,
  },
  progressContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
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
  groupContainer: {
    alignItems: 'flex-start',
    marginVertical: 20,
    width: '100%',
    paddingHorizontal: 10,
  },
  groupPhoto: {
    width: 70,
    height: 70,
    borderRadius: 25,
    marginRight: 10,
  },
  groupDetails: {
    flex: 1,
    width: '100%',
  },
  groupHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginLeft: 10,
  },
  groupExtraDetails: {
    marginTop: 10,
    alignItems: 'flex-start',
    width: 300,
  },
  groupTarget: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  targetBox: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    width: '100%'
  },
  groupDescriptionLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  descriptionBox: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    width: '100%',
  },
  groupPageButton: {
    backgroundColor: '#75BED4',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignSelf: 'center',
    alignContent: 'center',
  },
  groupPageButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  filterIconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1,
  },
  search: {
    backgroundColor: '#E0E0E0',
    padding: 10,
    borderRadius: 5,
    marginTop: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
  },
  searchIcon: {
    marginLeft: 10,
  },
});
