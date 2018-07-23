import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
  Dimensions, Alert
} from 'react-native';
import axios from 'axios'
class WeatherApp extends Component {
  state = {
    text: '',
    cityname: 'hanoi',
    data: null,
    loading: true,
    nhietdo: 0,
    hienThiDoC: true,
    error: false

  }

  componentWillMount() {
    console.log('Mount: ')
    console.log(this.state.cityname)
    this.loadAPI()
  }
  loadAPI() {
    this.setState({ loading: true,error:false })
    axios.get(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.text === '' ? this.state.cityname : this.state.text}&units=metric&appid=927d09bc49dbee6aac7f5cb1df707542`)
      .then(res => {
        this.setState({ data: res.data, loading: false, nhietdo: parseInt(res.data.list[0].temp.day), cityname: res.data.city.name })

      }).catch(error => {
        
        this.setState({ error: true, loading: false })
      })
  }
  gettoday(mili) {
    var d = new Date(mili * 1000)
    dd = d.getDate()
    mm = d.getMonth() + 1
    yy = d.getFullYear()
    var ans = dd + '/' + mm + '/' + yy
    return ans
  }

  getWeatherPicture(mainWeather) {
    if (mainWeather == 'Clear') return require('../res/clear.png')
    else if (mainWeather == 'Clouds') return require('../res/clouds.png')
    else if (mainWeather == 'Rain') return require('../res/rain.png')
    else return require('../res/snow.png')
  }
  convert(degree) {
    if (degree == 'C') return this.setState({ nhietdo: parseInt(this.state.data.list[0].temp.day), hienThiDoC: true })
    else return this.setState({ nhietdo: parseInt(this.state.data.list[0].temp.day * 1.8 + 32), hienThiDoC: false })

  }
  _renderItem = ({ item }) =>
    <View style={{ flexDirection: 'row', backgroundColor: '#2E2B3E', alignItems: 'center', justifyContent: 'space-around', marginBottom: 20, height: Dimensions.get('window').height * 0.1, borderRadius: 5 }}>
      <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, color: 'white' }}> {this.gettoday(item.dt)} </Text>
      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, color: 'white' }}> {parseInt(item.temp.day)} </Text>
        <Image source={this.getWeatherPicture(item.weather[0].main)} style={{ height: 50, width: 50 }} />
      </View>
    </View>


  render() {
    if (this.state.loading === true)
      return (
        <View style={{ flex: 1, backgroundColor: 'rgb(56,54,74)', justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )

    return (
      this.state.error === false) ? (
        <View style={st.container}>
          <View style={st.header}>
            <TextInput
              style={st.textinput}
              placeholder={'City...'}
              autoCorrect={false}
              onChangeText={(text) => this.setState({ text })}
            />
            <TouchableOpacity
              style={st.button}
              onPress={() => this.loadAPI()}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Search </Text>
            </TouchableOpacity>
          </View>
          <Text style={st.title} > {this.state.data.city.name} </Text>
          <Text style={st.date} > {this.gettoday(this.state.data.list[0].dt)} </Text>
          <View style={st.current}>
            <View style={st.itemincurrent}>
              <Image style={{ height: 100, width: 100 }} source={this.getWeatherPicture(this.state.data.list[0].weather[0].main)} />
              <Text style={st.status}> {this.state.data.list[0].weather[0].description} </Text>
            </View>
            <View style={st.itemincurrent}>
              <Text style={st.temperate}> {this.state.nhietdo} </Text>
              <View style={st.buttonCF}>
                <TouchableOpacity
                  onPress={() => this.convert("C")}
                >
                  <Text style={{ fontSize: 20, color: this.state.hienThiDoC ? 'white' : '#C6C4D1' }}>°C</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => this.convert("F")}
                >
                  <Text style={{ fontSize: 20, color: this.state.hienThiDoC ? '#C6C4D1' : 'white' }}>°F</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <FlatList
            data={this.state.data.list}
            renderItem={({ item }) => this._renderItem({ item })}
            keyExtractor={(item) => this.gettoday(item.dt)}
            style={st.flatlist}
          />
        </View>
      ) : (
        <View style={st.container}>
          <View style={st.header}>
            <TextInput
              style={st.textinput}
              placeholder={'City...'}
              autoCorrect={false}
              onChangeText={(text) => this.setState({ text })}
            />
            <TouchableOpacity
              style={st.button}
              onPress={() => this.loadAPI()}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}> Search </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, backgroundColor: 'rgb(56,54,74)', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color:'white', fontSize:25}}> 404 not found </Text>
          </View>
        </View>
      )
  }
}

const st = StyleSheet.create({
  flatlist: {
    width: '90%',
    height: '10%'
  },
  buttonCF: {
    flexDirection: 'row',
    height: 50,
    width: 100,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  status: {
    color: '#C6C4D1',
    fontSize: 20,
  },
  temperate: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'white'
  },
  itemincurrent: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  current: {
    flexDirection: 'row',

  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
    color: 'white'
  },
  date: {
    fontSize: 20,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(56,54,74)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: 100,
    width: '85%',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  textinput: {
    height: 40,
    width: 200,
    borderRadius: 5,
    backgroundColor: 'white'
  },
  button: {
    height: 40,
    width: 100,
    borderRadius: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
export default WeatherApp;