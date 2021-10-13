import React from "react";
import {
  View,
  ScrollView,
  SafeAreaView,
  Dimensions
} from 'react-native'

import { colors, styles } from "../../styles";
import { useForm } from "react-hook-form";
import { FormControl, Input, LabelError, Button } from "../utils/Form";
import { BackNavigation as Back } from "../navigator/BackNavigation";

export const Register = ({ navigation }) => {
  const dimension = Dimensions.get('window')

  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = () => navigation.navigate('Confirm')

  return (
    <SafeAreaView style={{ backgroundColor: colors.primary}}>
      <Back/>
      <ScrollView>
        <View style={[styles.container, {height: dimension.height - 140, justifyContent: 'flex-start'}]}>
          <FormControl>
            <Input control={control} name="name" placeholder="Nombres" required={true}/>
            {errors.name && <LabelError text={errors.name.message}/>}
          </FormControl>
          <FormControl>
            <Input control={control} name="lastname" placeholder="Apellidos" required={true}/>
            {errors.lastname && <LabelError text={errors.lastname.message}/>}
          </FormControl>
          <FormControl>
            <Input control={control} name="email" placeholder="Correo electronico" required={true} type="email"/>
            {errors.email && <LabelError text={errors.email.message}/>}
          </FormControl>
          <FormControl>
            <Input control={control} name="password" placeholder="Contrasena" required={true} type="password"/>
            {errors.password && <LabelError text={errors.password.message}/>}
          </FormControl>
          <FormControl>
            <Input control={control} name="numberPhone" placeholder="Numero de telefono" required={true}/>
            {errors.numberPhone && <LabelError text={errors.numberPhone.message}/>}
          </FormControl>
        </View>
      </ScrollView>
      <View style={{ paddingHorizontal: 20, marginBottom: 20 }}>
        <Button
          title="Registrarme"
          onPress={handleSubmit(onSubmit)}
          style={{marginTop: 'auto'}}
        />
      </View>
    </SafeAreaView>
  )
}
