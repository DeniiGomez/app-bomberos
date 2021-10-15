import React, { useState, useEffect, useContext } from 'react'

import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  RefreshControl
} from 'react-native'

import Icon from 'react-native-dynamic-vector-icons'
import { colors, styles, sizes, } from '../../styles'
import { Title } from '../utils/Title'
import { EmergencyContext } from '../../context/emergency/EmergencyContext'
import { UserContext } from '../../context/user/UserContext'

const Card = ({ idUser, name, handleNavigation, idEmergency }) => (
  <TouchableOpacity
    style={[
      styles.shadow,
      {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        width: '100%',
        backgroundColor: colors.secondary,
        borderRadius: 8,
        padding: 15,
        marginBottom: 20
      }
    ]}
    onPress={() => handleNavigation(idUser, idEmergency)}
  >
    <Text style={[ styles.text, { textAlign: 'left', fontSize: sizes.title2, marginRight: 10, fontWeight: 'bold' } ]}>{name}</Text>
    <Icon
      name="ambulance"
      type="FontAwesome5"
      size={30}
      color={colors.light}
    />
  </TouchableOpacity>
)

export const Emergency = ({ navigation }) => {

  const { emergencies, getEmergencies, getEmergency, setEmergency } = useContext(EmergencyContext)
  const { user } = useContext(UserContext)

  const [refreshing, setRefreshing] = useState(false)

  const _onRefresh = async () => {
    setRefreshing(true)
    await getEmergencies(user.id)
    setRefreshing(false)
  }

  //const handleNavigation = (idUser, idEmergency) => navigation.navigate('FormEmergency', {idUser, idEmergency})


  const handleNavigation = async(idUser, idEmergency) => {
    if(typeof(idUser) != undefined &&  typeof(idEmergency) != undefined) {
      await getEmergency(idUser, idEmergency)
      navigation.navigate('FormEmergency', { idUser: user.id })
    }else {
      setEmergency({})
      navigation.navigate('FormEmergency', { idUser: user.id })
    }
  }

  //const handleOnpress = () => navigation.navigate('FormEmergency')

  useEffect(() => {
    getEmergencies(user.id)
  },[])

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, { padding: 0, position: 'relative' }]}>
        <View style={{ paddingHorizontal: 20, width: '100%' }}>
          <Title text="Alertas"/>
        </View>
        <ScrollView 
          style={{ width: '100%' }} 
          contentContainerStyle={{ paddingHorizontal: 20, paddingVertical: 10 }}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={_onRefresh}/>}
        >
          {emergencies && emergencies.map((item, index) => (
            <Card key={index} name={item.name} idEmergency={item.id} idUser={user.id} handleNavigation={handleNavigation}/>
          ))}
        </ScrollView>
        <View style={{ position: 'absolute', bottom: 30, right: 20 }}>
          <TouchableOpacity 
            style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', paddingHorizontal: 12, paddingVertical: 6, backgroundColor: colors.info, borderRadius: 100 }}
            onPress={handleNavigation}
          >
            <Text style={[styles.text, styles.shadow, { marginRight: 10 }]}>Nueva Alerta</Text>
            <Icon 
              name="plus"
              type="FontAwesome5"
              size={20}
              color={colors.light}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
