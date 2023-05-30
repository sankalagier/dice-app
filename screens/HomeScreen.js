import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Foundation as FoundationIcons } from 'react-native-vector-icons';
import React from 'react'



const HomeScreen = ({navigation}) => {

    const goToDice = () => {
        navigation.navigate("GameScreen");
      }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>DICE APP</Text>

        <TouchableOpacity
            style={styles.btnPlay}
            onPress={()=>goToDice()}
        >
            <FoundationIcons name='die-two' color={'#502c34'} size={42} />
            <Text style={styles.textBtn}>Lancer le jeu</Text>
            <FoundationIcons name='die-five' color={'#502c34'} size={42} />
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#d9b6bc",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 128,
        paddingVertical: 150,
    },
    title: {
        fontSize: 60,
        color: '#512c33',
        fontWeight: 'bold'
    },
    btnPlay: {
        flexDirection: 'row',
        justifyContent: "center",
        flexWrap: 'wrap',
        backgroundColor: '#d37285',
        padding: 15,
        borderRadius: 6,
        marginBottom: 50,
    },
    textBtn: {
        marginHorizontal: 12,
        fontSize: 32,
        fontWeight: '600',
        color: '#55282d'
    }
})