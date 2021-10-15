import React, { useState, useContext } from "react";
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
import { UserContext } from "../../context/user/UserContext";

export const Register = ({ navigation }) => {
  
  const { register } = useContext(UserContext)

  //const dimension = Dimensions.get('window')

  const [errorMessage, setErrorMessage] = useState({})
  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    register(data)
      .then(() => navigation.replace('Confirm'))
      .catch(err => setErrorMessage({ message: err.message }))
  }

  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1}}>
      <Back/>
      <ScrollView style={{ padding: 20, paddingBottom: 40 }}>
          <FormControl>
            {errorMessage.message && <LabelError text={`Error: ${errorMessage.message}`}/>}
          </FormControl>
          <FormControl>
            <Input control={control} name="name" placeholder="Primer nombre" required={true}/>
            {errors.name && <LabelError text={errors.name.message}/>}
          </FormControl>
          <FormControl>
            <Input control={control} name="secondName" placeholder="Segundo nombre"/>
            {errors.secondName && <LabelError text={errors.secondName.message}/>}
          </FormControl>
          <FormControl>
            <Input control={control} name="surname" placeholder="Primer Apellido" required={true}/>
            {errors.surname && <LabelError text={errors.surname.message}/>}
          </FormControl>
          <FormControl>
            <Input control={control} name="secondSurname" placeholder="Segundo Apellido"/>
            {errors.secondSurname && <LabelError text={errors.secondSurname.message}/>}
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
          <FormControl>
            <Button
              title="Registrarme"
              onPress={handleSubmit(onSubmit)}
              style={{marginBottom: 40}}
            />
          </FormControl>
      </ScrollView>
    </SafeAreaView>
  )
}
