import { StatusBar } from 'expo-status-bar';//אחראי על הצגת התפריט למעלה 
import { StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';// ייבוא חבילה
import { createNativeStackNavigator} from '@react-navigation/native-stack';// ייבוא חבילה לצורך יצירת ערוצים
import HomePage from './screens/HomePage';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import Store from './screens/Store';

import {UserProvider} from './UserContext'



export default function App() {
  const Stack = createNativeStackNavigator()
  return (


  
  // תגית פותחת וסוגרת בדומה לריאקט ראוטר דום
    <NavigationContainer style={styles.container}>
  <UserProvider>

<Stack.Navigator>

<Stack.Screen  name='home' component={HomePage} />
<Stack.Screen  name='signup' component={SignUp}  />
<Stack.Screen  name='signin' component={SignIn} />
<Stack.Screen  name='store' component={Store}  />
</Stack.Navigator>
    </UserProvider>
    <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
