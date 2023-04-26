/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  buttons,
  Linking,
} from 'react-native';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  bigBackground,
  logintext,
  errorColor, secondaryColor
} from './Colors';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class CharityInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo: false,
      charityDetails: this.props.route.params.charityDetails,
    };
  }

  //Functions:

  // CasesOfCategory(cases) {
  //   this.props.navigation.navigate('Cases', {
  //     CasesOfCurrentCategory: cases,
  //   });
  // }
  openFacebook = () => {
    Linking.openURL(
      'https://www.facebook.com/' + this.state.charityDetails.facebook_link,
    );
  };
  openInstagram = () => {
    Linking.openURL(
      'https://www.instagram.com/' + this.state.charityDetails.instagram_link,
    );
  };
  openWhatsApp = () => {
    Linking.openURL(
      'https://wa.me/<' + this.state.charityDetails.charity_phone + '>',
    );
  };

  render() {
    return (
      <>
        <ScrollView>
          <View
            style={{
              width: '100%',
              height: height * 0.13,
              // backgroundColor: '#DADADA',
              justifyContent: 'center',
              backgroundColor: "#fff"
            }}
          >

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
                marginHorizontal: width * 0.03,
                borderWidth: 1,
                borderColor: secondaryColor,
                marginLeft: RFValue(15),
                color: secondaryColor,
                marginTop: RFValue(-25)
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
          <View style={{ backgroundColor: bigBackground }}>
            <View
              style={{
                alignItems: 'center',
                marginTop: '-20%',
              }}>
              <Image
                style={{
                  width: width * 0.4,
                  height: height * 0.18,
                }}
                source={{
                  uri: this.state.charityDetails.charity_logo,
                }}
              />
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: 'bold',
                  marginTop: 10,
                  color: '#000',
                }}>
                {this.state.charityDetails.charity_name}
              </Text>

              {/* content */}
              <View>
                <View style={[styles.charityAccountsContainer]}>
                  {/* whatsApp Logo */}
                  <TouchableOpacity
                    onPress={() => {
                      this.openWhatsApp();
                    }}>
                    <Image
                      resizeMode="center"
                      source={require('../Images/whatsapp.png')}
                      style={{
                        width: width * 0.1,
                        height: height * 0.05,
                        borderRadius: 20,
                      }}
                    />
                  </TouchableOpacity>

                  {/* Instagram Logo */}
                  <TouchableOpacity
                    onPress={() => {
                      this.openInstagram();
                    }}>
                    <Image
                      resizeMode="center"
                      source={require('../Images/instagramLogo.png')}
                      style={{
                        width: width * 0.1,
                        height: height * 0.05,
                        borderRadius: 20,
                      }}
                    />
                  </TouchableOpacity>

                  {/* Facebook Logo */}
                  <TouchableOpacity
                    onPress={() => {
                      this.openFacebook();
                    }}>
                    <Image
                      resizeMode="center"
                      source={require('../Images/facebook.png')}
                      style={{
                        width: width * 0.1,
                        height: height * 0.05,
                        borderRadius: 20,
                      }}
                    />
                  </TouchableOpacity>
                </View>
                {/* data */}
                <View style={{ justifyContent: 'center', width: width * 0.95 }}>
                  <Text style={{ marginLeft: '3%', fontSize: 18, color: logintext, fontWeight: 'bold' }}>العنوان</Text>
                  <Text
                    style={{
                      fontSize: 17,
                      color: '#000',
                      marginVertical: '3%',
                      textAlign: 'justify',
                      marginLeft: "7%"
                    }}>
                    {this.state.charityDetails.charity_address}
                  </Text>
                  <Text style={{ marginLeft: '3%', fontSize: 18, color: logintext, fontWeight: 'bold' }}>
                    رقم التليفون
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      color: '#000',
                      marginVertical: '3%',
                      textAlign: 'justify',
                      marginLeft: "7%"
                    }}>
                    {this.state.charityDetails.charity_phone}
                  </Text>
                  <Text
                    style={{
                      marginLeft: '3%',
                      fontSize: 18,
                      color: logintext, fontWeight: 'bold'
                    }}>
                    نبذة عن المؤسسة
                  </Text>
                  <Text
                    style={{
                      fontSize: 17,
                      color: '#000',
                      marginVertical: '3%',
                      textAlign: 'justify',
                      width: width * 0.9,
                      marginLeft: "3%"
                    }}>
                    {this.state.charityDetails.charity_info}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('CharityInfo_Categories', {
              charityDetails: this.state.charityDetails,
            });
          }}
          style={{
            backgroundColor: '#F78254',
            width: RFValue(60),
            height: RFValue(60),
            borderRadius: 35,
            elevation: 5,
            marginBottom: 10,
            justifyContent: 'center',
            marginLeft: RFValue(270),
            marginTop: RFValue(620),
            position: 'absolute',
          }}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '600',
            }}>
            تبرع
          </Text>
        </TouchableOpacity>
      </>
    );
  }
}
const styles = {
  charityAccountsContainer: {
    width: width * 0.55,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.012,
    marginLeft: '18%',
    // backgroundColor: "#0ff"
  },
};
