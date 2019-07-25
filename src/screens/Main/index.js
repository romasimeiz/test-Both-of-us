/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";

import DocumentPicker from "react-native-document-picker";
import styles from "./styles";
import { AddButton, FileCard } from "../../components";
import type { FileInfo, MainScreenState } from "./types";

class MainScreen extends Component<{}, MainScreenState> {

  state = {
    extentors: [],
    labbar: [],
    ovrigt: [],
  };

  openSelectDialog = async ():Promise<FileInfo> => {
    const res = await DocumentPicker.pick();
    return  {
      uri: res.uri,
      type: res.type,
      name: res.name,
      size: res.size,
    };
  };

  selectFileExtentors = async ():Promise<void> => {
    try {
      const newFile = await this.openSelectDialog();
      this.setState( ({ extentors }) => ({ extentors: [...extentors, newFile] }) );
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        throw err;
      }
    }
  };

  selectFileLabbar = async ():Promise<void> => {
    try {
      const newFile = await this.openSelectDialog();
      this.setState( ({ labbar }) => ({ labbar: [...labbar, newFile] }) );
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        throw err;
      }
    }
  };

  selectFileOvrigt = async ():Promise<void> => {
    try {
      const newFile = await this.openSelectDialog();
      this.setState( ({ ovrigt }) => ({ ovrigt: [...ovrigt, newFile] }) );
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
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
              <Text style={styles.title}>Extentor...</Text>
              <View style={styles.cardsContainer}>
                {
                  this.state.extentors.length > 0 &&
                  this.state.extentors.map(file => <FileCard key={file.uri} filename={file.name} />)
                }
                <AddButton handler={this.selectFileExtentors} />
              </View>
            </View>
            <View style={styles.fileBlockWrapper}>
              <Text style={styles.title}>Labbar...</Text>
              <View style={styles.cardsContainer}>
                {
                  this.state.labbar.length > 0 &&
                  this.state.labbar.map(file => <FileCard key={file.uri} filename={file.name} />)
                }
                <AddButton handler={this.selectFileLabbar} />
              </View>
            </View>
            <View style={styles.fileBlockWrapper}>
              <Text style={styles.title}>Övrigt...</Text>
              <View style={styles.cardsContainer}>
                {
                  this.state.ovrigt.length > 0 &&
                  this.state.ovrigt.map(file => <FileCard key={file.uri} filename={file.name} />)
                }
                <AddButton handler={this.selectFileOvrigt} />
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default MainScreen;
