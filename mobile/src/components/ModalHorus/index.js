import React, { useState } from "react";
import { Modal, Text, TouchableOpacity, View } from "react-native";

import { Feather } from "@expo/vector-icons";

import styles from "./styles";

export default function ModalHorus({ incident }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredViewModal}>
          <View style={styles.modalView}>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Feather name="x" size={24} color="#000" />
            </TouchableOpacity>

            <View style={styles.modalViewContent}>
              <View style={styles.modalText}>
                <Text style={styles.modalTextDescription}>Empresa:</Text>
                <Text style={styles.modalTextValue}>
                  {incident.name} / {incident.uf}
                </Text>
              </View>
              <View style={styles.modalText}>
                <Text style={styles.modalTextDescription}>Cidade: </Text>
                <Text style={styles.modalTextValue}>{incident.city}</Text>
              </View>
              <View style={styles.modalText}>
                <Text style={styles.modalTextDescription}>
                  Telefone para contato:
                </Text>
                <Text style={styles.modalTextValue}>{incident.whatsapp}</Text>
              </View>
              <View style={styles.modalText}>
                <Text style={styles.modalTextDescription}>E-mail:</Text>
                <Text style={styles.modalTextValue}>{incident.email}</Text>
              </View>
              <View style={styles.modalText}>
                <Text style={styles.modalTextDescription}>
                  Descrição do caso:
                </Text>
                <Text style={styles.modalTextValue}>
                  {incident.description}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.actionText}>Ver detalhes</Text>
        <Feather
          name="arrow-right"
          style={styles.openButtonFeather}
          size={16}
          color="#E02041"
        />
      </TouchableOpacity>
    </View>
  );
}
