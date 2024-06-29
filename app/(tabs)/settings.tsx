import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, TouchableOpacity, Dimensions, TouchableWithoutFeedback, Animated, Alert, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from "expo-router";
import * as ImagePicker from "expo-image-picker"; 
import Hamburger from './hamburger';

const { width } = Dimensions.get('window');

type ToggleDrawerType = () => void;

export default function Settings() {
    const [drawerVisible, setDrawerVisible] = useState(false);
    const toggleDrawer: ToggleDrawerType = () => {
        setDrawerVisible(!drawerVisible);
    };

    const closeDrawer = () => {
        setDrawerVisible(false);
    };

    const [username, onChangeUsername] = useState("Meredith");
    const [email, onChangeEmail] = useState("email123@gmail.com");
    const [password, onChangePassword] = useState("");

    const pickImage = async () => { 
        const { status } = await ImagePicker. 
            requestMediaLibraryPermissionsAsync(); 
  
        if (status !== "granted") { 
            // If permission is denied, show an alert 
            Alert.alert( 
                "Permission Denied"
            ); 
        } else { 
            // Launch the image library and get 
            // the selected image 
            const result = await ImagePicker.launchImageLibraryAsync(); 
        } 
    }; 


    const renderContent = () => {
        return (
            <View style={styles.profileContainer}>
                <TouchableOpacity style={styles.circlebutton} 
                    onPress={pickImage}> 
                    <Text style={styles.circlebuttonText}>Profile Picture</Text> 
                </TouchableOpacity> 
                <Text style={styles.inputLabel}>Username</Text>
                <TextInput
                    style={styles.input}
                    placeholder="New username"
                    onChangeText={onChangeUsername}
                    value={username}
                    placeholderTextColor="#7d7d7d"
                />
                <Text style={styles.inputLabel}>Email Address</Text>
                <TextInput
                    style={styles.input}
                    placeholder="New email address"
                    onChangeText={onChangeEmail}
                    value={email}
                    placeholderTextColor="#7d7d7d"
                />
                <Text style={styles.inputLabel}>Password</Text>
                <TextInput
                    style={styles.input}
                    placeholder="New password"
                    onChangeText={onChangePassword}
                    value={password}
                    placeholderTextColor="#7d7d7d"
                    secureTextEntry
                />
                <Link href="/home" asChild>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.buttonText}>Apply Changes</Text>
                    </TouchableOpacity>
                </Link>
            </View>
      );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.appContainer}>
            <SafeAreaView style={styles.container}>
                <TouchableOpacity onPress={toggleDrawer}>
                    <Ionicons name="menu" size={24} color="black" style={styles.menuIcon} />
                </TouchableOpacity>
                <View style={styles.content}>
                    <Text style={styles.pageName}>Edit Profile</Text>
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
    </TouchableWithoutFeedback>
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
    pageName: {
        fontSize: 32,
        fontWeight: 'bold',
        position: 'absolute',
        top: 32,
        left: 32,
    },
    editIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
    },
    profileContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginBottom: 16,
        backgroundColor: '#D9D9D9',
    },
    inputLabel: {
        width: '80%',
        justifyContent: 'flex-start',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#4fc3f7',
        padding: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    circlebutton: {
        backgroundColor: '#6ca0dc',
        height: 150,
        width: 150,
        padding: 10,
        borderRadius: 150,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    circlebuttonText: {
        color: '#fff',
        fontSize: 18,
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
