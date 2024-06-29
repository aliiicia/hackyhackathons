import React from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Link } from "expo-router";

export default function Register() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.circle1}></View>
        <View style={styles.circle2}></View>
        <Text style={styles.title}>Create an Account</Text>
        <TextInput
          style={styles.input}
          placeholder="username"
          placeholderTextColor="#7d7d7d"
        />
        <TextInput
          style={styles.input}
          placeholder="password"
          placeholderTextColor="#7d7d7d"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>→</Text>
        </TouchableOpacity>
        <View style={styles.bottomTextContainer}>
          <Text style={styles.signUpText}>Already have an account? </Text> 
          <Link href="/login">
            <Text style={styles.signUpLink}>Log in</Text> 
          </Link>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#75BED4',
  },
  circle1: {
    position: 'absolute',
    width: 700,
    height: 700,
    borderRadius: 350,
    top: 72,
    left: -155,
    backgroundColor: '#ACE7FF',
  },
  circle2: {
    position: 'absolute',
    width: 600,
    height: 600,
    borderRadius: 300,
    backgroundColor: '#F0F0F0',
    top: 172,
    left: -55,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
    backgroundColor: '#D9D9D9',
  },
  button: {
    backgroundColor: '#4fc3f7',
    padding: 10,
    borderRadius: 10,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    width: '50%',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  bottomTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
  },
  signUpText: {
    color: '#C9C9C9',
    fontSize: 20,
    fontWeight: 'bold',
  },
  signUpLink: {
    color: '#00A3FF',
    textShadowColor: 'rgba(0, 163, 255, 0.75)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
});