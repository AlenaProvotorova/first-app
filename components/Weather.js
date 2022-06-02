import { StyleSheet, Text, View, StatusBar } from 'react-native';
import propTypes from 'prop-types'
import Ionicons from '@expo/vector-icons/Ionicons';
import { LinearGradient } from 'expo-linear-gradient';
import {weatherOptions} from '../common/constants';

const Weather = ({temp, condition}) => {

  return (
      <LinearGradient
        colors={weatherOptions[condition].gradient}
        style={styles.gradient}
        >
          <StatusBar barStyle='light-content'/>
          <View style={styles.top}>
             <Ionicons name={weatherOptions[condition].iconName} size={50} color="#fff" />
             <Text style={styles.temp}>{Math.round(temp)}°</Text>
           </View>
         <View style={styles.bottom}>
          <Text style={styles.title}>{weatherOptions[condition].title}</Text>
          <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
         </View>
      </LinearGradient>
  );
}

export default Weather

Weather.propTypes = {
    temp: propTypes.number.isRequired,
    condition: propTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Dust", "Smoke", "Haze", "Mist", "Clear", "Clouds"]).isRequired
}

const styles = StyleSheet.create({
  gradient:{
    flex: 1,
  },
  top:{
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3
  },
  bottom:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp:{
    color: 'white',
    fontSize: 30
  },
  text:{
    fontSize: 30
  },
  title:{
    fontSize: 30,
    textAlign: 'center',
    color: '#FAF0BE'
  },
  subtitle:{
    fontSize: 30,
    textAlign: 'center',
    color: '#FAF0BE'
  },
}
)