import React, { useContext } from 'react'

import {
  View,
  SafeAreaView,
  Image
} from 'react-native'
import { styles, colors } from '../../styles'
import { UserContext } from '../../context/user/UserContext'
import { Title } from '../utils/Title'
import { FormControl, Label, Button } from '../utils/Form'

export const Profile = ({ navigation }) => {

  const { user, logout } = useContext(UserContext)
  console.log(user)

  const handleLogout = () => {
    logout()
      .then(() => navigation.replace('Login'))
      .catch(err => console.log(err.message))
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, { paddingVertical: 5,  justifyContent: 'flex-start'}]}>
      <Title text="Perfil"/>
        <View style={{width: '100%', flex: 1, }}>
          <FormControl style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', justifyContent: 'space-between' }}>
            {user.avatar && <Image source={{uri: user.avatar}} style={{height: 55, width: 55, borderRadius: 100}}/>}
            <Button 
              title="Editar perfil"
              titleStyle={{fontWeight: 'normal'}}
              style={{width: 'auto', height: 'auto',paddingVertical: 6, paddingHorizontal: 12, backgroundColor: 'transparent', borderWidth: 1, borderColor: colors.gray, marginBottom: 0}}
            />
          </FormControl>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Label text="Nombre: " style={{textAlign: 'left', }}/>
            {user.fullName && <Label text={user.fullName} style={{textAlign: 'left'}}/> }
          </View>
          <View style={{ flexDirection: 'row', marginBottom: 5 }}>
            <Label text="Email: " style={{textAlign: 'left', }}/>
            {user.email && <Label text={user.email} style={{textAlign: 'left'}}/> }
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Label text="Número de télefono: " style={{textAlign: 'left', }}/>
            {user.numberPhone && <Label text={user.numberPhone} style={{textAlign: 'left'}}/> }
          </View>
          <View style={{ marginBottom: 10, marginTop: 'auto', flexDirection: 'row', gap: 5, justifyContent: 'flex-end' }}>
            <Button 
              title="Cerrar sesión"
              style={{width: '50%', height: 38, padding: 0}}
              onPress={handleLogout}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
