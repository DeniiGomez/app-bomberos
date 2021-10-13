import React from 'react'
//import { API_URL } from '@env'

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView
} from 'react-native'
import { colors, styles, sizes, } from '../../styles'

const Card = () => (
  <View 
    style={{
      flex: 1,
      width: '100%',
      backgroundColor: colors.gra2,
      borderRadius: 8,
      padding: 15,
      marginBottom: 20
    }}
  >
    <Text style={[ styles.text, { textAlign: 'left', fontSize: sizes.title2, marginBottom: 10, } ]}>Titulo</Text>
    <Text style={[styles.text, { textAlign: 'left', }]}>Mi ubicacion: </Text>
    <Text style={[styles.text, { textAlign: 'left', }]}>Tiempo: </Text>
    <Text style={[styles.text, { textAlign: 'left', }]}>Descripcion: </Text>
  </View>
)

export const List = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary}/>
      <View style={[styles.container, { paddingVertical: 5,  }]}>
        <Text style={[styles.text, { textAlign: 'left', color: colors.gray, fontSize: sizes.title1, fontWeight: 'bold', marginBottom: 15, }]} >Registro de alertas</Text>
          <ScrollView style={{ width: '100%' }}>
            <Card/>
            <Card/>
          </ScrollView>
        </View>
    </SafeAreaView>
  )
}
