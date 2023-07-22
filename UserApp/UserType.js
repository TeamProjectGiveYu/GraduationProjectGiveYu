/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import { Dimensions } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import {
  bigBackground, logintext, loginIcons, iconContainer, textinTextinput
} from './Colors';

class UserType extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor={bigBackground} />
        <ScrollView
          style={{
            backgroundColor: bigBackground,
            flex: 1,
          }}>
          <View style={styles.pageContainer}>
            {/* Logo Img */}
            <View style={{ flex: 0.2 }}>
              <Image
                source={require('../Images/logo.png')}
                style={styles.imgLogoStyle}
                resizeMode='center'

              />
            </View>

            <View style={styles.view_text}>
              <Text style={styles.text_container}> تسجيل الدخول </Text>
            </View>

            <View style={styles.view_2}>
              <Text style={styles.text_2}>
                الرجاء إختيار طريقة تسجيل الدخول
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('LogIn');
                }}
                style={{
                  backgroundColor: iconContainer,
                  width: RFValue(60),
                  height: RFValue(60),
                  alignSelf: 'center',
                  // justifyContent: 'center',
                  marginTop: RFValue(40),
                  borderRadius: 35,
                  elevation: 4,
                  marginBottom: 10,
                  justifyContent: 'center',
                  // alignContent: 'center',
                }}>
                <Ionicons
                  name="person"
                  size={30}
                  style={{ alignSelf: 'center', color: loginIcons }}
                />
              </TouchableOpacity>
              <Text style={styles.user_text}>مستخدم</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('CharityLogIn');
                }}
                style={{
                  backgroundColor: iconContainer,
                  width: RFValue(60),
                  height: RFValue(60),
                  alignSelf: 'center',
                  // justifyContent: 'center',
                  marginTop: RFValue(30),
                  borderRadius: 35,
                  elevation: 4,
                  marginBottom: 10,
                  justifyContent: 'center',
                  // alignContent: 'center',
                }}>
                <Ionicons
                  name="people-circle"
                  size={35}
                  style={{ alignSelf: 'center', color: loginIcons }}
                />
              </TouchableOpacity>
              <Text style={styles.user_text}>مسئول مؤسسه</Text>
            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}
const styles = StyleSheet.create({
  imgLogoStyle: {
    width: width * 0.6,
    alignSelf: 'center',
    height: height * 0.2,
    // backgroundColor: '#f0f',
    marginTop: height * 0.05,
  },

  view_text: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  text_container: {
    color: logintext,
    fontSize: 30,
    marginTop: height * 0.04,
    fontWeight: 'bold',
  },

  view_2: {
    alignItems: 'center',
    flexDirection: 'column',
  },

  text_2: {
    color: textinTextinput,
    fontSize: 18,
    marginTop: height * 0.01,
    alignself: 'center',
  },
  user_text: {
    color: textinTextinput,
    fontSize: 18,
    // marginTop: height * 0.01,
    textAlign: 'center',
  },
});

export default UserType;
