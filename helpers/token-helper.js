import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL } from '@env'

const TOKEN_KEY = 'TOKEN_KEY'
const TOKEN_KEY_DEVICE = 'TOKEN_KEY_DEVICE'

export const saveToken = async (token) => {
  try {
    const item = await AsyncStorage.setItem(TOKEN_KEY, token)
    console.log('token guardado')
    return item
  } catch (err) {
    console.log(err)  
    throw new Error(err.message)  
  }
}

export const getToken =  async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY)
  } catch (error) {
    throw new Error(err.message)  
  }
}

export const deleteToken = async () => {
  try {
    await AsyncStorage.removeItem(TOKEN_KEY)
    console.log('token eliminado')
    return null
  } catch (err) {
    throw new Error(err.message)
  }
}

export const saveTokenDevice = async (token) => {
  try {
    const item = await AsyncStorage.setItem(TOKEN_KEY_DEVICE, token)
    console.log('token guardado')
    return item
  } catch (err) {
    console.log(err)  
    throw new Error(err.message)  
  }
}

export const getTokenDevie =  async () => {
  try {
    return await AsyncStorage.getItem(TOKEN_KEY_DEVICE)
  } catch (error) {
    throw new Error(err.message)  
  }
}

export const initAxios = () => {
  
  axios.defaults.baseURL = API_URL

  axios.interceptors.request.use(async(config) => {
    const token = await getToken()
    //console.log(token,'sss')
    if(token) {
      config.headers = {
        'Authorization': `Bearer ${token}`
      }
    }
    //console.log(token)
    return config
  })

  axios.interceptors.response.use(
    function (response) {
      return response
    },
    function (error) {
      if(error.response.status === 401) {
        //deleteToken()
      }else {
        console.log('erro!')
        throw new Error('error')
      }
    }
  )
}
