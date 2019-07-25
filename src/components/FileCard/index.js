// @flow
import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import commonStyles from "../../common/styles";
import styles from "./styles";
import type { FileCardPropsType } from "./types";

const FileCard = ({ filename }: FileCardPropsType) => (
  <View style={commonStyles.bgCard}>
    <Icon name="file" size={60} color="#289BE7" />
    <Text style={styles.extentaJuli2017Pdf}>{filename}</Text>
  </View>
);

export default FileCard;
