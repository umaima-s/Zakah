import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform, Alert, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Title, Card, Button } from 'react-native-paper'
// import { MaterialIcons,Entypo} from '@expo/vector-icons'
export default function HistoryInfo() {

    //    const {_id,name,picture,phone,salary,email,position} = props.route.params.item
    //    const deleteEmploye = ()=>{
    //        fetch("http://10.0.2.2:3000/delete",{
    //            method:"post",
    //            headers:{
    //             'Content-Type': 'application/json'
    //            },
    //            body:JSON.stringify({
    //                id:_id
    //            })
    //        })
    //        .then(res=>res.json())
    //        .then(deletedEmp=>{
    //            Alert.alert(`${deletedEmp.name} deleted`)
    //            props.navigation.navigate("Home")
    //        })
    //        .catch(err=>{
    //         Alert.alert("someting went wrong")
    //        })
    //    }
    //    const openDial=()=>{
    //         if(Platform.OS === "android"){
    //            Linking.openURL(`tel:${phone}`)
    //         }else{
    //            Linking.openURL(`telprompt:${phone}`)
    //         }
    //    }
    return (
        <ScrollView>

            <View
                style={styles.root}
            >
                {/* <Text>INFO</Text> */}
                {/* <LinearGradient
          colors={['red', 'yellow', 'green' ]}
          style={styles.linearGradient}
         ></LinearGradient> */}
                <LinearGradient
                    colors={["#379164", "#50d492", "#7df0b6"]}
                    style={styles.linearGradient}
                />
                {/* <View style={{ alignItems: "center" }}>
                <Image
                    style={{ width: 140, height: 140, borderRadius: 140 / 2, marginTop: -50 }}
                    source={{ uri: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHw%3D&w=1000&q=80" }}
                />
            </View>
            <View style={{ alignItems: "center", margin: 70 }}>
                <Title>
                    {name}
                      hello</Title>
                <Text style={{ fontSize: 15 }}>asdhh
            {position}
                </Text>
            </View> */}

                <View style={{ marginTop: 30 }}>

                    <Card style={styles.mycard}
                    //     onPress={()=>{
                    //      Linking.openURL(`mailto:${email}`)
                    //  }}
                    >
                        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
                        <View style={styles.cardContent}>
                            <Image
                                style={{ height: 35, width: 50 }}
                                source={{ uri: "https://www.pngarts.com/files/3/Gold-Bricks-Free-PNG-Image.png" }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.mytext}>GOLD                   : 123
                    </Text>
                            </View>
                            {/* {email} */}
                        </View>
                    </Card>
                </View>
                <View style={{ marginTop: 20 }}>

                    <Card style={styles.mycard}
                    //     onPress={()=>{
                    //      Linking.openURL(`mailto:${email}`)
                    //  }}
                    >
                        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
                        <View style={styles.cardContent}>
                            <Image
                                style={{ height: 35, width: 50 }}
                                source={{ uri: "https://www.pngarts.com/files/11/Jewellery-Chalcedony-Free-PNG-Image.png" }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.mytext}>SILVER                 :  123
    </Text>
                            </View>
                            {/* {email} */}
                        </View>
                    </Card>
                </View>
                <View style={{ marginTop: 20 }}>

                    <Card style={styles.mycard}
                    //     onPress={()=>{
                    //      Linking.openURL(`mailto:${email}`)
                    //  }}
                    >
                        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
                        <View style={styles.cardContent}>
                            <Image
                                style={{ height: 30, width: 50 }}
                                source={{ uri: "https://www.pngarts.com/files/11/Money-Hundred-Dollar-Bill-PNG-Image-Background.png" }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.mytext}>CASH IN HAND  : 123
    </Text>
                            </View>
                            {/* {email} */}
                        </View>
                    </Card>
                </View>
                <View style={{ marginTop: 20 }}>

                    <Card style={styles.mycard}
                    //     onPress={()=>{
                    //      Linking.openURL(`mailto:${email}`)
                    //  }}
                    >
                        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
                        <View style={styles.cardContent}>
                            <Image
                                style={{ height: 30, width: 45 }}
                                source={{ uri: "https://www.pngarts.com/files/11/Bank-Banking-Free-PNG-Image.png" }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.mytext}> CASH IN BANK   : 123
    </Text>
                            </View>
                            {/* {email} */}
                        </View>
                    </Card>
                </View>
                <View style={{ marginTop: 20 }}>

                    <Card style={styles.mycard}
                    //     onPress={()=>{
                    //      Linking.openURL(`mailto:${email}`)
                    //  }}
                    >
                        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
                        <View style={styles.cardContent}>
                            <Image
                                style={{ height: 40, width: 40 }}
                                source={{ uri: "https://www.pngarts.com/files/8/Debt-Money-PNG-Image-Background.png" }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.mytext}>  LOANS                  : 123
    </Text>
                            </View>
                            {/* {email} */}
                        </View>
                    </Card>
                </View>
                <View style={{ marginTop: 20 }}>

                    <Card style={styles.mycard}
                    //     onPress={()=>{
                    //      Linking.openURL(`mailto:${email}`)
                    //  }}
                    >
                        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
                        <View style={styles.cardContent}>
                            <Image
                                style={{ height: 35, width: 40 }}
                                source={{ uri: "https://www.pngarts.com/files/11/Vector-House-Silhouette-PNG-Image-Background.png" }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.mytext}>  PROPERTY           : 123
    </Text>
                            </View>
                            {/* {email} */}
                        </View>
                    </Card>
                </View>
                <View style={{ marginTop: 20 }}>

                    <Card style={styles.mycard}
                    //     onPress={()=>{
                    //      Linking.openURL(`mailto:${email}`)
                    //  }}
                    >
                        {/* <Card.Title title="Card Title" subtitle="Card Subtitle" /> */}
                        <View style={styles.cardContent}>
                            <Image
                                style={{ height: 40, width: 45 }}
                                source={{ uri: "https://www.pngarts.com/files/3/Cardboard-Carton-PNG-Photo.png" }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={styles.mytext}>BUSINESS ASSETS  : 123
    </Text>
                            </View>
                            {/* {email} */}
                        </View>
                    </Card>
                </View>

                <View style={{ flexDirection: "row", justifyContent: "space-around", padding: 10 }}>
                    <Button
                        // icon="account-edit"
                        mode="contained"
                        theme={theme}
                    //   onPress={() => {
                    //      props.navigation.navigate("Create",
                    //         {_id,name,picture,phone,salary,email,position}
                    //      ) 
                    //   }}
                    >
                        Edit
            </Button>
                    <Button
                        // icon="delete"
                        mode="contained"
                        theme={theme}
                    //   onPress={() => deleteEmploye()}
                    >
                        Delete 
            </Button>
                </View>
            </View>



        </ScrollView>
    )
}

const theme = {
    colors: {
        primary: "#006aff"
    }
}


const styles = StyleSheet.create({
    root: {
        // flex: -1,
    },
    mycard: {
        margin: 3,
        // backgroundColor:'red'
    },
    cardContent: {
        // marginLeft:80,
        flexDirection: "row",
        // padding: 8,
        marginLeft: 35
    },
    mytext: {
        // flexDirection: .\"row",
        // color:'black',
        fontSize: 18,
        marginTop: 3,
        marginLeft: 5
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 160,
        width: '100%',
    },
})
// export default HistoryInfo;