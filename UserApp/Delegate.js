/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class Delegate extends React.Component {
  constructor() {
    super();
    this.state = {
      UserName: '',
      UserEmail: '',
      UserPhone: '',
      UserAddress: '',
      username_err: '',
      email_err: '',
      phone_err: '',
      address_err: '',
    };
  }

  Validation_Before_Send() {
    let errors = 0;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/; // asdsadsad@sadjkjshd.skldjlskjd

    //UserNmae Conditions
    if (this.state.UserName.trim() == '') {
      this.setState({ username_err: 'الرجاء إدخال إسم المستخدم' });
      errors++;
    }

    // Email Conditions
    if (this.state.UserEmail.trim() == '') {
      this.setState({ email_err: 'الرجاء إدخال البريد الإلكتروني' });
      errors++;
    } else if (reg.test(this.state.user_email.trim()) == false) {
      this.setState({ email_err: 'تأكد من إدخال البريد الإلكتروني بشكل صحيح!' });
      errors++;
    } else {
      this.setState({ email_err: '' });
    }

    //Phone Number Conditions
    if (this.state.UserPhone.trim() == '') {
      this.setState({ phone_err: 'الرجاء إدخال رقم الهاتف' });
      errors++;
    } else if (this.state.user_phone.trim().length != 11) {
      this.setState({ phone_err: 'الرجاء التأكد من صحة الرقم المدخل' });
      errors++;
    } else {
      this.setState({ phone_err: '' });
    }

    //Address Conditions
    if (this.state.UserAddress.trim() == '') {
      this.setState({ address_err: 'الرجاء إدخال العنوان' });
      errors++;
    } else {
      this.setState({ address_err: '' });
    }

    if (errors == 0) {
      //   this.props.navigation.navigate('LogIn');
      this.props.navigation.navigate(
        'MyAccount',
        // {
        // UserName: this.state.user_name,
        // UserEmail: this.state.user_email,
        // UserPhone: this.state.user_phone,
        // UserAddress: this.state.user_address,
        // }
      );
    }
  }
  render() {
    return (
      <>
        <StatusBar backgroundColor="#4e7d91" />
        <View
          style={{
            flex: 0.3,
            backgroundColor: '#4e7d91',
          }}>
          <View
            style={{
              // flex: 0.1,
              //   backgroundColor: '#f0f',
              flexDirection: 'row-reverse',
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{
                // backgroundColor: '#fff',
                alignItems: 'center',
                width: width * 0.2,
                justifyContent: 'center',
              }}>
              <Icon
                name="chevron-left"
                size={30}
                style={{
                  color: '#E5ECF4',
                  marginTop: height * 0.05,
                }}
              />
            </TouchableOpacity>
            <View style={{ alignSelf: 'center' }}>
              <Text
                style={{
                  marginRight: width * 0.2,
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: '#E5ECF4',
                  marginTop: height * 0.04,
                }}>
                التبرع{' '}
              </Text>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 0.77,
            backgroundColor: '#E5ECF4',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            marginTop: height * -0.15,
          }}>
          <ScrollView>
            {/* bottum type of donate */}
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                //   textAlign: 'center',
                margin: 20,
                fontWeight: 'bold',
              }}>
              يرجى ادخال البيانات التاليه ليتم التواصل معك لارسال مندوب
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: '#4e7d91',
                //   textAlign: 'center',
                marginTop: 10,
                marginLeft: 10,

                fontWeight: 'bold',
              }}>
              الاسم الثلاثي
            </Text>
            <TextInput
              value={this.state.UserName}
              onChangeText={value => {
                this.setState({ UserName: value });
              }}
              style={{
                width: width * 0.9,
                borderBottomWidth: 1,
                borderBottomColor: '#4e7d91',
                alignSelf: 'center',
                padding: 10,
                color: '#4e7d91',
                fontSize: 17,
                marginBottom: 15,
              }}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#FC854B',
                textAlign: 'center',
                marginBottom: height * 0.01,
              }}>
              {this.state.username_err}
            </Text>

            <Text
              style={{
                fontSize: 22,
                color: '#4e7d91',
                //   textAlign: 'center',
                marginTop: 10,
                marginLeft: 10,

                fontWeight: 'bold',
              }}>
              رقم الهاتف
            </Text>
            <TextInput
              value={this.state.UserPhone}
              onChangeText={value => {
                this.setState({ UserPhone: value });
              }}
              style={{
                width: width * 0.9,
                borderBottomWidth: 1,
                borderBottomColor: '#4e7d91',
                alignSelf: 'center',
                padding: 10,
                color: '#4e7d91',
                fontSize: 17,
                marginBottom: 15,
              }}
              keyboardType="number-pad"
            />
            <Text
              style={{
                fontSize: 15,
                color: '#FC854B',
                textAlign: 'center',
                marginBottom: height * 0.01,
              }}>
              {this.state.phone_err}
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: '#4e7d91',
                //   textAlign: 'center',
                marginTop: 10,
                marginLeft: 10,

                fontWeight: 'bold',
              }}>
              البريد الالكتروني
            </Text>
            <TextInput
              value={this.state.UserEmail}
              onChangeText={value => {
                this.setState({ UserEmail: value });
              }}
              style={{
                width: width * 0.9,
                borderBottomWidth: 1,
                borderBottomColor: '#4e7d91',
                alignSelf: 'center',
                padding: 10,
                color: '#4e7d91',
                fontSize: 17,
                marginBottom: 15,
              }}
              keyboardType="email-address"
            />
            <Text
              style={{
                fontSize: 15,
                color: '#FC854B',
                textAlign: 'center',
                marginBottom: height * 0.01,
              }}>
              {this.state.email_err}
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: '#4e7d91',
                //   textAlign: 'center',
                marginTop: 10,
                marginLeft: 10,

                fontWeight: 'bold',
              }}>
              العنوان
            </Text>
            <TextInput
              multiline={true}
              value={this.state.UserAddress}
              onChangeText={value => {
                this.setState({ UserAddress: value });
              }}
              style={{
                width: width * 0.9,
                borderBottomWidth: 1,
                borderBottomColor: '#4e7d91',
                alignSelf: 'center',
                padding: 10,
                color: '#4e7d91',
                fontSize: 17,
                marginBottom: 15,
              }}
            />
            <Text
              style={{
                fontSize: 15,
                color: '#FC854B',
                textAlign: 'center',
                marginBottom: height * 0.01,
              }}>
              {this.state.address_err}
            </Text>
            <TouchableOpacity
              onPress={() => {
                this.Validation_Before_Send();
              }}
              style={{
                alignSelf: 'center',
                width: width * 0.5,
                backgroundColor: '#FC854B',
                height: height * 0.08,
                marginBottom: 20,
                borderRadius: 20,
                marginTop: height * 0.07,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                ارسال
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* </View> */}

        <View
          style={{
            flex: 0.1,
            backgroundColor: '#E5ECF4',
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            elevation: 15,
            shadowRadius: 9.51,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 7 },
            shadowOpacity: 0.43,

            // shadowRadius: 7,
            // shadowOpacity: 2.0,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomePage');
            }}
            style={{
              // backgroundColor: '#fff',
              alignItems: 'center',
              width: width * 0.15,
              height: height * 0.1,
              justifyContent: 'center',
              marginRight: width * 0.05,
            }}>
            <Icon
              name="home"
              size={30}
              style={{
                color: '#A2C6DC',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('DonateInstitutions');
            }}
            style={{
              // backgroundColor: '#fff',
              alignItems: 'center',
              width: width * 0.15,
              height: height * 0.1,
              justifyContent: 'center',
              marginRight: width * 0.1,
            }}>
            <Icon
              name="coins"
              size={30}
              style={{
                color: '#A2C6DC',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('FavoriteCases');
            }}
            style={{
              // backgroundColor: '#fff',
              alignItems: 'center',
              width: width * 0.15,
              height: height * 0.1,
              justifyContent: 'center',
              marginRight: width * 0.1,
            }}>
            <Icon
              name="heart"
              size={30}
              style={{
                color: '#A2C6DC',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('MyAccount');
            }}
            style={{
              // backgroundColor: '#fff',
              alignItems: 'center',
              width: width * 0.15,
              height: height * 0.1,
              justifyContent: 'center',
              marginRight: width * 0.1,
            }}>
            <Icon
              name="user"
              size={30}
              style={{
                color: '#A2C6DC',
              }}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Delegate;
