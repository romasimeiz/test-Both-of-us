import React from 'react';
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles";

const FileCard = ({ filename }) => (
    <View style={styles.bgCard}>
        <Icon name="file" size={60} color="#289BE7" />
        <Text style={styles.extentaJuli2017Pdf}>{filename}</Text>
    </View>
);

export default FileCard;
