import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

class Faq6 extends Component {
    state = {
        modalVisible: false
    };

    setModalVisible = (visible) => {
        this.setState({ modalVisible: visible });
    }

    render() {
        const { modalVisible } = this.state;
        return (
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        this.setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalText}>
                                It is quite unfortunate that today, many formal theologians are at loss to perceive the actual concept behind sadaqah. They misinterpret it and derive their confused definition from its literal meaning believing that zakat ‘purifies’ and ‘increases’ wealth itself. Whereas, it is now clear that zakat ‘purifies’ the soul and ‘increases’ closeness to Allah. Their orthodox perspective in fact re-emphasizes the focus of people upon growth of their wealth. As it makes them believe that they have found a religious methodology to ‘increase’ their wealth further and ‘purify’ their unlawful earnings. This whole idea completely disregards the soul of zakat and sadaqah. The Momin must acknowledge the fact that everything he owns actually belongs to Allah and so does his wealth.
                            </Text>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => this.setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
                <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => this.setModalVisible(true)}
                >
                    <Text style={styles.textStyle}>Q. Misinterpretation of Concept of Sadaqah and Zakat?</Text>
                </Pressable>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        marginBottom: 15
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        justifyContent:'space-evenly',
        borderRadius: 20,
        padding: 30,
        elevation: 15
    },
    buttonOpen: {
        backgroundColor: "#388575",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign:"justify"
    }

});

export default Faq6;