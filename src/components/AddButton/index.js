// @flow
import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import styles from "../../common/styles";
import type { AddButtonPropsType } from "./types";

const AddButton = ({ handler }: AddButtonPropsType) => (
  <TouchableOpacity onPress={handler} style={styles.bgCard}>
    <Icon name="plus" size={40} />
  </TouchableOpacity>
);

export default AddButton;
