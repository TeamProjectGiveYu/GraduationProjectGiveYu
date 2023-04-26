/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
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

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class RestorePass extends React.Component {
  constructor() {
    super();
    this.state = {
      user_email: '',
      email_err: '',
    };
  }

  // The Functions:
  Email_Validation() {
    let errors = 0;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd

    // Email Conditions
    if (this.state.user_email.trim() == '') {
      this.setState({ email_err: 'الرجاء إدخال البريد الإلكتروني' });
      errors++;
    } else if (reg.test(this.state.user_email.trim()) == false) {
      this.setState({ email_err: 'الرجاء التأكد من صحة البريد الإلكتروني' });
      errors++;
    } else {
      this.setState({ email_err: '' });
    }

    if (errors == 0) {
      this.props.navigation.navigate('Otp');
    }
  }

  // The Page Design:
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

            {/* Page Tittle */}
            <View style={styles.tittleContainer}>
              <Text style={styles.pageTittleStyle}>إستعادة كلمة المرور</Text>

              <Text
                style={[
                  styles.pageTittleStyle,
                  {
                    fontSize: width * 0.049,
                    // fontSize: RFValue(17),
                    marginTop: height * 0.02,
                  },
                ]}>
                الرجاء إدخال عنوان البريد الإلكتروني المرتبط بحسابك
              </Text>
            </View>

            {/* Container Of TextInputs */}
            <View style={styles.containerOfTextInput}>
              {/* User Email */}
              <View style={styles.containerOfEachTextInput}>
                {/* Email TextInput */}
                <TextInput
                  value={this.state.user_email}
                  onChangeText={value => {
                    this.setState({ user_email: value });
                  }}
                  style={styles.textInputStyle}
                  autoCorrect={false}
                  keyboardType="email-address"
                  placeholder="البريد الألكتروني"
                  placeholderTextColor={'#a7a7a7'}
                />

                {/* Email Icon */}
                <View style={styles.iconContainerStyle}>
                  <Entypo name="mail" color={loginIcons} size={25} />
                </View>
              </View>

              {/* Email Validation Text */}
              <Text
                style={{
                  fontSize: width * 0.04,
                  // fontSize: 15,
                  color: errorColor,
                  textAlign: 'center',
                  marginBottom: height * 0.01,
                }}>
                {this.state.email_err}
              </Text>
            </View>

            {/* Reset Password Button */}
            <View style={styles.containerOfResetBtn}>
              <TouchableOpacity
                style={styles.resetButton}
                onPress={() => {
                  this.Email_Validation();
                }}>
                <Text style={styles.resetTextStyle}>
                  إعادة تعيين كلمة المرور
                </Text>
              </TouchableOpacity>
            </View>
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
    paddingTop: height * 0.05,
    backgroundColor: bigBackground,
    // backgroundColor:'#f00',
  },
  iconContainerStyle: {
    width: width * 0.17,
    height: height * 0.085,
    backgroundColor: iconContainer,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: width * 0.35,
    // borderRadius: 35,
    elevation: 10,
    marginTop: height * -0.08,
  },
  imgLogoStyle: {
    width: width * 0.17,
    height: height * 0.075,
  },
  tittleContainer: {
    flex: 0.1,
    padding: height * 0.05,
    paddingTop: height * 0.02,
    marginBottom: height * 0.01,
    justifyContent: 'center',
    // backgroundColor: '#0ff',
  },
  pageTittleStyle: {
    color: logintext,
    fontSize: width * 0.084,
    // fontSize: RFValue(30),
    fontWeight: 'bold',
    textAlign: 'center',
  },
  containerOfTextInput: {
    flex: 0.4,
    alignItems: 'center',
    marginTop: height * 0.006,
    paddingVertical: height * 0.005,
    paddingHorizontal: height * 0.025,
    // backgroundColor: '#0f8',
  },
  containerOfEachTextInput: {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.005,
    marginTop: height * -0.01,
    // flexWrap: 'wrap',
    // alignItems:'center',
    // backgroundColor:'#f00',
  },
  textInputStyle: {
    elevation: 10,
    color: textinTextinput,
    padding: RFValue(7),
    width: width * 0.9,
    height: height * 0.07,
    fontSize: RFValue(17),
    borderRadius: RFValue(35),
    paddingLeft: width * 0.2,
    paddingRight: width * 0.05,
    backgroundColor: textInputcolor,


  },
  containerOfResetBtn: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: height * 0.04,
    // paddingTop:height*0.01,
    // marginBottom: height * 0.1,
    // backgroundColor: '#f0f',
  },
  resetButton: {
    elevation: 7,
    borderRadius: 30,
    width: width * 0.58,
    alignSelf: 'center',
    height: width * 0.14,
    justifyContent: 'center',
    backgroundColor: loginView,
    //   marginTop: height * 0.07,
    //   marginBottom: height * 0.1,
  },
  resetTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.046,
    // fontSize: RFValue(16),
    color: '#fff',
  },
});
