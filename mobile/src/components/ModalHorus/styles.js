import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
  centeredViewModal: {
    flex: 1,
    justifyContent: "center",
    marginTop: 22
  },
  modalViewClose: {
    marginTop: 22
  },
  modalView: {
    flex: 1,
    marginTop: 40,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 8,
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20
  },
  modalViewContent: {
    marginTop: 20,
    flexDirection: "column"
  },
  openButton: {
    backgroundColor: "#FFF",
    height: 50,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  actionText: {
    color: "#E02041",
    fontSize: 15,
    fontWeight: "bold"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    flexDirection: "row"
  },
  modalTextDescription: {
    fontWeight: "bold",
    marginBottom: 15,
    fontSize: 18,
    width: 150
  },
  modalTextValue: {
    fontSize: 18,
    marginLeft: 5
  },
  detailsButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  detailsButtonText: {
    fontWeight: "bold"
  },
  closeButton: {
    marginRight: 390
  }
});
