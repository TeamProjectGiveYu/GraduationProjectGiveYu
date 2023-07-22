/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
// import React from 'react';
import React, { Component } from 'react';
// import SearchBar from 'react-native-dynamic-search-bar';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  ActivityIndicator,
  I18nManager,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios';
// import NetInfo from '@react-native-community/netinfo';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {
  bigBackground,
  footerIcons,
  footerIconsOff,
  footerView,
  loginView,
  secondaryColor,
} from './Colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class WaitingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charity_list: [],

      // casesList: this.props.route.params.casesList,
      numOfItems: 0,
      found: true,
      loading: true,
      network: false,
    };
  }
  

  
  render() {
    return (
      <>
        {/* {this.state.network ? (
          <> */}
        {/* Header */}
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        {/* Header  */}
        <View style={styles.headerContainer}>
          {/* Header Tittle  */}

          <TouchableOpacity
            style={styles.headerArrowContainer}
            onPress={() => {
              this.props.navigation.goBack();
            }}>
            <FontAwesome5
              name="chevron-right"
              size={20}
              style={{ color: secondaryColor }}
            />
          </TouchableOpacity>

          <View style={styles.headerTittleContainer}>
            {/* <View style={{ flexDirection: 'row' }}> */}
            <Text style={styles.headerTittleTxtStyle}> قائمة الانتظار</Text>
            {/* </View> */}
          </View>
        </View>

        {/* Body */}
        {this.state.found ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
              flex: 1,
              backgroundColor: bigBackground,
            }}>
            {this.state.charity_list.length != 0 ? (
              <>
                <ScrollView>
                  <View>
                    {this.state.charity_list.map((item, index) =>
                      item.charity_show == 1 ? (
                        <View
                          key={index}
                          style={{
                            backgroundColor: '#ffffff',
                            marginVertical: 5,
                            borderRadius: 15,
                            width: '95%',
                            alignSelf: 'center',
                            elevation: 3,
                          }}>

                          <TouchableOpacity
                            style={{
                              height: height * 0.13,
                              flexDirection: 'row',
                              justifyContent: 'flex-start',
                              paddingHorizontal:width*0.07,
                            }}
                            key={index}
                            onPress={() => {
                              this.props.navigation.navigate(
                                'WaitingDetails',
                                { details: item },
                              );
                            }}>
                            <Image
                              source={{ uri: item.user_photo }}
                              style={{
                                width: '30%',
                                height: '75%',
                                // borderRadius: 15,
                                alignSelf: 'center',
                                // borderWidth: 0.5,
                                borderColor: '#B9C9CE',
                                // marginLeft: '4%',
                              }}
                              resizeMode="center"
                            />

                            <Text
                            key={index}
                              style={{
                                fontSize: 18,
                                fontWeight: '600',
                                color: '#1D1D1D',
                                alignSelf: 'center',
                                marginLeft:15
                              }}>
                              {item.user_name}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null,
                    )}
                  </View>
                  {/* )} */}
                </ScrollView>
              </>
            ) : (
              <>
                <View>
                  <Text
                    style={{
                      color: '#aaa',
                      textAlign: 'center',
                      // justifyContent: 'center',
                      marginTop: RFValue(250),
                      fontSize: 18,
                      fontWeight: 'bold',
                    }}>
                    لا توجد مؤسسسات في قائمة الانتظار
                  </Text>
                </View>
                {/* <View> */}
              </>
            )}
          </KeyboardAvoidingView>
        ) : (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{
              height: '82%',
              width: '100%',
              backgroundColor: '#fff',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
            }}>
            <Image
              source={require('../Images/notFoundCases.png')}
              resizeMode="contain"
              style={{ width: 300, height: 250, alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>
              لا ا توجد مؤسسسات في قائمة الانتظار
            </Text>
          </KeyboardAvoidingView>
        )}
      </>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    width: width,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: height * 0.09,
    justifyContent: 'space-around',
    // paddingHorizontal: width * 0.03,
    // paddingLeft: width * 0.2,
    backgroundColor: bigBackground,
    // backgroundColor: "#f0f",
  },
  headerArrowContainer: {
    borderWidth: 1,
    width: width * 0.1,
    alignItems: 'center',
    color: loginView,
    height: height * 0.04,
    justifyContent: 'center',
    borderRadius: RFValue(10),
    borderColor: loginView,
    marginRight: width * 0.07,
  },
  headerTittleContainer: {
    width: width * 0.6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: width * 0.02,
    // paddingLeft: width * 0.08,
    // backgroundColor:'#0ff',
  },
  headerTittleTxtStyle: {
    color: '#1D1D1D',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RFValue(18),
    // marginRight: width * 0.28,
    flexDirection: 'row',
  },
  addCaseBtn: {
    bottom: 0,
    elevation: 5,
    right: RFValue(15),
    shadowRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.3,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: height * 0.05,
    padding: width * 0.009,
    borderRadius: width * 0.5,
    justifyContent: 'center',
    marginBottom: height * 0.03,
    backgroundColor: footerIcons,
    shadowOffset: { width: 0, height: 7 },
  },
});
