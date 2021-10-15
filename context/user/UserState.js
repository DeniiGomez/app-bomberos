import React, { useReducer } from "react";
import UserReducer from "./UserReducer";
import { UserContext } from "./UserContext";
import { LOGIN, SIGNIN } from "../Types";
import axios from "axios";
import { API_URL } from '@env'
import { deleteUser, saveUser } from "../../helpers/user-helper";
import { deleteToken, saveToken, getTokenDevie } from "../../helpers/token-helper";

export const UserState = (props) => {
  const initalState = {
    user: {}
  }

  const [state, dispatch] = useReducer(UserReducer, initalState)

  const login = async (body) => {
    try {
      const url = API_URL+"/users/login"
      console.log(url)
      const response = await axios.post(url, body)
      const data = response.data

      const deviceToken = await getTokenDevie()
      console.log(deviceToken, data.id)
      await updated({deviceToken}, data.id, data.token)
      await saveUser(data)
      await saveToken(data.token)

      dispatch({
        type: LOGIN,
        payload: data
      })
    } catch (err) {
      throw new Error(err.message)
    }
  }

  const register = async (body) => {
    try {
      //console.log(body, API_URL)
      body.idRol = 4
      const url = API_URL+"/users/register"
      //console.log(url)
      const response = await axios.post(url, body)
      //console.log(response)
      const data = response.data
      return data
    } catch (err) {
      throw new Error(err.message)
    }
  }

  const confirm = async (param) => {
    try {
      const url = API_URL+"/users/confirm/"+param.codeConfirmation
      //console.log(param, url)
      const response = await axios(url)
      const data = response.data

      return data
    } catch (err) {
      throw new Error(err.message)
    }
  }

  const updated = async (body, idUser, token) => {
    try {
      const url = API_URL+"/users/"+idUser
      console.log(body, url)
      const response = await axios.put(url, body, {
        headers: {
          Authorization: 'Bearer ' + token
        }
      })
      const data = response.data
      console.log(data)

      return data
    } catch (err) {
      throw new Error(err.message)
    }
  }

  const signIn = data => {
    dispatch({
      type: SIGNIN,
      payload: data
    })
  }

  const logout = async () => {
    try {
      await deleteUser()
      await deleteToken()
    } catch(err) {
      throw new Error(err.message)
    }
  }

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        login,
        register,
        confirm,
        signIn,
        logout,
        updated
      }}
    >
      {props.children}
    </UserContext.Provider>
  )
}

