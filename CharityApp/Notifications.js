/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform
} from 'react-native';
import axios from 'axios';
import {
  loginView,
  bigBackground,
  secondaryColor,
} from '../UserApp/Colors';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;


export default class Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications_list: [],
      charity_data: this.props.route.params.charity_data,
      found: true,
      loading: false,

    };
  }



 

  render() {
    return (
      <>

        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        {/* Header  */}
        <View style={styles.headerContainer}>
          {/* Header Arrow  */}
          <TouchableOpacity
            style={styles.headerArrowContainer}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <FontAwesome5 name="chevron-right" size={20} style={{ color: secondaryColor }} />
          </TouchableOpacity>

          {/* Header Tittle  */}
          <View style={styles.headerTittleContainer}>
            <Text style={styles.headerTittleTxtStyle}>الاشعارات</Text>
          </View>
        </View>


        {/* Body */}
        {this.state.found ? (
          // Notifications Founded
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.bodyContainer}>
            <ScrollView>
              {/* Loading Notifications */}
              {this.state.loading ? (
                // Loading 
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <ActivityIndicator
                    size={50}
                    color={'#4e7d91'}
                    style={{ marginTop: height * 0.3 }}
                  />
                </View>
              ) : (
                // Notifications were Recieved  
                <View style={styles.mGP_backendtemsContainer}>
                  {this.state.notifications_list.map((item, index) => (
                    item.show == 1 ? (

                      <View
                        key={index}
                        // style={styles.containerOfEachNotif}
                        style={{
                          backgroundColor: item.status === 'pending' ? '#e3f2f9' : '#FFF', elevation: 2,
                          borderRadius: 15,
                          width: width * 0.95,
                          padding: width * 0.03,
                          alignItems: 'center',
                          flexDirection: 'row',
                          marginVertical: RFValue(9),
                        }}
                      // onPress={() => {
                      //   this.props.navigation.navigate('CharityInfo', {
                      //     charityDetails: item,
                      //   });
                      // }}
                      >
                        {/* Notification Image  */}
                        <Image
                          source={require("../Images/user.png")}
                          style={styles.notifImgContainer}
                          resizeMode="center"
                        />

                        {/* Notification Tittle and Description  */}
                        <View style={styles.notifTittle_DescripContainer}>
                          {/* Tittle  */}
                          <Text style={styles.notifTittleStyle}>
                            {item.user_name}
                          </Text>

                          {/* Description  */}
                          <Text style={styles.notifDescriptionStyle}>
                            {item.join_date}
                          </Text>
                        </View>

                        {/* Left Arrow  */}
                        <TouchableOpacity
                          onPress={() => {
                            this.props.navigation.navigate('NotificationDetails', {
                              notification_details: item,
                            })
                            this.confirm(index)
                          }}
                        >
                          <FontAwesome5
                            name="chevron-left"
                            size={28}
                            style={styles.notifArrowStyle}
                          />
                        </TouchableOpacity>

                      </View>
                    ) : null
                  ))}
                </View>
              )}
            </ScrollView>
          </KeyboardAvoidingView>
        ) : (
          // Notifications Not Founded
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.bodyOfNotFoundNotif}>
            <Image
              source={require('../Images/notFoundNotif.png')}
              resizeMode="contain"
              style={{ width: 300, height: 250, alignSelf: 'center' }}
            />
            <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold' }}>
              ليس لديك إشعارات حتى الان
            </Text>
          </KeyboardAvoidingView>
        )}


      </>
    );
  }
}

const styles = StyleSheet.create({
  // Header Style
  // ------------------------------------------------------------------------
  headerContainer: {
    width: width,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    height: height * 0.09,
    justifyContent: "space-evenly",
    paddingHorizontal: width * 0.03,
    backgroundColor: bigBackground,
    // backgroundColor: "#ff0",
  },
  headerArrowContainer: {
    borderWidth: 1,
    width: width * 0.1,
    alignItems: 'center',
    color: secondaryColor,
    height: height * 0.04,
    justifyContent: 'center',
    borderRadius: RFValue(10),
    borderColor: secondaryColor,
  },
  headerTittleContainer: {
    width: width * 0.8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: width * 0.05,
    // backgroundColor:'#0f0',
  },
  headerTittleTxtStyle: {
    color: "#000",
    fontWeight: "600",
    textAlign: "center",
    fontSize: RFValue(18),
  },

  // Body Style
  // ------------------------------------------------------------------------
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: bigBackground,
    // backgroundColor:'#00f',
  },
  mGP_backendtemsContainer: {
    width: width,
    alignItems: 'center',
    paddingBottom: height * 0.05,
    // backgroundColor:'#0f0',
  },
  // containerOfEachNotif: {

  // },
  notifImgContainer: {
    // borderWidth: 0.5,
    width: width * 0.166,
    height: height * 0.08,
    // width: width*0.21,
    // height: height*0.1,
    // borderRadius: RFValue(50),
    // borderColor: '#B9C9CE',
  },
  notifTittle_DescripContainer: {
    width: width * 0.6,
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
    // backgroundColor: '#0ff',
  },
  notifTittleStyle: {
    color: '#000',
    fontWeight: '500',
    textAlign: 'left',
    fontSize: RFValue(18),
  },
  notifDescriptionStyle: {
    fontWeight: 'bold',
    textAlign: 'left',
    fontSize: RFValue(13),
  },
  notifArrowStyle: {
    color: '#D9D9D9',
    alignSelf: 'center',
    padding: width * 0.02,
    // backgroundColor:'#f0f',
  },
  bodyOfNotFoundNotif: {
    width: width,
    height: height * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bigBackground,
    // backgroundColor: '#E5ECF4',
  },
});


