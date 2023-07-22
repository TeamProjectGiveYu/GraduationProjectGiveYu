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
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  smallBackground,
  bigBackground,
  searchIcon,
  categories,
  Footer,
  clickedIconFooter,
  unclickedIconFooter,
  secondaryColor,
  headerColor,
  loginView,
  logintext,
  loginIcons,
  textInputcolor,
  iconContainer,
  eyeColor,
  textinTextinput,
  errorColor,
} from '../UserApp/Colors';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class NotificationDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charity_data: this.props.route.params.charity_data,
      notification_details: this.props.route.params.notification_details,
    };
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            height: height * 0.09,
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{
              alignItems: 'center',
              width: width * 0.1,
              height: height * 0.04,
              borderRadius: RFValue(10),
              marginHorizontal: width * 0.03,
              borderWidth: 1,
              borderColor: secondaryColor,
              marginLeft: RFValue(15),
              color: secondaryColor,
              marginTop: RFValue(5),
            }}>
            <Icon
              name="chevron-right"
              size={20}
              style={{
                color: secondaryColor,
                marginTop: height * 0.007,
              }}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: RFValue(145),
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '600',
                textAlign: 'center',
                color: '#000',
              }}>
              إشعار
            </Text>
          </View>
        </View>
        {/* Body */}

        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
          }}>
          <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
              <Text
                style={{
                  fontSize: 20,
                  color: loginView,
                  //   textAlign: 'center',
                  marginTop: RFValue(20),
                  marginLeft: RFValue(20),

                  fontWeight: 'bold',
                }}>
                الاسم الثلاثي
              </Text>
              <Text
                style={{
                  width: width * 0.9,
                  borderBottomWidth: 2,
                  borderBottomColor: loginView,
                  alignSelf: 'center',
                  color: '#000',
                  fontSize: 19,
                  marginBottom: RFValue(20),
                  paddingBottom: 10,
                  // paddingLeft: 10,
                  // paddingRight: 10,
                  paddingTop: 10,
                }}>
                {this.state.notification_details.user_name}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: loginView,
                  //   textAlign: 'center',
                  marginTop: RFValue(20),
                  marginLeft: RFValue(20),

                  fontWeight: 'bold',
                }}>
                البريد الالكتروني
              </Text>
              <Text
                style={{
                  width: width * 0.9,
                  borderBottomWidth: 2,
                  borderBottomColor: loginView,
                  alignSelf: 'center',
                  color: '#000',
                  fontSize: 19,
                  marginBottom: RFValue(20),
                  paddingBottom: 10,
                  // paddingLeft: 10,
                  // paddingRight: 10,
                  paddingTop: 10,
                  textAlign: 'left',
                }}>
                {this.state.notification_details.user_email}
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  color: loginView,
                  //   textAlign: 'center',
                  marginTop: RFValue(20),
                  marginLeft: RFValue(20),

                  fontWeight: 'bold',
                }}>
                رقم الهاتف
              </Text>
              <Text
                style={{
                  width: width * 0.9,
                  borderBottomWidth: 2,
                  borderBottomColor: loginView,
                  alignSelf: 'center',
                  color: '#000',
                  fontSize: 19,
                  marginBottom: RFValue(20),
                  paddingBottom: 10,
                  // paddingLeft: 10,
                  // paddingRight: 10,
                  paddingTop: 10,
                  textAlign: 'left',
                }}>
                {this.state.notification_details.user_phone}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: loginView,
                  //   textAlign: 'center',
                  marginTop: RFValue(20),
                  marginLeft: RFValue(20),

                  fontWeight: 'bold',
                }}>
                العنوان
              </Text>
              <Text
                style={{
                  width: width * 0.9,
                  borderBottomWidth: 2,
                  borderBottomColor: loginView,
                  alignSelf: 'center',
                  color: '#000',
                  fontSize: 19,
                  marginBottom: RFValue(20),
                  paddingBottom: 10,
                  // paddingLeft: 10,
                  // paddingRight: 10,
                  paddingTop: 10,
                }}>
                {this.state.notification_details.user_address}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: loginView,
                  //   textAlign: 'center',
                  marginTop: RFValue(20),
                  marginLeft: RFValue(20),

                  fontWeight: 'bold',
                }}>
                المطلوب
              </Text>
              <Text
                style={{
                  width: width * 0.9,
                  borderBottomWidth: 2,
                  borderBottomColor: loginView,
                  alignSelf: 'center',
                  color: '#000',
                  fontSize: 19,
                  marginBottom: RFValue(20),
                  paddingBottom: 10,
                  // paddingLeft: 10,
                  // paddingRight: 10,
                  paddingTop: 10,
                  textAlign: 'left',
                }}>
                {this.state.notification_details.user_Donation}
              </Text>
              {/* <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('CharityCaseDetails');
                }}
                style={{
                  backgroundColor: '#4e7d91',
                  width: RFValue(140),
                  height: RFValue(50),
                  borderRadius: 20,
                  elevation: 5,
                  marginBottom: 18,
                  justifyContent: 'center',

                  alignSelf: 'center',
                }}>
                <Text
                  style={{
                    color: '#fff',
                    textAlign: 'center',
                    fontSize: 20,
                    fontWeight: '600',
                  }}>
                  موافقه
                </Text>
              </TouchableOpacity> */}
            </View>
          </ScrollView>
        </View>
      </>
    );
  }
}

export default NotificationDetails;
