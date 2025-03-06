import { Image, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Colors from '@/data/Colors';
import TextInputField from '../components/TextInputField';
import Button from '../components/Button';
import * as ImagePicker from 'expo-image-picker';
import { create } from 'react-test-renderer';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/firebase';
import { cld, options } from '@/configs/cloudinary';
import { upload } from 'cloudinary-react-native';


const SignUp = () => {
    const [fullName, setFullName] = useState<string | undefined>()
    const [email, setEmail] = useState<string | undefined>()
    const [profileImage, setProfileImage] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ['images'],
          allowsEditing: true,
          aspect: [4, 4],
          quality: 0.5,
        });
    
        console.log(result);
    
        if (!result.canceled) {
            setProfileImage(result.assets[0].uri);
        }
      };
      const handleSignUp = async () => {
        if (!fullName || !email || !password) {
          ToastAndroid.show('Please fill all fields', ToastAndroid.BOTTOM);
          return;
            
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
            console.log(userCredential);
            
            // upload image to cloudinary
    
            await upload(cld, {file: profileImage, options: options, callback:async(error:any, response:any) => {
                if (error) {
                    console.log(error);
                }
                if (response) {
                    console.log(response?.url);
                }
            }})
        }).catch((error) => {
            const errorMsg = error?.message;
            ToastAndroid.show(errorMsg, ToastAndroid.BOTTOM);
        }
      )}

  return (
    <View style={styles.container}>
      <Text style={styles.account}>Create New Account</Text>
      <View style={styles.image}>
        <View>
            <TouchableOpacity onPress={pickImage}>
                {profileImage ? (
                    <Image source={{uri: profileImage}} style={styles.profileImage}/>
                ) : (
                    <Image source={require('./../../assets/images/profile.png')}
                    style={styles.profileImage}
                    />
                )}
                <AntDesign name="camera" size={24} color={Colors.PRIMARY} 
                style={{ position: 'absolute', bottom: 0, right: 0 }}
                />
            </TouchableOpacity>
        </View>
      </View>
        <TextInputField label='Full Name' onChangeText={(v)=>setFullName(v)}/>
        <TextInputField label='Campus Email' onChangeText={(v)=>setEmail(v)}/>
        <TextInputField label='Password' password onChangeText={(v)=>setPassword(v)}/>
        <Button text='Sign Up' onPress={handleSignUp}/>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 60,
    },
    account: {
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    image: {
        display: 'flex',
        alignItems: 'center',
    },
    profileImage: {
        width: 100, 
        height: 100, 
        borderRadius: 99, 
        marginTop: 20,
    }
})