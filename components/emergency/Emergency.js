import React from 'react'

import {
  View,
  Text,
  SafeAreaView,
  ScrollView
} from 'react-native'

import Icon from 'react-native-dynamic-vector-icons'
import { colors, styles, sizes, } from '../../styles'

const Card = () => (
  <View 
    style={{
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      backgroundColor: colors.secondary,
      borderRadius: 8,
      padding: 15,
      marginBottom: 20
    }}
  >
    <Text style={[ styles.text, { textAlign: 'left', fontSize: sizes.title2, marginBottom: 10, } ]}>Nombre emergencia</Text>
    <Icon
      name="ambulance"
      type="FontAwesome5"
      size={30}
      color={colors.light}
    />
  </View>
)

export const Emergency = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, { paddingVertical: 5,  }]}>
        <Text style={[styles.text, { textAlign: 'left', color: colors.gray, fontSize: sizes.title1, fontWeight: 'bold', marginBottom: 15, }]} >Alertas</Text>
          <ScrollView style={{ width: '100%' }}>
            <Card/>
            <Card/>
          </ScrollView>
        </View>
    </SafeAreaView>
  )
}
