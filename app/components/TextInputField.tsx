import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'
type TextInputFieldProps = {
    label: string
    onChangeText: (text: string) => void
    password?: boolean
}
const TextInputField = ({label, onChangeText, password=false}: TextInputFieldProps) => {
  return (
<View style={styles.container}>
      <Text style={{color: Colors.GRAY}}>{label}</Text>
      <TextInput placeholder={label} style={styles.textInput} secureTextEntry={password}/>
    </View>
  )
}

export default TextInputField

const styles = StyleSheet.create({
    container: {
        marginTop: 15
    },
    textInput: {
        padding: 15,
        borderWidth: 0.2,
        borderRadius: 10,
        marginTop: 10,
        fontSize: 17,

    }
})