import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, FlatList, View, ScrollView, Button, Image, Text } from "react-native";
import { Card, FAB } from 'react-native-paper'
// import { useEffect } from 'react/cjs/react.production.min';
export default function History({ navigation }) {


    // const data =
    //     [
    //         { _id: '1', total: '50', zak: '0.25' },
    //         { _id: '2', total: '505', zak: '100.25' },
    //         { _id: '3', total: '250', zak: '20.25' },
    //     ];
    const renderList = ((item) => {
        return (
            <Card style={styles.mycard}
            // onPress={() => navigation.navigate("Profile", { item })}
            >
                <View style={styles.cardView}>
                    <Image
                        style={{ width: 60, height: 60, borderRadius: 30 }}
                        source={{ uri: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80" }}

                    />
                    <View style={{ marginLeft: 10 }}>
                        <Text style={styles.text}>ID:             {item._id}</Text>
                        <Text style={styles.text}>TOTAL:     {item.total}</Text>
                        <Text style={styles.text}>ZAKAT:     {item.zak}</Text>
                    </View>

                </View>

            </Card>
        )
    })
    const [data, setData] = useState([])
    //  const [loading,setLoading]= useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/")
            .then(res => res.json())
            .then(results => {
                console.log(results)
                setData(results)
                // setLoading(false)
            })

    }, [])

    return (
        <ScrollView>
            <View>
                <Text
                    style={{
                        textAlign: 'center',
                        fontSize: 35,
                        fontWeight: 'bold',
                        marginTop: 10,
                    }}>History</Text>
                <FlatList
                    data={data}
                    renderItem={({ item }) => {
                        return renderList(item);
                    }}
                    keyExtractor={item => item._id}
                >
                </FlatList>
                <FAB
                    onPress={() => navigation.navigate("Zakat Calculator")}
                    style={styles.fab}
                    small={false}
                    icon="plus"
                    theme={{ colors: { accent: "#006aff" } }}

                />
            </View>
            <Button
                title='goto calc'
                onPress={() => navigation.navigate("Zakat Calculator")}
            >

            </Button>
        </ScrollView >
    );
}
const styles = StyleSheet.create({
    mycard: {
        margin: 5,

    },
    cardView: {
        flexDirection: "row",
        padding: 6
    },
    text: {
        fontSize: 18,
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
    },
})