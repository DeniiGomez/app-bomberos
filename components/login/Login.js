import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Dimensions
} from 'react-native'

import { colors, styles } from "../../styles";
import { useForm } from "react-hook-form";
import { FormControl, Input, LabelError, Button } from "../utils/Form";

export const Login = ({ navigation }) => {

  const dimension = Dimensions.get('window')

  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = () => navigation.replace('TabBottom')
  
  return (
    <SafeAreaView>
    <StatusBar barStyle="light-content" backgroundColor={colors.primary}/>
    <ScrollView>
        <View style={[styles.container, {height: dimension.height}]}>
    <FormControl>
      <Input control={control} name="email" placeholder="Correo electronico" type="email" required={true}/>
      {errors.email && <LabelError text={errors.email.message}/>}
    </FormControl>
    <FormControl>
      <Input control={control} name="password" placeholder="Contrasena" type="password" required={true}/>
      {errors.password && <LabelError text={errors.password.message}/>}
    </FormControl>
    <Button
      title="Iniciar sesion"
      onPress={handleSubmit(onSubmit)}
    />
    <TouchableOpacity
        style={{ width: '100%' }}
        onPress={() => navigation.navigate('Register')}
    >
        <Text 
          style={[
            styles.text, 
            { color: colors.gray, textAlign: 'left', textDecorationLine: 'underline'}
          ]}
        >
          Registrarme
        </Text>
    </TouchableOpacity>
    </View>
  </ScrollView>
  </SafeAreaView>
  )
}
