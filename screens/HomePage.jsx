import {TouchableOpacity, StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const HomePage = () => {
  const navigation=useNavigation()
  return (
    <View style={styles.main}>
     
      <Text style={styles.text}>welcome to native app</Text>
      
      <TouchableOpacity  onPress={()=>navigation.navigate('signin')}>
        <Text style={styles.buttonStyle}>next</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
main:{
  alignItems: 'center',
  justifyContent: 'center',
  marginVertical:250,
  backgroundColor:'pink',
  borderRadius:50,
  

},
text:{
  fontSize:50,
  color:'blue',
},
buttonStyle: {
  textAlign:'center',
 fontSize:40
 ,width:100,
 height:70,
 color:'white',
 borderRadius:15,
 backgroundColor:'blue'
},





})