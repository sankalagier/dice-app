import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

const GameScreen = () => {
    const [firstDice, setFirstDice] = useState(0)
    const [lastDice, setLastDice] = useState(0)

    const refreshPage = () => {
        setFirstDice(0);
        setLastDice(0);
    }

    const diceIcon = {
        zero : require('../assets/dices/dice-0.png'),
        un : require('../assets/dices/dice-1.png'),
        deux : require('../assets/dices/dice-2.png'),
        trois : require('../assets/dices/dice-3.png'),
        quatre : require('../assets/dices/dice-4.png'),
        cinq : require('../assets/dices/dice-5.png'),
        six : require('../assets/dices/dice-6.png'),
    }

    const getIcon = (num) => {
        switch (num) {
            case 0 :
                return diceIcon.zero;
            case 1 :
                return diceIcon.un;
            case 2 :
                return diceIcon.deux;
            case 3 :
                return diceIcon.trois;
            case 4 :
                return diceIcon.quatre;
            case 5 :
                return diceIcon.cinq;
            case 6 :
                return diceIcon.six;
        }
    }

    const randomNumber = (min = 1, max = 6) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const lancerJeu = () => {
        setFirstDice(randomNumber());
        setLastDice(randomNumber());
        if(firstDice == lastDice){
            setFirstDice(randomNumber());
            setLastDice(randomNumber());
        }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.resultTitle}>Resultat</Text>
      <Text style={styles.resultOutput}>{firstDice + lastDice}</Text>
      <View style={styles.dicesContainer}>
        <Image source={getIcon(firstDice)} style={styles.diceImg}/>
        <Image source={getIcon(lastDice)} style={styles.diceImg}/>
        <TouchableOpacity style={styles.playBtn} onPress={lancerJeu}>
        <Text style={styles.playBtnText}>
            Lancer les dés
        </Text>
      </TouchableOpacity>
      </View>
        <TouchableOpacity style={styles.refreshBtn} onPress={refreshPage}>
            <Text style={styles.refreshTxt}>
                Réinitialiser
            </Text>
        </TouchableOpacity>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor: "#d9b6bc",
    },
    dicesContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 30,
        marginBottom: 90,
        borderWidth: 12,
        borderColor: '#eeeaeb',
        backgroundColor: '#f6f0f2',
        borderRadius: 12,
    },
    diceImg : {
        width: 96,
        height: 96,
        borderRadius: 16,
        margin:20,
    },
    playBtn : {
            marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        padding: 30,
        backgroundColor: '#d9b6bc',
        borderWidth: 6,
        borderColor: '#624247',
        borderRadius: 10,
    },
    playBtnText: {
        fontSize: 30,
        fontWeight: '600',
        color: '#563138'
    },
    resultTitle:{
        fontSize: 28,
        fontWeight: 'bold',
        color:'#A26170',
    },
    resultOutput:{
        fontSize: 55,
        fontWeight: 'bold',
        color:'#A26170',
        marginBottom: 30,
    },
    refreshBtn:{
        padding: 12,
        backgroundColor: '#9d5465',
        borderRadius: 10,
    },
    refreshTxt : {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600'
    }

})