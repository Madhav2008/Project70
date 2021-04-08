import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  StyleSheet,
  Button,
} from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import firebase from 'firebase';
import db from '../config';

export default class WriteStoryScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            source={require('../assets/logo.jpg')}
            style={{ width: 100, height: 100 }}
          />
        </View>

        <Text style={{ textAlign: 'center', fontSize: 30, fontWeight: 'bold' }}>
          Story Hub
        </Text>
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Title Of The Story" />
        </View>
        <View style={styles.inputView}>
          <TextInput style={styles.inputBox} placeholder="Author Of The Story" />
        </View>

        <TextInput
          style={styles.textArea}
          placeholder="Write Your Story Here"
          placeholderTextColor="grey"
          numberOfLines={10}
          multiline={true}
        />

        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center'
  },

  inputBox: {
    width: 300,
    height: 30,
    borderWidth: 2.5,
    fontSize: 18,
    textAlign: 'center'
  },
  inputView: {
    flexDirection: 'row',
    margin: 15
  },

  textArea: {
    height: 150,
    justifyContent: 'flex-start',
    width: 300,
    fontSize: 18,
    borderWidth: 2.5,
    marginTop: 15,
    textAlign: 'center'
  },
  submitButton: {
    backgroundColor: '#FBC02D',
    width: 100,
    height: 30,
    alignSelf: 'center',
    marginTop: 20
  },
  submitButtonText: {
    textAlign: 'center',
    marginTop: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white'
  },
});