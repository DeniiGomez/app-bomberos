import React, { useEffect, useContext } from "react";
import {
  View,
  SafeAreaView,
  ScrollView
} from 'react-native'

import { BackNavigation as Back } from "../navigator/BackNavigation";
import { Title } from "../utils/Title";
import { colors, styles } from "../../styles";
import { FormControl, LabelError, Input, Button } from "../utils/Form";
import { useForm } from "react-hook-form";
import { EmergencyContext } from "../../context/emergency/EmergencyContext";

export const FormEmergency = ({ route, navigation }) => {

  const { emergency, createEmergency, updatedEmergency } = useContext(EmergencyContext)

  const {
    idUser,
    //idEmergency
  } = route.params

  //console.log(idUser, idEmergency)

  const { control, handleSubmit, formState: { errors } } = useForm()

  const onSubmitCreate = async(data) => {
    //console.log(emergency, data)
    let aux = {...data}
    aux.idUser = idUser
    console.log(aux, 'no existee emergencya')
    await createEmergency(aux)
    navigation.goBack()
  }

  const onSubmitUpdated = async(data) => {
    let aux = {...emergency}
    aux.name = data.name
    aux.description = data.description
    console.log(aux, 'si existe')
    await updatedEmergency(aux, aux.id)
    navigation.goBack()
  }

  //useEffect(() => {
    //if(emergency) {
      //setCopyEmergency({..._copyEmergency, emergency})
    //}
  //},[])

  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1 }}>
        <Back/>
        <View style={{ paddingHorizontal: 20, width: '100%' }}>
          <Title text="Crear nueva emergencia"/>
        </View>
        <ScrollView>
          <View style={[styles.container]}>
            <FormControl>
              <Input name="name" control={control} placeholder="Nombre de la emergencia" required={true} defaultValue={emergency.name && emergency.name}/>
              {errors.name && <LabelError text={errors.name.message}/>}
            </FormControl>
            <FormControl>
              <Input name="description" control={control} placeholder="Descripcion" required={true} multiline={true} defaultValue={emergency.description && emergency.description}/>
              {errors.description && <LabelError text={errors.description.message}/>}
            </FormControl>
            {emergency.idUser ?
              <Button
                title="Actualizar emergencia"
                onPress={handleSubmit(onSubmitUpdated)}
              /> :
              <Button
                title="Crear emergencia"
                onPress={handleSubmit(onSubmitCreate)}
              /> 
            } 
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}
