import React, { useEffect, useContext } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar
} from 'react-native'

import { styles, colors, sizes } from "../../styles";
import { UserContext } from '../../context/user/UserContext';
import {getUser} from '../../helpers/user-helper';
import {getToken} from '../../helpers/token-helper';

export const SplashScreen = ({ navigation }) => {

  const { signIn } = useContext(UserContext)

  const navigateTo = (name) => {
    setTimeout(() => {
      navigation.replace(name)
    }, 800)
  }

  const fetchSession = async () => {
    const user = await getUser()
    //console.log(user)
    const token = await getToken()

    if(!user && !token) {
      navigateTo('Login')
    }else {
      signIn(user)
      navigateTo('TabBottom')
    }
  }

  useEffect(() => {
    fetchSession()
  }, [])

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary}/>
      <View style={styles.container}>
        <Text style={[{ color: colors.light, fontSize: sizes.title1 }]}>SplashScreen</Text>
      </View>
    </SafeAreaView>
  )
}
