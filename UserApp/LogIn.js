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
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  smallBackground,
  bigBackground,
  searchIcon,
  categories,
  Footer,
  clickedIconFooter,
  unclickedIconFooter,
  loginView,
  logintext,
  loginIcons,
  textInputcolor,
  iconContainer,
  eyeColor,
  textinTextinput,
  errorColor,
} from './Colors';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default class LogIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_email: '',
      email_err: '',

      user_pass: '',
      lockedPass: true,
      pass_err: '',
      isVisible: true,
      user_data: {},
      charity_data: {},
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  // eslint-disable-next-line no-lone-blocks
  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 2000);
  }
  login() {
    let errors = 0;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd
   
        //empty password
        if (this.state.user_email.trim() == '') {
          this.setState({ email_err: 'الرجاء إدخال البريد الإلكتروني' });
          errors++;
        } else if (this.state.user_pass.trim() == '') {
          this.setState({ pass_err: 'الرجاء إدخال كلمة المرور' });
          errors++;
        }
        //password incorrect
        else if (res.data == 'password_inCorrect') {
          this.setState({ pass_err: 'كلمة مرور غير صحيحة' });
          errors++;
        }
        //correct password
        // else if 
        //user not found
        else if (res.data == 'user_not_found') {
          this.setState({ email_err: 'الرجاء التأكد من صحة البريد الإلكتروني' });
          errors++;
        }
        //call supporrt
        else if (res.data == 'call_support') {
          alert('call support');
        }
    
  }


  // The Page Design:
  render() {
    return (
      <>
        {this.state.isVisible === true ? (
          <>
            <StatusBar
              backgroundColor={bigBackground}
              barStyle={'dark-content'}
            />
            <View
              style={{
                backgroundColor: bigBackground,
                justifyContent: 'center',
                // alignSelf: 'center',
                flex: 1,
              }}>
              <Image
                source={require('../Images/logo.png')}
                resizeMode="center"
                style={{
                  alignSelf: 'center',
                  width: width * 0.5,
                  height: height * 0.5,
                  marginTop: height * -0.1,
                }}
              />
              <Text
                style={{
                  color: logintext,
                  alignSelf: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginTop: height * -0.1,
                }}>
                GiveYu
              </Text>
            </View>
          </>
        ) : (
          <>
            <StatusBar
              backgroundColor={bigBackground}
              barStyle={'dark-content'}
            />
            <ScrollView
              style={{
                backgroundColor: bigBackground,
                flex: 1,
              }}>
              <View style={styles.pageContainer}>
                {/* Logo Img */}
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: width * 0.2,
                    flexWrap: 'wrap',
                  }}>
                  <View
                    style={{
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
                      resizeMode="center"
                    />
                  </View>
                </View>

                {/* Page Tittle */}
                <View style={styles.tittleContainer}>
                  <Text style={styles.pageTittleStyle}>مرحباً بعودتك!</Text>

                  <Text
                    style={[
                      styles.pageTittleStyle,
                      {
                        fontSize: width * 0.037,
                      },
                    ]}>
                    قم بتسجيل دخولك
                  </Text>
                </View>

                {/* Container Of TextInputs */}
                <View style={styles.containerOfTextInputs}>
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
                    //   onEndEditing={e => this.onEndEditingEmail(e.nativeEvent.text)}
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

                  {/* User Password */}
                  <View style={styles.containerOfEachTextInput}>
                    {/* Password TextInput */}
                    <View style={styles.containerOfPassTxtInput}>
                      <TextInput
                        value={this.state.user_pass}
                        onChangeText={value => {
                          this.setState({ user_pass: value });
                        }}
                        style={styles.passTextInputStyle}
                        autoCorrect={false}
                        keyboardType="default"
                        secureTextEntry={this.state.lockedPass ? true : false}
                        placeholder="كلمة المرور"
                        placeholderTextColor={'#a7a7a7'}
                      //   onEndEditing={e => this.onEndEditingPass(e.nativeEvent.text)}
                      />

                      {/* Eye SecuredPass Icon */}
                      <TouchableOpacity
                        style={styles.containerOfEyeIconForSecurePass}
                        onPress={() => {
                          let locked = this.state.lockedPass;
                          this.setState({ lockedPass: !locked });
                        }}>
                        <Ionicons
                          name={this.state.lockedPass ? 'eye-off' : 'eye'}
                          color={eyeColor}
                          size={22}
                        />
                      </TouchableOpacity>
                    </View>

                    {/* Lock Icon For Password TextInput */}
                    <View style={styles.iconContainerStyle}>
                      <FontAwesome5 name="lock" color={loginIcons} size={20} />
                    </View>
                  </View>

                  {/* Password Validation Text */}
                  <Text
                    style={{
                      fontSize: width * 0.04,
                      // fontSize: 15,
                      color: errorColor,
                      textAlign: 'center',
                      marginBottom: height * 0.002,
                    }}>
                    {this.state.pass_err}
                  </Text>

                  {/* ForgetPass Text */}
                  <TouchableOpacity
                    style={styles.forgetPassTextContianer}
                    onPress={() => {
                      this.props.navigation.navigate('RestorePass', {
                        user_data: this.state.user_data,
                      });
                    }}>
                    <Text style={styles.forgetPassTextStyle}>
                      هل نسيت كلمة المرور؟
                    </Text>
                  </TouchableOpacity>
                </View>

                {/* LogIn Button */}
                <View style={styles.containerOfLogInBtn}>
                  <TouchableOpacity
                    style={styles.logInButton}
                    onPress={() => {
                      this.login();
                      // this.props.navigation.navigate('MyAccount', {
                      //   user_data: this.state.user_data,
                      // });
                    }}>
                    <Text style={styles.logInBtnTextStyle}>تسجيل دخول</Text>
                  </TouchableOpacity>
                </View>

                {/* Sign Up Option */}
                <View style={styles.contianerOfSignUpOption}>
                  <Text
                    style={[styles.forgetPassTextStyle, { color: '#a7a7a7' }]}>
                    ليس لديك حساب؟
                  </Text>

                  <TouchableOpacity
                    style={{ marginLeft: width * 0.02 }}
                    onPress={() => {
                      this.props.navigation.navigate('SignUp');
                    }}>
                    <Text style={styles.forgetPassTextStyle}>
                      أضغط لإنشاء حساب
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </>
        )}
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
  tittleContainer: {
    flex: 0.1,
    marginTop: height * 0.03,
    justifyContent: 'center',
    marginBottom: height * 0.02,
  },
  pageTittleStyle: {
    color: logintext,
    fontSize: width * 0.074,
    // fontSize: RFValue(30),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  containerOfTextInputs: {
    flex: 0.4,
    alignItems: 'center',
    marginTop: height * 0.006,
    paddingVertical: height * 0.005,
    paddingHorizontal: height * 0.025,
  },
  containerOfEachTextInput: {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.005,
    marginTop: height * 0.01,
    // flexWrap: 'wrap',
    // alignItems:'center',
  },
  textInputStyle: {
    elevation: 10,
    color: textinTextinput,
    textAlign: 'right',
    padding: RFValue(7),
    width: width * 0.9,
    height: height * 0.07,
    fontSize: width * 0.049,
    // fontSize: RFValue(17),
    borderRadius: RFValue(35),
    paddingLeft: width * 0.22,
    backgroundColor: textInputcolor,
  },
  containerOfPassTxtInput: {
    elevation: 10,
    alignItems: 'center',
    width: width * 0.9,
    height: height * 0.07,
    flexDirection: 'row',
    borderRadius: RFValue(35),
    backgroundColor: textInputcolor,
  },
  passTextInputStyle: {
    color: textinTextinput,
    textAlign: 'right',
    padding: RFValue(7),
    width: width * 0.77,
    height: height * 0.07,
    fontSize: width * 0.049,
    // fontSize: RFValue(17),
    paddingLeft: width * 0.22,
    borderTopRightRadius: RFValue(35),
    borderBottomRightRadius: RFValue(35),
    backgroundColor: textInputcolor,
  },
  containerOfEyeIconForSecurePass: {
    width: width * 0.13,
    alignItems: 'center',
    height: height * 0.07,
    justifyContent: 'center',
    borderTopRightRadius: RFValue(35),
    borderBottomRightRadius: RFValue(35),
    backgroundColor: textInputcolor,
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
  forgetPassTextContianer: {
    flex: 0.1,
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
    padding: height * 0.01,
  },
  forgetPassTextStyle: {
    color: logintext,
    fontWeight: 'bold',
    fontSize: width * 0.04,
    // fontSize: RFValue(14),
  },
  containerOfLogInBtn: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: height * 0.03,
    paddingTop: height * 0.01,
  },
  logInButton: {
    elevation: 7,
    borderRadius: RFValue(30),
    width: width * 0.5,
    alignSelf: 'center',
    height: width * 0.14,
    justifyContent: 'center',
    backgroundColor: loginView,
    // marginTop: height * 0.07,
    // marginBottom: height * 0.1,
  },
  logInBtnTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.051,
    color: '#fff',
  },
  container1OfLogWith: {
    // flex:0.3,
    width: width * 0.8,
    borderTopWidth: 1,
    alignItems: 'center',
    padding: height * 0.01,
    marginTop: height * 0.03,
    borderTopColor: '#a7a7a7',
  },
  container2OfLogWith: {
    width: width * 0.3,
    alignItems: 'center',
    marginTop: height * -0.03,
    paddingHorizontal: width * 0.025,
    backgroundColor: '#E5ECF4',
  },
  contianerOfSignUpOption: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: height * 0.01,
    flexDirection: 'row',
    marginVertical: height * 0.05,
    marginTop: height * 0.003,
  },
});
