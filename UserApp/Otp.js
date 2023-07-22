/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
import React, { useRef } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  StatusBar,
  TextInput,
  Image,
  ScrollView,
} from 'react-native';
import {
  smallBackground,
  bigBackground,
  searchIcon,
  categories,
  Footer,
  clickedIconFooter,
  unclickedIconFooter,
  loginView, logintext, loginIcons, textInputcolor, iconContainer, eyeColor, textinTextinput, errorColor
} from './Colors';
import { Dimensions } from 'react-native';
import axios from 'axios';

import { RFValue } from 'react-native-responsive-fontsize';


const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


class Otp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_data: this.props.route.params.user_data,
      user_email: this.props.route.params.user_email,
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      otp: ''
    };

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
            <View style={{ flex: 0.2, marginTop: width * .2 }}>
              <View style={{
                width: width * 0.25,
                height: height * 0.12,
                backgroundColor: iconContainer,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: width * 0.13,
                // borderRadius: 35,
                elevation: 10,
              }}>
                <Image
                  source={require('../Images/logo.png')}
                  style={styles.imgLogoStyle}
                  resizeMode='center'
                />
              </View>
            </View>

            <View style={styles.view_text}>
              <Text style={styles.text_container}> التحقق من</Text>
              <Text style={styles.text_container_2}>  البريد الإلكترونى</Text>
            </View>

            <View style={styles.view_2}>
              <Text style={styles.text_2}>
                الرجاء إدخال الرمز المكون من 4 ارقام
              </Text>
              <Text style={styles.text_22}>
                {' '}
                المرسل إلى عنوان بريدك الإلكتروني .
              </Text>
            </View>




            <View style={styles.otpContainer}>

              <View style={styles.otpBox}>
                <TextInput style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={this.state.otp1}
                  onChangeText={value => {
                    this.setState({ otp1: value });
                  }}
                />

              </View>

              <View style={styles.otpBox}>
                <TextInput style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={this.state.otp2}
                  onChangeText={value => {
                    this.setState({ otp2: value });
                  }}
                />
              </View>

              <View style={styles.otpBox}>
                <TextInput style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={this.state.otp3}
                  onChangeText={value => {
                    this.setState({ otp3: value });
                  }}
                />
              </View>

              <View style={styles.otpBox}>
                <TextInput style={styles.otpText}
                  keyboardType="number-pad"
                  maxLength={1}
                  value={this.state.otp4}
                  onChangeText={value => {
                    this.setState({ otp4: value });
                  }}
                />
              </View>

            </View>



            <View style={styles.view_reply}>
              <Text style={styles.text_3}> إذا لم تستلم رمز</Text>
              <TouchableOpacity
                onPress={() => {
                  this.send_otp()
                }}>

                <Text style={styles.text_4}> إعادة الإرسال</Text>
              </TouchableOpacity>
            </View>
            <Text style={{ fontSize: 16, alignSelf: 'center', color: '#F78254', fontWeight: 'bold' }}>{this.state.otp_err}</Text>

            <TouchableOpacity
              onPress={() => {
                this.check_otp(),
                  console.log(this.state.otp4 + this.state.otp3 + this.state.otp2 + this.state.otp1)
              }}>
              <View style={styles.view_verify}>
                <Text style={styles.t_verify}> التحقق </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: height * 0.02,
    backgroundColor: bigBackground,
  },
  imgLogoStyle: {
    width: width * 0.17,
    height: height * 0.075,
  },

  view_text: {
    flexDirection: 'column',
    alignItems: 'center',
  },

  text_container: {
    color: logintext,
    fontSize: 25,
    marginTop: height * 0.03,
    fontWeight: 'bold',
  },

  text_container_2: {
    color: logintext,
    fontSize: 25,
    fontWeight: 'bold',
  },

  view_2: {
    alignItems: 'center',
    flexDirection: 'column',
  },

  text_2: {
    color: '#000',
    fontSize: 18,
    marginTop: height * 0.03,
    alignself: 'center',
    fontWeight: 'bold',
  },

  text_22: {
    color: '#000',
    fontSize: 18,
    alignself: 'center',
    fontWeight: 'bold',
  },

  view_otp: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-around',
    marginTop: height * 0.02,
    backgroundColor: '#E5ECF4',
    width: width * 0.8,
    height: height * 0.1,
  },

  Otp: {
    width: width * 0.15,
    height: height * 0.08,
    backgroundColor: '#A2C6DC',
    borderRadius: 15,
    fontSize: 18,
    alignItems: 'center',
  },

  view_reply: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: height *0.02,
    // backgroundColor:"#000"
    marginBottom: height * 0.02,
  },

  text_3: {
    alignSelf: 'center',
    color: '#000',
    fontSize: 19,
  },

  text_4: {
    alignSelf: 'center',
    color: loginView,
    fontSize: 17,
    fontWeight: 'bold',
  },

  view_verify: {
    backgroundColor: loginView,
    alignSelf: 'center',
    alignItems: 'center',
    height: '19%',
    width: width * .4,
    borderRadius: 17,
    marginBottom: height * 0.2,
    marginTop: RFValue(20),
  },

  t_verify: {
    color: '#E5ECF4',
    fontSize: 22,
    marginTop: height * 0.02,
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    // textAlign: 'center',
  },


  otpContainer: {
    marginHorizontal: 20,
    marginBottom: 20,
    justifyContent: 'space-evenly',
    alignItems: "center",
    flexDirection: "row",

  },

  otpBox: {
    borderRadius: 10,
    borderColor: '#4E7D91',
    borderWidth: 1,
    marginTop: 15,
    marginLeft: 3

  },

  otpText: {
    fontSize: 25,
    color: "#000",
    textAlign: "center",
    paddingHorizontal: 18,
    paddingVertical: 10,

  }



});

export default Otp;
