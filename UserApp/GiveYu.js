/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
import React from 'react';
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class GiveYu extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor="#E5ECF4" />
        <ImageBackground
          resizeMode="stretch"
          source={require('../Images/back3.jpg')}
          style={{
            width: width,
            height: height,
          }}>
          <View style={{alignContent: 'center'}}>
            <Image
              source={require('../Images/logo.png')}
              style={{
                height: height * 0.3,
                width: width * 1,
                alignSelf: 'center',
                marginTop: height * 0.09,
              }}
            />
            <Text
              style={{
                fontSize: 35,
                color: '#4e7d91',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              GiveYu
            </Text>
          </View>

          <View>
            <Text
              style={{
                fontSize: 35,
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                // marginLeft: width * 0.1,
                marginTop: height * 0.11,
              }}>
              تطبيق توصيل
            </Text>
            <Text
              style={{
                fontSize: 35,
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
              الخير
            </Text>
            {/* <Text
              style={{
                fontSize: 17,
                color: '#fff',
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: height * 0.05,
              }}>
              تطبيق توصيل الخير
            </Text> */}
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('LogIn');
              }}
              style={{
                width: width * 0.15,
                alignSelf: 'center',
                backgroundColor: '#FC854B',
                height: width * 0.15,
                marginTop: height * 0.07,
                borderRadius: 35,
                justifyContent: 'center',
              }}>
              <Icon
                name="chevron-left"
                size={25}
                style={{
                  alignSelf: 'center',
                  color: '#fff',
                }}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </>
    );
  }
}

export default GiveYu;
