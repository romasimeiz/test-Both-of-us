/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

import DocumentPicker from 'react-native-document-picker';
import styles from './styles';
import { AddButton, FileCard } from './components';
class App extends Component {

  state = {
    extentors: [],
    labbar: [],
    ovrigt: [],
  };

  selectFile = async type => {
    try {
      const res = await DocumentPicker.pick();
      const newFile = {
        uri: res.uri,
        type: res.type,
        name: res.name,
        size: res.size,
      };
      const prevStateOfType = this.state[type];
      this.setState({ [type]: [...prevStateOfType, newFile] });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  };

  render() {
    return (
        <Fragment>
          <StatusBar barStyle="dark-content" />
          <SafeAreaView>
            <ScrollView contentContainerStyle={styles.scrollViewContainer}>
              <View style={styles.topSideBar}>
                <View style={styles.delatKursmaterialContainer}>
                  <Text style={styles.delatKursmaterial}>Delat kursmaterial</Text>
                </View>
                <View style={styles.rectangle}>
                  <Text style={styles.seAllaFiler}>Se alla filter</Text>
                </View>
              </View>
              <View style={styles.fileBlockWrapper}>
                <Text style={styles.title}>
                  Extentor...
                </Text>
                <View style={styles.cardsContainer}>
                  {
                    this.state.extentors.length ?
                      this.state.extentors.map(file => <FileCard key={file.uri} filename={file.name} />)
                      :
                      null
                  }
                  <AddButton handler={() => this.selectFile("extentors")} />
                </View>
              </View>
              <View style={styles.fileBlockWrapper}>
                <Text style={styles.title}>Labbar...</Text>
                <View style={styles.cardsContainer}>
                  {
                    this.state.labbar.length ?
                        this.state.labbar.map(file => <FileCard key={file.uri} filename={file.name} />)
                        :
                        null
                  }
                  <AddButton handler={() => this.selectFile("labbar")} />
                </View>
              </View>
              <View style={styles.fileBlockWrapper}>
                <Text style={styles.title}>Övrigt...</Text>
                <View style={styles.cardsContainer}>
                  {
                    this.state.ovrigt.length ?
                        this.state.ovrigt.map(file => <FileCard key={file.uri} filename={file.name} />)
                        :
                        null
                  }
                  <AddButton handler={() => this.selectFile("ovrigt")} />
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Fragment>
    );
  }
}

export default App;
