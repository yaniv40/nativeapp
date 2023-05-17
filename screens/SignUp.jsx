import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import React,{useState,useContext} from 'react'
import { useNavigation } from '@react-navigation/native';
import UserContext from '../UserContext'



const SignUp = () => {

const {users,addUser}=useContext(UserContext)

    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

   
    const navigation = useNavigation()
   
const checkUserDetail =()=>{
if(name.length <3){
   alert('error name')
    
}else if(password.length <5){
    alert('error password')
}else{

 addUser(name,password)
 setName('')
 setPassword('')

navigation.navigate('signin')
}



}


  return (
    <View>
      <Text>SignUp</Text>
      <TextInput onChangeText={setName} value={name} keyboardType='default' placeholder='enter name'/>
      <TextInput onChangeText={setPassword} value={password} keyboardType='visible-password' placeholder='enter password'/>
      <Button onPress={checkUserDetail}  title='sign up'/>
    </View>
  )
}

export default SignUp

const styles = StyleSheet.create({})