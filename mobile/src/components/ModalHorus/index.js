import React, { Component, useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View
} from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function ModalHorus({ incident }) {
  const [modalVisible, setModalVisible] = useState(false);
  console.log(incident);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
              Empresa: {incident.name} / {incident.uf}{" "}
            </Text>
            <Text style={styles.modalText}>Cidade: {incident.city}</Text>
            <Text style={styles.modalText}>
              Telefone para contato: {incident.whatsapp}
            </Text>
            <Text style={styles.modalText}>E-mail: {incident.email}</Text>
            <Text style={styles.modalText}>
              {" "}
              Descrição do caso: {incident.description}
            </Text>

            <TouchableHighlight
              style={{
                ...styles.openButton,
                backgroundColor: "#2196F3"
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Feather name="arrow-right" size={16} color="#E02041" />
      </TouchableHighlight>
    </View>
  );
}
