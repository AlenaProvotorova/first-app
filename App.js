import { StyleSheet, Text, View , Alert} from 'react-native';
import * as Location from 'expo-location';
import {useEffect, useState} from 'react'
import axios from 'axios'

import Loading from './components/Loading'
import Weather from './components/Weather'
import {API_KEY} from './common/constants';

const App = () =>  {
  const [loading, setLoading] = useState(false)
  const [temp, setTemp] = useState(0)
  const [condition, setCondition] = useState('Clear')

  const getWeather = async(lat, lon)=>{
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    setTemp(data.main.temp)
    setCondition(data.weather[0].main)
  }

  const getLocation = async() => {
    setLoading(true)
    try {
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync()
      await Location.requestForegroundPermissionsAsync()
      getWeather(latitude, longitude)
    } 
    catch (error) {
      Alert.alert('Не могу определить месторасположение', 'очень грустно')
    }
    finally {
      setLoading(false)
    }
  }
    
  useEffect(() => {
    getLocation()
  }, [])

  return (
    loading ? <Loading/> : <Weather temp={temp} condition={condition}/>
  );
}

export default App