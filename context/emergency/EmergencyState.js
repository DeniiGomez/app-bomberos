import React, { useReducer } from "react";
import EmergencyReducer from "./EmergencyReducer"
import { EmergencyContext } from "./EmergencyContext";
import axios from "axios";
import { API_URL } from '@env'
import {GET_EMERGENCIES, GET_EMERGENCY, SET_EMERGENCY} from "../Types";

export const EmergencyState = (props) => {
  const initalState = {
    emergencies: [],
    emergency: {}
  }

  const [state, dispatch] = useReducer(EmergencyReducer, initalState)

  const getEmergencies = async(idUser) => {
    try {
      const url = API_URL+"/emergencies?idUser="+idUser
      const response = await axios(url)
      const data = response.data
      //console.log(data)
      dispatch({
        type: GET_EMERGENCIES,
        payload: data
      })
    } catch(err) {
      throw new Error(err.message)
    }
  }

  const getEmergency = async(idUser, idEmergency) => {
    try {
      const url = `${API_URL}/emergencies?idUser=${idUser}&idEmergency=${idEmergency}`
      const response = await axios(url)
      const data = response.data
      //console.log(data)
      dispatch({
        type: GET_EMERGENCY,
        payload: data
      })
    } catch(err) {
      throw new Error(err.message)
    }
  }

  const setEmergency = data => {
    dispatch({
      type: SET_EMERGENCY,
      payload: data
    })
  }

  const createEmergency = async(body) => {
    try {
      //console.log(body)
      const url = `${API_URL}/emergencies`
      const response = await axios.post(url, body)
      const data = response.data
      //console.log(data)
      await getEmergencies(body.idUser)
    } catch(err) {
      throw new Error(err.message)
    }
  }

  updatedEmergency = async(body, idEmergency) => {
    try {
      //console.log(body)
      const url = `${API_URL}/emergencies/${idEmergency}`
      const response = await axios.put(url, body)
      const data = response.data
      //console.log(data)
      await getEmergencies(body.idUser)
    } catch(err) {
      throw new Error(err.message)
    }
  }

  return (
    <EmergencyContext.Provider
      value={{
        emergencies: state.emergencies,
        emergency: state.emergency,
        getEmergencies,
        getEmergency,
        setEmergency,
        createEmergency,
        updatedEmergency
      }}
    >
      {props.children}
    </EmergencyContext.Provider>
  )
}
