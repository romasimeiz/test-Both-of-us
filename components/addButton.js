import React from 'react';
import {TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../styles";

const AddButton = ({ handler }) => (
    <TouchableOpacity onPress={handler} style={styles.bgCard}>
        <Icon name="plus" size={40} />
    </TouchableOpacity>
);

export default AddButton;
