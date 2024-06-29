import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Platform, StatusBar } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const GroupPage = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="menu" size={24} color="black" style={styles.menuIcon} />
      </View>
      <View style={styles.content}>
        <Text style={styles.groupName}>Group Name</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#75BED4',
  },
  header: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  menuIcon: {
    alignSelf: 'flex-start',
  },
  content: {
    flex: 1,
    backgroundColor: '#F2F2F2',
    margin: 20,
    borderRadius: 10,
    padding: 20,
  },
  groupName: {
    fontSize: 24,
    fontWeight: 'bold',
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default GroupPage;
