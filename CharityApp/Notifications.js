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
      notifications_list: [
        {
          notif_id: 0,
          notif_name: 'طلب ارسال مندوب',
          notif_img: require('../Images/userIcon.jpg'),
          // notif_img: require('../Images/boy1.png'),
        },
        {
          notif_id: 1,
          notif_name: 'طلب ارسال مندوب',
          notif_img: require('../Images/userIcon.jpg'),

        },
        {
          notif_id: 2,
          notif_name: 'طلب ارسال مندوب',
          notif_img: require('../Images/userIcon.jpg'),

        },
        {
          notif_id: 3,
          notif_name: 'طلب ارسال مندوب',
          notif_img: require('../Images/userIcon.jpg'),

        },
        {
          notif_id: 4,
          notif_name: 'طلب ارسال مندوب',
          notif_img: require('../Images/userIcon.jpg'),

        },
        {
          notif_id: 5,
          notif_name: 'طلب ارسال مندوب',
          notif_img: require('../Images/userIcon.jpg'),

        },
        {
          notif_id: 6,
          notif_name: 'طلب ارسال مندوب',
          notif_img: require('../Images/userIcon.jpg'),

        },
        {
          notif_id: 7,
          notif_name: 'طلب ارسال مندوب',
          notif_img: require('../Images/userIcon.jpg'),

        },
      ],

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
                <View style={styles.mapItemsContainer}>
                  {this.state.notifications_list.map((item, index) => (

                    <View
                      key={index}
                      style={styles.containerOfEachNotif}
                    // onPress={() => {
                    //   this.props.navigation.navigate('CharityInfo', {
                    //     charityDetails: item,
                    //   });
                    // }}
                    >
                      {/* Notification Image  */}
                      <Image
                        source={item.notif_img}
                        style={styles.notifImgContainer}
                        resizeMode="center"
                      />

                      {/* Notification Tittle and Description  */}
                      <View style={styles.notifTittle_DescripContainer}>
                        {/* Tittle  */}
                        <Text style={styles.notifTittleStyle}>
                          {item.notif_name}
                        </Text>

                        {/* Description  */}
                        <Text style={styles.notifDescriptionStyle}>
                          {item.notif_name}
                        </Text>
                      </View>

                      {/* Left Arrow  */}
                      <TouchableOpacity
                      onPress={() => {
                          this.props.navigation.navigate('NotificationDetails')
                        }}
                      >
                        <FontAwesome5
                          name="chevron-left"
                          size={28}
                          style={styles.notifArrowStyle}
                        />
                      </TouchableOpacity>

                    </View>
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
  mapItemsContainer: {
    width: width,
    alignItems: 'center',
    paddingBottom: height * 0.05,
    // backgroundColor:'#0f0',
  },
  containerOfEachNotif: {
    elevation: 2,
    borderRadius: 15,
    width: width * 0.95,
    padding: width * 0.03,
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: RFValue(9),
    backgroundColor: '#ffffff',
  },
  notifImgContainer: {
    borderWidth: 0.5,
    width: width * 0.166,
    height: height * 0.08,
    // width: width*0.21,
    // height: height*0.1,
    borderRadius: RFValue(50),
    borderColor: '#B9C9CE',
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
    color: '#333',
    fontWeight: '200',
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


