/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */

import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
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

// import {back2} from './PagesDetails';
export default class PassChange extends React.Component {
  constructor() {
    super();
    this.state = {
      pastPass: '',
      pastLockedPass: true,

      // newPass: '',
      // confirmPass: '',
      // passwordErrorNew: '',
      // passwordErrorConfirm: '',
      //Password:
      newPass: '',
      lockedPass: true,
      passwordErrorNew: '',

      //Confirm Password:
      confirmPass: '',
      lockedConfPass: true,
      passwordErrorConfirm: '',
    };
  }

  changePass() {
    let errors = 0;
    if (this.state.newPass.trim() == '') {
      this.setState({ passwordErrorNew: 'من فضلك ادخل كلمة المرور' });
      errors++;
    } else if (this.state.newPass.trim().length < 6) {
      this.setState({
        passwordErrorNew: 'كلمة المرور يجب ان تكون 6 احرف او اكثر',
      });
      errors++;
    } else {
      this.setState({ passwordErrorNew: '' });
    }
    if (this.state.confirmPass.trim() == '') {
      this.setState({ passwordErrorConfirm: 'من فضلك ادخل كلمة المرور' });
      errors++;
    } else if (this.state.confirmPass.trim() != this.state.newPass) {
      this.setState({
        passwordErrorConfirm:
          'تأكيد كلمة المرور يجب ان تكون متطابقة مع كلمة المرور المدخلة اعلاه',
      });
      errors++;
    } else {
      this.setState({ passwordErrorConfirm: '' });
    }
    if (errors == 0) {
      this.props.navigation.navigate('LogIn');
    }
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
          <View
            style={{
              backgroundColor: bigBackground,
              flex: 1,
            }}>
            <View style={{ flex: 0.2, marginTop: width * .25, alignSelf: 'center' }}>
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
            <View
              style={{
                // backgroundColor: '#f0f',
                flex: 0.1,
                justifyContent: 'center',
                marginTop: 15
              }}>
              <Text
                style={{
                  color: logintext,
                  fontSize: 25,
                  fontWeight: 'bold',
                  textAlign: 'center',
                }}>
                انشاء كلمة مرور جديده
              </Text>
            </View>
            <View
              style={
                styles.containerOfTextInputs
                //   {
                //   // backgroundColor: '#0f8',
                //   // flex: 0.4,
                // }
              }>
              {/* User Password */}
              <View style={styles.containerOfEachTextInputX}>
                {/* Password TextInput */}
                <View style={styles.containerOfPassTxtInput}>
                  <TextInput
                    value={this.state.pastPass}
                    onChangeText={value => {
                      this.setState({ pastPass: value });
                    }}
                    style={styles.passTextInputStyle}
                    autoCorrect={false}
                    keyboardType="default"
                    secureTextEntry={this.state.pastLockedPass ? true : false}
                    placeholder="كلمة المرور القديمه"
                    placeholderTextColor={'#a7a7a7'}
                  //   onEndEditing={e => this.onEndEditingPass(e.nativeEvent.text)}
                  />

                  {/* Eye SecuredPass Icon */}
                  <TouchableOpacity
                    style={styles.containerOfEyeIconForSecurePass}
                    onPress={() => {
                      let locked = this.state.pastLockedPass;
                      this.setState({ pastLockedPass: !locked });
                    }}>
                    <Ionicons
                      name={this.state.pastLockedPass ? 'eye-off' : 'eye'}
                      color={loginIcons}
                      size={22}
                    />
                  </TouchableOpacity>
                </View>

                {/* Lock Icon For Password TextInput */}
                <View style={styles.iconContainerStyle}>
                  <Icon name="lock" color={loginIcons} size={20} />
                </View>
              </View>

              {/* User Password */}
              <View style={styles.containerOfEachTextInput}>
                {/* Password TextInput */}
                <View style={styles.containerOfPassTxtInput}>
                  <TextInput
                    value={this.state.newPass}
                    onChangeText={value => {
                      this.setState({ newPass: value });
                    }}
                    style={styles.passTextInputStyle}
                    autoCorrect={false}
                    keyboardType="default"
                    secureTextEntry={this.state.lockedPass ? true : false}
                    placeholder="كلمة المرور الجديده"
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
                      color={loginIcons}
                      size={22}
                    />
                  </TouchableOpacity>
                </View>

                {/* Lock Icon For Password TextInput */}
                <View style={styles.iconContainerStyle}>
                  <Icon name="lock" color={loginIcons} size={20} />
                </View>
              </View>

              {/* Password Validation Text */}
              <Text
                style={{
                  fontSize: 15,
                  color: errorColor,
                  textAlign: 'center',
                  marginBottom: height * 0.002,
                }}>
                {this.state.passwordErrorNew}
              </Text>

              {/* Confirm Password */}
              <View style={styles.containerOfEachTextInput}>
                {/* Confirm Password TextInput */}
                <View style={styles.containerOfPassTxtInput}>
                  <TextInput
                    value={this.state.confirmPass}
                    onChangeText={value => {
                      this.setState({ confirmPass: value });
                    }}
                    style={styles.passTextInputStyle}
                    autoCorrect={false}
                    keyboardType="default"
                    secureTextEntry={this.state.lockedConfPass ? true : false}
                    placeholder="تأكيد كلمة المرور"
                    placeholderTextColor={'#a7a7a7'}
                  // multiline={true}
                  // numberOfLines={4}
                  />

                  {/* Eye SecuredPass Icon */}
                  <TouchableOpacity
                    style={styles.containerOfEyeIconForSecurePass}
                    onPress={() => {
                      let locked = this.state.lockedConfPass;
                      this.setState({ lockedConfPass: !locked });
                    }}>
                    <Ionicons
                      name={this.state.lockedConfPass ? 'eye-off' : 'eye'}
                      color={loginView}
                      size={22}
                    />
                  </TouchableOpacity>
                </View>

                {/* Lock Icon For Confirm Password TextInput */}
                <View style={styles.iconContainerStyle}>
                  <Icon name="lock" color={loginView} size={20} />
                </View>
              </View>

              {/* Confirm Password Validation Text */}
              <Text
                style={{
                  fontSize: 15,
                  color: errorColor,
                  textAlign: 'center',
                  marginBottom: height * 0.002,
                }}>
                {this.state.passwordErrorConfirm}
              </Text>

              {/* <Text
                style={{fontSize: 15, color: '#FC854B', textAlign: 'center'}}>
                {this.state.passwordErrorConfirm}
              </Text> */}
            </View>
            <View
              style={{
                flex: 0.3,
                // backgroundColor: '#f0f',
                marginBottom: height * 0.1,
              }}>
              <TouchableOpacity
                style={{
                  width: width * 0.5,
                  alignSelf: 'center',
                  backgroundColor: loginView,
                  height: width * 0.14,
                  marginTop: height * 0.008,
                  borderRadius: 30,
                  justifyContent: 'center',
                  marginBottom: height * 0.1,
                  elevation: 10,
                }}
                onPress={() => {
                  this.changePass();
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: '#fff',
                  }}>
                  حفظ
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
  imgLogoStyle: {
    width: width * 0.17,
    height: height * 0.075,
  },
  containerOfEachTextInputX: {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.07,
    marginTop: height * 0.03,
  },
  containerOfEachTextInput: {
    alignContent: 'center',
    justifyContent: 'center',
    marginBottom: width * 0.005,
    marginTop: height * 0.01,
    // flexWrap: 'wrap',
    // alignItems:'center',
    // backgroundColor:'#f00',
  },

  containerOfPassTxtInput: {
    elevation: 10,
    alignItems: 'center',
    width: width * 0.9,
    height: height * 0.07,
    flexDirection: 'row',
    borderRadius: RFValue(35),
    backgroundColor: textInputcolor,
    // backgroundColor: '#00f',
  },
  passTextInputStyle: {
    color: textinTextinput,
    textAlign: 'right',
    // padding: RFValue(7),
    width: width * 0.77,
    height: height * 0.07,
    fontSize: width * 0.049,
    // fontSize: RFValue(17),
    paddingLeft: width * 0.22,
    borderTopRightRadius: RFValue(35),
    borderBottomRightRadius: RFValue(35),
    backgroundColor: textInputcolor,
    // backgroundColor: '#f0f',
  },
  containerOfEyeIconForSecurePass: {
    width: width * 0.13,
    alignItems: 'center',
    height: height * 0.07,
    justifyContent: 'center',
    borderTopRightRadius: RFValue(35),
    borderBottomRightRadius: RFValue(35),
    backgroundColor: textInputcolor,
    // backgroundColor: '#0f0',
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
  containerOfTextInputs: {
    flex: 0.4,
    alignItems: 'center',
    marginTop: height * 0.006,
    paddingVertical: height * 0.005,
    paddingHorizontal: height * 0.025,
    // backgroundColor: '#0f8',
  },
});
