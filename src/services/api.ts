import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage'

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@auth')
    if(value !== null) {
      return value
    }
  } catch(e) {
    console.log(e)
    return
  }
}


const instance = axios.create({
  baseURL: 'http://192.168.0.164:3333'
});

instance.interceptors.request.use(async function (config) {
  const accessToken = await getData()

  if (accessToken !== '') {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  
  return config;
}, function (error) {
  return Promise.reject(error);
});

export default instance
