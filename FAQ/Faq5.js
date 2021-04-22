import React, { Component } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";

class Faq5 extends Component {
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
                                Any kind of prayer, whether salat or zakat, can grant closeness of Allah only if one performs it after understanding its inner aspect. Moreover, by following its essence with sincerity and the presence of soul. Salat, for instance, is physical devotion but its inner aspect is to disconnect with everything and concentrate completely upon Allah.
                                Similarly, zakat also has both the inner and outer aspects. The spirit or essence of zakat is to get rid of the love of worldly riches. Hence, it plays vital role in the purification of one’s soul. If one gives sadaqah and zakat only physically with its essence missing, then, although one absolves of the obligation but it would not be enough to purify the soul or bring one closer to Allah. Everything in cosmos is hollow and useless without its essence. Likewise, hollow act of sadaqah would fail to fulfill its desired purpose.
                                The real purpose of zakat is to purify, cleanse and grow spiritually. One can achieve it only if its essence is contained within the act of giving sadaqah. This would allow one to get closer to Allah thereby turning a Muslim into a Momin. Momin truly understands the secret of zakat and does not withhold any wealth except that which meets his basic necessities.

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
                    <Text style={styles.textStyle}>Q. The Essence of Spending in the way of Allah?</Text>
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
        padding: 20,
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
        textAlign: "justify"
    }

});

export default Faq5;