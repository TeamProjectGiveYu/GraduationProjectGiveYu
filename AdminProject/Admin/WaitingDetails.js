/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
// import React, { useState, useEffect } from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Linking,
  alert,
} from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
const width = Dimensions.get('screen').width;
import axios from 'axios';
const height = Dimensions.get('screen').height;
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {
  smallBackground,
  searchIcon,
  categories,
  Footer,
  clickedIconFooter,
  unclickedIconFooter,
  secondaryColor,
  loginView,
  logintext,
  loginIcons,
  textInputcolor,
  iconContainer,
  eyeColor,
  textinTextinput,
  errorColor,
  footerView,
  footerIcons,
  bigBackground,
  headerColor,
} from './Colors';
class WaitingDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedstate: false,
      details: this.props.route.params.details,
    };
  }
 


 


componentDidMount() {
  console.log(this.state.details.charity_identification)
}
render() {
  return (
    <>
      <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
      <View
        style={{
          height: height * .09,
          backgroundColor: bigBackground,
          // backgroundColor: "#ff0",
        }}>
        <View
          style={{
            flexDirection: 'row-reverse',
            marginTop: RFValue(20),
            // justifyContent: 'space-between',
          }}>
          <View
            style={{
              alignSelf: 'center',
              alignContent: 'center',
              justifyContent: 'space-around',
              width: width * 0.85,
            }}>
            <Text
              style={{
                marginRight: width * 0.1,
                fontSize: 18,
                fontWeight: 'bold',
                color: headerColor,
                // marginTop: height * -0.01,
                textAlign: 'center',
                // justifyContent: 'space-around',
              }}>
              {this.state.details.user_name}
            </Text>
          </View>

          {/* icon back arrow  */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{
              // backgroundColor: '#f0f',
              alignItems: 'center',
              width: width * 0.1,
              height: height * 0.04,
              borderRadius: RFValue(10),
              // marginHorizontal: width * 0.03,
              borderWidth: 1,
              borderColor: secondaryColor,
              // marginLeft: RFValue(15),
              color: secondaryColor,
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
        </View>
      </View>
      {/* Body */}
      <View
        style={{
          backgroundColor: bigBackground,
          flex: 1,
          // borderTopLeftRadius: 40,
          // borderTopRightRadius: 40,
          // marginTop: height * -0.15,
        }}>
        <ScrollView>
          <View style={{
            width: width * 0.46,
            height: height * 0.2, alignSelf: 'center', backgroundColor: '#FFFFFF', justifyContent: 'center', borderRadius: 80, borderWidth: 0.7,
            borderColor: '#aaa'
          }}>
            <Image
              source={{ uri: this.state.details.user_photo }}
              resizeMode='center'
              style={{
                width: width * 0.31,
                height: height * 0.2,
                // borderRadius: 80,
                // borderWidth: 0.5,
                // borderColor: '#aaa',
                alignSelf: 'center',
              }}
            />
          </View>
          <Text
            style={{
              color: logintext,
              fontSize: 20,
              marginLeft: width * 0.03,
              marginTop: height * 0.02,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
            }}>
            الرقم التعريفى :
            <Text
              style={{
                marginLeft: width * 0.03,
                marginTop: height * 0.01,
                fontSize: 18,
                width: '95%',
                color: '#1D1D1D',
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: '600',
              }}>
              {this.state.details.charity_identification}
            </Text>
          </Text>

          <Text
            style={{
              color: logintext,
              fontSize: 20,
              marginLeft: width * 0.03,
              marginTop: height * 0.03,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
            }}>
            العنوان:
            <Text
              style={{
                fontSize: 18,
                color: '#1D1D1D',
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: '600',
              }}>
              {this.state.details.charity_address}
            </Text>
          </Text>
          <Text
            style={{
              color: logintext,
              fontSize: 20,
              marginLeft: width * 0.03,
              marginTop: height * 0.03,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
            }}>
            رقم الهاتف :
            <Text
              style={{
                fontSize: 18,
                color: '#1D1D1D',
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: '600',
              }}>
              {this.state.details.user_phone}
            </Text>
          </Text>
          <Text
            style={{
              color: logintext,
              fontSize: 20,
              marginLeft: width * 0.03,
              marginTop: height * 0.03,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
            }}>
            الايميل :
            <Text
              style={{
                fontSize: 18,
                color: '#000',
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: '600',
              }}>
              {this.state.details.user_email}
            </Text>
          </Text>

          <Text
            style={{
              color: logintext,
              fontSize: 20,
              marginLeft: width * 0.03,
              marginTop: height * 0.03,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
              // marginBottom: 20,
            }}>
            لينك الانستجرام :
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#1D1D1D',
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}
            onPress={() =>
              Linking.openURL(this.state.details.instagram_link)
            }>
            {this.state.details.instagram_link}
          </Text>
          <Text
            style={{
              color: logintext,
              fontSize: 20,
              marginLeft: width * 0.03,
              marginTop: height * 0.03,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
              // marginBottom: 20,
            }}>
            لينك الفيس بوك :
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: '#1D1D1D',
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: '600',
              textDecorationLine: 'underline',
            }}
            onPress={() =>
              Linking.openURL(this.state.details.facebook_link)
            }>
            {this.state.details.facebook_link}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              // backgroundColor: '#ff0',
              justifyContent: 'center',
              marginTop: width * 0.18,
              marginBottom: width * 0.09,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.confirm();
              }}
              style={{
                backgroundColor: '#37c05cd4',
                width: width * 0.28,
                height: height * 0.07,
                justifyContent: 'center',
                borderRadius: 20,
              }}>
              <Text
                style={{ textAlign: 'center', fontSize: 18, color: '#fff' }}>
                موافقه
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.reject();
              }}
              style={{
                backgroundColor: '#c03737d4',
                width: width * 0.28,
                height: height * 0.07,
                justifyContent: 'center',
                marginLeft: width * 0.15,
                borderRadius: 20,
              }}>
              <Text
                style={{ textAlign: 'center', fontSize: 18, color: '#fff' }}>
                رفض
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  );
}
}

export default WaitingDetails;
