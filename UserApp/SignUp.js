/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';
import SwitchSelector from 'react-native-switch-selector';
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

export default function SignUp(props) {
  //user
  const [showHide, setShowHide] = useState(false);
  const [user_name, setuser_name] = useState('');
  const [username_err, setusername_err] = useState('');
  const [user_email, setuser_email] = useState('');
  const [email_err, setemail_err] = useState('');
  const [user_pass, setuser_pass] = useState('');
  const [lockedPass, setlockedPass] = useState(true);
  const [user_confPass, setuser_confPass] = useState('');
  const [lockedConfPass, setlockedConfPass] = useState(true);
  const [confPass_err, setconfPass_err] = useState('');
  const [user_phone, setuser_phone] = useState('');
  const [phone_err, setphone_err] = useState('');
  const [pass_err, setpass_err] = useState('');
  //charity
  const [charity_name, setcharity_name] = useState('');
  const [name_error, setname_error] = useState('');
  const [charity_email, setcharity_email] = useState('');
  const [email_error, setemail_error] = useState('');
  const [charity_password, setcharity_password] = useState('');
  const [charity_confirmPassword, setcharity_confirmPassword] = useState('');
  const [confPasswor_error, setconfPasswor_error] = useState('');
  const [password_error, setpassword_error] = useState('');
  const [charity_phone, setcharity_phone] = useState('');
  const [phone_error, setphone_error] = useState('');
  const [charity_address, setcharity_address] = useState('');
  const [address_error, setaddress_error] = useState('');
  const [charity_number, setcharity_number] = useState('');
  const [number_error, setnumber_error] = useState('');
  const [lockedCharityPass, setlockedCharityPass] = useState(true);
  const [lockedConfCharityPass, setlockedConfCharityPass] = useState(true);

  // The Functions of user:
  // eslint-disable-next-line no-undef
  const Validation_Before_SignUp = () => {
    let errors = 0;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd
    //UserNmae Conditions
    if (user_name.trim() == '') {
      setusername_err('الرجاء إدخال إسم المستخدم');
      errors++;
    }

    // Email Conditions
    if (user_email.trim() === '') {
      setemail_err('الرجاء إدخال البريد الإلكتروني');
      errors++;
    } else if (reg.test(user_email.trim()) == false) {
      setemail_err('تأكد من إدخال البريد الإلكتروني بشكل صحيح!');
      _;
      errors++;
    } else {
      setemail_err('');
    }

    // Pass Conditions
    if (user_pass.trim() == '') {
      setpass_err('الرجاء إدخال كلمة المرور');
      errors++;
    } else if (user_pass.trim() < 6) {
      setpass_err('كلمة المرور يجب ان تكون 6 عناصر او أكثر');
      errors++;
    } else {
      setpass_err('');
    }

    // Confirm Pass Conditions
    if (user_confPass.trim() == '' && user_pass.trim() != '') {
      setconfPass_err('الرجاء تأكيد كلمة المرور');
      errors++;
    } else if (user_confPass.trim() != user_pass) {
      setconfPass_err(
        'تأكيد كلمة المرور يجب ان تكون متطابقة مع كلمة المرور المدخلة اعلاه',
      );
      errors++;
    } else {
      setconfPass_err('');
    }

    //Phone Number Conditions
    if (user_phone.trim() == '') {
      setphone_err('الرجاء إدخال رقم الهاتف');
      errors++;
    } else if (user_phone.trim().length != 11) {
      setphone_err('الرجاء التأكد من صحة الرقم المدخل');
      errors++;
    } else {
      setphone_err('');
    }

    if (errors == 0) {
      axios
        .post('http://192.168.1.7/GP_backend/signup.php', {
          user_name: user_name,
          user_email: user_email,
          user_password: user_pass,
          user_phone: user_phone,
        })
        .then(res => {
          if (res.data == 'success') {
            props.navigation.navigate('HomePage');
          } else if (res.data == 'phone_found') {
            alert('phone_found');
          } else if (res.data == 'email_found') {
            alert('email_found');
          }
        });
    }
  };

  // The Functions:
  const Validation_Before_CharitySignUp = () => {
    let errors = 0;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd

    //UserNmae Conditions
    if (charity_name.trim() == '') {
      setname_error('الرجاء إدخال إسم المؤسسه');
      errors++;
    }

    // Email Conditions
    if (charity_email.trim() == '') {
      setemail_error('الرجاء إدخال البريد الإلكتروني');
      errors++;
    } else if (reg.test(charity_email.trim()) == false) {
      setemail_error('تأكد من إدخال البريد الإلكتروني بشكل صحيح!');
      errors++;
    } else {
      setemail_error('');
    }

    // Pass Conditions
    if (charity_password.trim() == '') {
      setpassword_error('الرجاء إدخال كلمة المرور');
      errors++;
    } else if (charity_password.trim().length < 6) {
      setpassword_error('كلمة المرور يجب ان تكون 6 عناصر او أكثر');
      errors++;
    } else {
      setpassword_error('');
    }

    // Confirm Pass Conditions
    if (charity_confirmPassword.trim() == '' && charity_password.trim() != '') {
      setconfPasswor_error('الرجاء تأكيد كلمة المرور');
      errors++;
    } else if (charity_confirmPassword.trim() != charity_password) {
      setconfPasswor_error(
        'تأكيد كلمة المرور يجب ان تكون متطابقة مع كلمة المرور المدخلة اعلاه',
      );
      errors++;
    } else {
      setconfPasswor_error('');
    }

    //Phone Number Conditions
    if (charity_phone.trim() == '') {
      setphone_error('الرجاء إدخال رقم الهاتف');
      errors++;
    } else if (charity_phone.trim().length != 11) {
      setphone_error('الرجاء التأكد من صحة الرقم المدخل');
      errors++;
    } else {
      setphone_error('');
    }

    //Address Conditions
    if (charity_address.trim() == '') {
      setaddress_error('الرجاء إدخال العنوان');
      errors++;
    } else {
      setaddress_error('');
    }

    //Number Conditions
    if (charity_number.trim() == '') {
      setnumber_error('الرجاء إدخال رقم القيد ');
      errors++;
    } else {
      setnumber_error('');
    }

    if (errors == 0) {
      props.navigation.navigate('CharityCaseDonate');
      // this.props.navigation.navigate(
      //   'HomePage',
      //   // {
      //   // UserName: this.state.charity_name,
      //   // UserEmail: this.state.charity_email,
      //   // UserPhone: this.state.charity_phone,
      //   // UserAddress: this.state.charity_number,
      //   // }
      // );
    }
  };

  // The Page Design:
  return (
    <>
      <StatusBar backgroundColor={bigBackground} />
      <SwitchSelector
        initial={0}
        buttonColor={loginView}
        onPress={value => setShowHide(value)}
        options={[
          {label: 'مستخدم', value: false},
          {label: 'مؤسسة', value: true},
        ]}
      />
      <View>
        {showHide !== true ? (
          <ScrollView>
            <View style={styles.pageContainer}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={styles.pageTittleStyle}>مرحباً بك!</Text>
                <View
                  style={{
                    width: width * 0.2,
                    height: height * 0.1,
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

              <Text
                style={[
                  styles.pageTittleStyle,
                  {
                    fontSize: width * 0.049,
                    // fontSize: RFValue(17),
                    marginTop: -30,
                    marginLeft: width * 0.1,
                  },
                ]}>
                قم بإنشاء حسابك
              </Text>

              {/* Container Of TextInputs */}
              <View style={styles.containerOfTextInputs}>
                {/* UserName */}
                <View style={styles.containerOfEachTextInput}>
                  {/* UserName TextInput */}
                  <TextInput
                    value={user_name}
                    onChangeText={value => {
                      setuser_name(value);
                    }}
                    style={styles.textInputStyle}
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="إسم المستخدم"
                    placeholderTextColor={'#a7a7a7'}
                  />

                  {/* UserName Icon */}
                  <View style={styles.iconContainerStyle}>
                    <FontAwesome5
                      name="user-alt"
                      color={loginIcons}
                      size={22}
                    />
                  </View>
                </View>

                {/* UserName Validation Text */}
                <Text
                  style={{
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.01,
                  }}>
                  {username_err}
                </Text>

                {/* User Email */}
                <View style={styles.containerOfEachTextInput}>
                  {/* Email TextInput */}
                  <TextInput
                    value={user_email}
                    onChangeText={value => {
                      setuser_email(value);
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
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.01,
                  }}>
                  {email_err}
                </Text>

                {/* User Password */}
                <View style={styles.containerOfEachTextInput}>
                  {/* Password TextInput */}
                  <View style={styles.containerOfPassTxtInput}>
                    <TextInput
                      value={user_pass}
                      onChangeText={value => {
                        setuser_pass(value);
                      }}
                      style={styles.passTextInputStyle}
                      autoCorrect={false}
                      keyboardType="default"
                      secureTextEntry={lockedPass ? true : false}
                      placeholder="كلمة المرور"
                      placeholderTextColor={'#a7a7a7'}
                      //   onEndEditing={e => this.onEndEditingPass(e.nativeEvent.text)}
                    />

                    {/* Eye SecuredPass Icon */}
                    <TouchableOpacity
                      style={styles.containerOfEyeIconForSecurePass}
                      onPress={() => {
                        let locked = lockedPass;
                        setlockedPass(!locked);
                      }}>
                      <Ionicons
                        name={lockedPass ? 'eye-off' : 'eye'}
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
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.01,
                  }}>
                  {pass_err}
                </Text>

                {/* Confirm Password */}
                <View style={styles.containerOfEachTextInput}>
                  {/* Confirm Password TextInput */}
                  <View style={styles.containerOfPassTxtInput}>
                    <TextInput
                      value={user_confPass}
                      onChangeText={value => {
                        setuser_confPass(value);
                      }}
                      style={styles.passTextInputStyle}
                      autoCorrect={false}
                      keyboardType="default"
                      secureTextEntry={lockedConfPass ? true : false}
                      placeholder="تأكيد كلمة المرور"
                      placeholderTextColor={'#a7a7a7'}
                    />

                    {/* Eye SecuredPass Icon */}
                    <TouchableOpacity
                      style={styles.containerOfEyeIconForSecurePass}
                      onPress={() => {
                        let locked = lockedConfPass;
                        setlockedConfPass(!locked);
                      }}>
                      <Ionicons
                        name={lockedConfPass ? 'eye-off' : 'eye'}
                        color={eyeColor}
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>

                  {/* Lock Icon For Confirm Password TextInput */}
                  <View style={styles.iconContainerStyle}>
                    <FontAwesome5 name="lock" color={loginIcons} size={20} />
                  </View>
                </View>

                {/* Confirm Password Validation Text */}
                <Text
                  style={{
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.01,
                  }}>
                  {confPass_err}
                </Text>

                {/* Phone Number */}
                <View style={styles.containerOfEachTextInput}>
                  {/* Phone Number TextInput */}
                  <TextInput
                    value={user_phone}
                    onChangeText={value => {
                      setuser_phone(value);
                    }}
                    style={styles.textInputStyle}
                    autoCorrect={false}
                    keyboardType="phone-pad"
                    placeholder="رقم الهاتف"
                    placeholderTextColor={'#a7a7a7'}
                  />

                  {/* Phone Number Icon */}
                  <View style={styles.iconContainerStyle}>
                    <FontAwesome5 name="phone" color={loginIcons} size={21} />
                  </View>
                </View>
                {/* Address */}

                {/* Phone Number Validation Text */}
                <Text
                  style={{
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.002,
                  }}>
                  {phone_err}
                </Text>
              </View>

              {/* Sign Up Button */}
              <View style={styles.containerOfSignUpBtn}>
                <TouchableOpacity
                  style={styles.signUpButton}
                  onPress={Validation_Before_SignUp}>
                  <Text style={styles.signUpTextStyle}>إنشاء حساب</Text>
                </TouchableOpacity>
              </View>

              {/* LogIn Option */}
              <View style={styles.contianerOfLogInOption}>
                <Text style={[styles.forgetPassTextStyle, {color: '#a7a7a7'}]}>
                  هل لديك حساب؟
                </Text>

                <TouchableOpacity
                  style={{marginLeft: width * 0.02}}
                  onPress={() => {
                    props.navigation.navigate('LogIn');
                  }}>
                  <Text style={styles.forgetPassTextStyle}>
                    أضغط لتسجيل الدخول
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        ) : (
          <ScrollView
            style={{
              backgroundColor: bigBackground,
            }}>
            <View style={styles.pageContainer}>
              {/* Logo Img */}
              <View
                style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Text style={styles.pageTittleStyle}>مرحباً بك!</Text>
                <View
                  style={{
                    width: width * 0.2,
                    height: height * 0.1,
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
              <Text
                style={[
                  styles.pageTittleStyle,
                  {
                    fontSize: width * 0.049,
                    // fontSize: RFValue(17),
                    marginTop: -30,
                    marginLeft: width * 0.1,
                  },
                ]}>
                قم بإنشاء حسابك
              </Text>

              {/* Container Of TextInputs */}
              <View style={styles.containerOfTextInputs}>
                {/* UserName */}
                <View style={styles.containerOfEachTextInput}>
                  {/* UserName TextInput */}
                  <TextInput
                    value={charity_name}
                    onChangeText={value => {
                      setcharity_name(value);
                    }}
                    style={styles.textInputStyle}
                    autoCorrect={false}
                    keyboardType="default"
                    placeholder="إسم المؤسسه"
                    placeholderTextColor={'#a7a7a7'}
                  />

                  {/* UserName Icon */}
                  <View style={styles.iconContainerStyle}>
                    <FontAwesome5
                      name="user-alt"
                      color={loginIcons}
                      size={22}
                    />
                  </View>
                </View>

                {/* UserName Validation Text */}
                <Text
                  style={{
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.02,
                  }}>
                  {name_error}
                </Text>

                {/* User Email */}
                <View style={styles.containerOfEachTextInput}>
                  {/* Email TextInput */}
                  <TextInput
                    value={charity_email}
                    onChangeText={value => {
                      setcharity_email(value);
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
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.02,
                  }}>
                  {email_error}
                </Text>

                {/* User Password */}
                <View style={styles.containerOfEachTextInput}>
                  {/* Password TextInput */}
                  <View style={styles.containerOfPassTxtInput}>
                    <TextInput
                      value={charity_password}
                      onChangeText={value => {
                        setcharity_password(value);
                      }}
                      style={styles.passTextInputStyle}
                      autoCorrect={false}
                      keyboardType="default"
                      secureTextEntry={lockedCharityPass ? true : false}
                      placeholder="كلمة المرور"
                      placeholderTextColor={'#a7a7a7'}
                      //   onEndEditing={e => this.onEndEditingPass(e.nativeEvent.text)}
                    />

                    {/* Eye SecuredPass Icon */}
                    <TouchableOpacity
                      style={styles.containerOfEyeIconForSecurePass}
                      onPress={() => {
                        let locked = lockedCharityPass;
                        setlockedCharityPass(!locked);
                      }}>
                      <Ionicons
                        name={lockedCharityPass ? 'eye-off' : 'eye'}
                        color={loginIcons}
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
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.02,
                  }}>
                  {password_error}
                </Text>

                {/* Confirm Password */}
                <View style={styles.containerOfEachTextInput}>
                  {/* Confirm Password TextInput */}
                  <View style={styles.containerOfPassTxtInput}>
                    <TextInput
                      value={charity_confirmPassword}
                      onChangeText={value => {
                        setcharity_confirmPassword(value);
                      }}
                      style={styles.passTextInputStyle}
                      autoCorrect={false}
                      keyboardType="default"
                      secureTextEntry={lockedConfCharityPass ? true : false}
                      placeholder="تأكيد كلمة المرور"
                      placeholderTextColor={'#a7a7a7'}
                    />

                    {/* Eye SecuredPass Icon */}
                    <TouchableOpacity
                      style={styles.containerOfEyeIconForSecurePass}
                      onPress={() => {
                        let locked = lockedConfCharityPass;
                        setlockedConfCharityPass(!locked);
                      }}>
                      <Ionicons
                        name={lockedConfCharityPass ? 'eye-off' : 'eye'}
                        color={loginIcons}
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>

                  {/* Lock Icon For Confirm Password TextInput */}
                  <View style={styles.iconContainerStyle}>
                    <FontAwesome5 name="lock" color={loginIcons} size={20} />
                  </View>
                </View>

                {/* Confirm Password Validation Text */}
                <Text
                  style={{
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.02,
                  }}>
                  {confPasswor_error}
                </Text>

                {/* Phone Number */}
                <View style={styles.containerOfEachTextInput}>
                  {/* Phone Number TextInput */}
                  <TextInput
                    value={charity_phone}
                    onChangeText={value => {
                      setcharity_phone(value);
                    }}
                    style={styles.textInputStyle}
                    autoCorrect={false}
                    keyboardType="phone-pad"
                    placeholder="رقم الهاتف"
                    placeholderTextColor={'#a7a7a7'}
                  />

                  {/* Phone Number Icon */}
                  <View style={styles.iconContainerStyle}>
                    <FontAwesome5 name="phone" color={loginIcons} size={21} />
                  </View>
                </View>
                {/* Address */}

                {/* Phone Number Validation Text */}
                <Text
                  style={{
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.02,
                  }}>
                  {phone_error}
                </Text>

                {/* Address */}

                <View style={styles.containerOfEachTextInput}>
                  {/* Address TextInput */}
                  <TextInput
                    multiline={true}
                    value={charity_address}
                    onChangeText={value => {
                      setcharity_address(value);
                    }}
                    style={styles.textInputStyle}
                    autoCorrect={false}
                    placeholder="العنوان"
                    placeholderTextColor={'#a7a7a7'}
                  />

                  {/* Address Icon */}
                  <View style={styles.iconContainerStyle}>
                    <Ionicons name="location" color={loginIcons} size={21} />
                  </View>
                </View>

                {/* Address Validation Text */}
                <Text
                  style={{
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.02,
                  }}>
                  {address_error}
                </Text>

                {/* Number */}

                <View style={styles.containerOfEachTextInput}>
                  {/* Number TextInput */}
                  <TextInput
                    multiline={true}
                    value={charity_number}
                    onChangeText={value => {
                      setcharity_number(value);
                    }}
                    style={styles.textInputStyle}
                    autoCorrect={false}
                    placeholder="رقم القيد"
                    placeholderTextColor={'#a7a7a7'}
                  />

                  {/* Number Icon */}
                  <View style={styles.iconContainerStyle}>
                    <Ionicons name="clipboard" color={loginIcons} size={21} />
                  </View>
                </View>

                {/* Number Validation Text */}
                <Text
                  style={{
                    fontSize: 15,
                    color: errorColor,
                    textAlign: 'center',
                    marginBottom: height * 0.002,
                  }}>
                  {number_error}
                </Text>
              </View>

              {/* Sign Up Button */}
              <View style={styles.containerOfSignUpBtn}>
                <TouchableOpacity
                  style={styles.signUpButton}
                  onPress={() => {
                    Validation_Before_CharitySignUp();
                    // this.props.navigation.navigate('HomePage');
                  }}>
                  <Text style={styles.signUpTextStyle}>إنشاء حساب</Text>
                </TouchableOpacity>
              </View>

              {/* LogIn Option */}
              <View style={styles.contianerOfLogInOption}>
                <Text style={[styles.forgetPassTextStyle, {color: '#a7a7a7'}]}>
                  هل لديك حساب؟
                </Text>

                <TouchableOpacity
                  style={{marginLeft: width * 0.02}}
                  onPress={() => {
                    this.props.navigation.navigate('CharityLogIn');
                  }}>
                  <Text style={styles.forgetPassTextStyle}>
                    أضغط لتسجيل الدخول
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    paddingTop: height * 0.03,
    backgroundColor: bigBackground,
    // backgroundColor:'#f00',
  },
  imgLogoStyle: {
    width: width * 0.17,
    height: height * 0.075,
  },
  tittleContainer: {
    flex: 0.1,
    marginBottom: height * 0.01,
    justifyContent: 'center',
    marginTop: 10,
    // backgroundColor: '#0ff',
  },
  pageTittleStyle: {
    color: logintext,
    fontSize: width * 0.084,
    // fontSize: RFValue(30),
    fontWeight: 'bold',
  },
  containerOfTextInputs: {
    flex: 0.4,
    alignItems: 'center',
    marginTop: height * 0.06,
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
    textAlign: 'right',
    padding: RFValue(7),
    width: width * 0.9,
    height: height * 0.07,
    fontSize: width * 0.049,
    // fontSize: RFValue(17),
    borderRadius: RFValue(35),
    paddingLeft: width * 0.22,
    backgroundColor: textInputcolor,
    // backgroundColor:'#00f',
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
    padding: RFValue(7),
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
  forgetPassTextContianer: {
    flex: 0.1,
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
    // backgroundColor:'#ff0',
    padding: height * 0.01,
  },
  forgetPassTextStyle: {
    color: logintext,
    fontWeight: 'bold',
    fontSize: width * 0.04,
    // fontSize: RFValue(14),
  },
  containerOfSignUpBtn: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    padding: height * 0.03,
    paddingTop: height * 0.01,
    // marginBottom: height * 0.1,
    // backgroundColor: '#f0f',
  },
  signUpButton: {
    elevation: 7,
    borderRadius: RFValue(30),
    width: width * 0.5,
    alignSelf: 'center',
    height: width * 0.14,
    justifyContent: 'center',
    backgroundColor: loginView,
    //   marginTop: height * 0.07,
    //   marginBottom: height * 0.1,
  },
  signUpTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: width * 0.051,
    // fontSize: 20,
    color: '#fff',
  },
  container1OfLogWith: {
    // flex:0.3,
    width: width * 0.8,
    borderTopWidth: 1,
    alignItems: 'center',
    padding: height * 0.01,
    marginTop: height * 0.02,
    borderTopColor: '#a7a7a7',
    // backgroundColor:'#f00',
  },
  container2OfLogWith: {
    width: width * 0.4,
    alignItems: 'center',
    marginTop: height * -0.02,
    paddingHorizontal: width * 0.025,
    backgroundColor: '#E5ECF4',
    // backgroundColor:'#00f',
  },
  containerOfSocialMedeia: {
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.005,
    paddingHorizontal: height * 0.018,
    justifyContent: 'space-around',
    // backgroundColor:'#0f0',
  },
  containerOfEachSocialMediaIcon: {
    width: width * 0.18,
    height: height * 0.07,
    elevation: 5,
    margin: height * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(20),
    backgroundColor: '#E5ECF4',
    // backgroundColor:'#f0f',
  },
  contianerOfLogInOption: {
    alignSelf: 'center',
    alignItems: 'center',
    padding: height * 0.01,
    flexDirection: 'row',
    marginVertical: height * 0.05,
    marginTop: height * -0.01,
    // backgroundColor:'#0ff',
  },
});
