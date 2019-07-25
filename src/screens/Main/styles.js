import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  delatKursmaterialContainer: {
    width: "50%",
  },
  delatKursmaterial: {
    width: 300,
    height: 23.6,
    fontFamily: "Roboto-Regular",
    fontSize: 18,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 22,
    letterSpacing: 0,
    color: "#c1c7c7",
  },
  rectangle: {
    width: 120,
    height: 33,
    borderRadius: 25,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
    alignItems: "center",
  },
  seAllaFiler: {
    width: 70,
    height: 14,
    fontFamily: "Roboto-Regular",
    fontSize: 12,
    fontWeight: "normal",
    fontStyle: "normal",
    lineHeight: 14,
    letterSpacing: 0,
    textAlign: "center",
    color: "gray",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
  },
  scrollViewContainer: {
    paddingHorizontal: 15,
    height: "100%",
  },
  topSideBar: {
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  fileBlockWrapper: {
    marginVertical: 15,
  },
});

export default styles;
