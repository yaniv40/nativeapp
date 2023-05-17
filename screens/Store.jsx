import { StyleSheet, Text,ScrollView,SafeAreaView,StatusBar } from 'react-native'
import React ,{useContext}from 'react'
import UserContext from '../UserContext'

const Store = () => {
  const {users}=useContext(UserContext)
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrol}>
    {users.map((val,index)=>{
      return  <Text key={index} style={styles.text}>{val.name} </Text>
    })}
    </ScrollView>
    <StatusBar style="auto" />
    </SafeAreaView>
  )
}

export default Store

const styles = StyleSheet.create({
  container: {
    flex:1
  },
text:{
  fontSize:60,
  color:'red',
  textAlign:'center',
  textDecorationLine:'underline',
  
},
scrol:{
  backgroundColor: 'aqua',
}
})






