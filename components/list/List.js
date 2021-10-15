import React, { useState } from 'react'
//import { API_URL } from '@env'

import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native'
import { colors, styles, sizes, } from '../../styles'
import { Title } from '../utils/Title'

const Card = () => (
  <TouchableOpacity
    style={[
      styles.shadow,
      {
        flex: 1,
        width: '100%',
        backgroundColor: colors.gra2,
        borderRadius: 8,
        padding: 15,
        marginBottom: 20
      }
    ]}
  >
    <Text style={[ styles.text, { textAlign: 'left', fontSize: sizes.title2, marginBottom: 5, fontWeight: 'bold' } ]}>Titulo</Text>
    <Text style={[styles.text, { textAlign: 'left', }]}>Mi ubicacion: </Text>
    <Text style={[styles.text, { textAlign: 'left', }]}>Tiempo: </Text>
    <Text style={[styles.text, { textAlign: 'left', }]}>Descripcion: </Text>
  </TouchableOpacity>
)

export const List = () => {

  const [refreshing, setRefreshing] = useState(false)

  const _onRefresh = () => {
    setRefreshing(true)
    setRefreshing(false)
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor={colors.primary}
      />
      <View style={[styles.container, { padding: 0 }]}>
        <View style={{ paddingHorizontal: 20, width: '100%' }}>
          <Title text="Registro de Alertas"/>
        </View>
        <ScrollView 
          style={{ width: '100%',}} 
          contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 10}}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh}/>}
        >
          <Card/>
          <Card/>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}
