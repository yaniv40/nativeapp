import { StyleSheet, View,TextInput, Button } from 'react-native'
import React,{useState,useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import UserContext from '../UserContext'

const SignIn = () => {
 const {users}=useContext(UserContext)

  const navigation = useNavigation()
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

    const checkIfUserExist =()=>{
      const userExists = users.some((user) => user.name === name && user.password === password);

      if (userExists){
      navigation.navigate('store')
      setName('')
      setPassword('')
      }else{
        alert('user does not exist!')
        navigation.navigate('signup')
      }




    }

  return (
    <View>
      <TextInput onChangeText={setName} value={name} keyboardType='default' placeholder='enter name'/>
      <TextInput onChangeText={setPassword} value={password} keyboardType='visible-password' placeholder='enter password'/>
      <Button onPress={checkIfUserExist}  title='sign in'/>
      <Button onPress={()=>navigation.navigate('signup')}  title='sign up'/>
    </View>
  )
}

export default SignIn

