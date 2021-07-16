import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('@auth')
    if(value !== null) {
      // value previously stored
      return value
    }
  } catch(e) {
    // error reading value
    return
  }
}



const instance = axios.create({ 
  baseURL: 'http://10.0.2.2:3333'
  // baseURL: 'http://192.168.0.164:3333'
});

instance.interceptors.request.use((config) => {
  const accessToken = getData()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(({ data }) => data);

export default instance;