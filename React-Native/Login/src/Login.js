import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Alert,
  Dimensions
} from 'react-native';
const MESSAGE = {
  success: 'Bạn đã đăng nhập thành công',
  fail: ' Tên đăng nhập hoặc mật khẩu không đũng'
}
const LOGIN_INFO = {
  username: 'admin',
  password: 'admin'
}
class Login extends Component {
  state = {
    username: '',
    password: ''
  }

  render() {
    return (
      < View style={styles.container} >
        < Image source={require('../res/Illuminati-Logo.png')} style={{ width: 200, height: 200, }
        } />
        < View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
          {/* <InputBlock placeholder='Điền username nào giáo sư' /> */}
          < TextInput
            style={{ height: 40, width: 200, color: 'black' }}
            placeholder='Điền username nào giáo sư'
            placeholderTextColor='white'
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}

          />
          <TextInput
            style={{ height: 40, width: 200, color: 'black' }}
            placeholder='Chỗ này điền password nha'
            placeholderTextColor='white'
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}

          />
          {/* <InputBlock placeholder='Còn cái này nữa' /> */}
          
            <Button
              title="Login"
              onPress={() => {
                (this.state.username == LOGIN_INFO.username && this.state.password == LOGIN_INFO.password) ? Alert.alert('Thông tin là chính xác, giáo sư') : Alert.alert('Sai rồi pạn ơi!')
              }}
            />
          
          <Text
            onPress={() => {
              Alert.alert('Username: admin. Password: admin');
            }} style ={{color:'white', alignSelf:'center'}}>
            Giáo sư không có nick?
          </Text>
        </View >
      </View>


    );
  }
}
const styles = StyleSheet.create({
  background: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  text: {
    color: 'cyan'
  },
  container: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around', justifyContent: 'space-around',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  }
})

export default Login;