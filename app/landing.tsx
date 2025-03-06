import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Colors from '@/data/Colors'
import Button from './components/Button'
import { useRouter } from 'expo-router'

const LandingScreen = () => {
 const router = useRouter()
  return (
    <View>
        <Image
          source={require('./../assets/images/login.png')}
            style={{ width: '100%', height: 450 }}
        />
        <View style={styles.textView}>
            <Text style={styles.text}>
                Welcome to College Campus Guru
            </Text>
            <Text style={styles.news}>
                Your college news, Updated in your pocket, Join the club, Register for new event and many more
            </Text>
            <Button text='Get started' onPress={()=> router.push('/(auth)/SignUp')}/>
            <Pressable onPress={()=> router.push('/(auth)/SignIn')}>
                <View style={styles.view}>
                    <Text style={styles.login}>
                        Already have an account? 
                    </Text>
                    <Text style={styles.sign}>
                        Sign In
                    </Text>
                </View>
            </Pressable>
        </View>
    </View>
  )
}

export default LandingScreen

const styles = StyleSheet.create({
    textView: {
        padding: 20,
    },
    text: {
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    news: {
        fontSize: 17,
        textAlign: 'center',
        marginTop: 10,
        color: Colors.GRAY
    },
    login: {
        fontSize: 17,
        textAlign: 'center',
        color: Colors.GRAY
    },
    view: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        gap: 5,
    },
    sign: {
        fontSize: 17,
        textAlign: 'center',
        color: Colors.PRIMARY
    }

})