import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'

type ButtonProps = {
    text: string
    onPress: () => void
}
const Button = ({text, onPress}: ButtonProps) => {

  return (
        <TouchableOpacity style={styles.buttonContainer} onPress={onPress}>
            <Text style={styles.button}>
                {text}
            </Text>
        </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        marginTop: 15,
        borderRadius: 10,
    },
    button: {
        color: Colors.WHITE,
        textAlign: 'center',
        fontSize: 18,
    },
})