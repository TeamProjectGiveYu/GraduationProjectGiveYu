/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React ,{Component} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import {
  loginView,
  footerView,
  footerIcons,
  bigBackground,
  secondaryColor,
  footerIconsOff,
} from '../UserApp/Colors';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class CharityOptions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charity_data: this.props.route.params.charity_data,
      categories: [],
      notifications_list: [],
    };
  }



 


  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        {/* Header  */}
        <View style={styles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('InstitutionProfile', {
                charity_data: this.state.charity_data,
              });
            }}>
            <Ionicons name="person" size={30} color={footerIcons} />
          </TouchableOpacity>
          {/* Header Tittle  */}
          <View style={styles.headerTittleContainer}>
            <View style={{ flexDirection: 'column' }}>
              <Text style={styles.headerTittleTxtStyle}>{this.state.charity_data.user_name}</Text>
            </View>
          </View>

          {/* Notifications Icon  */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('Notifications', {
                charity_data: this.state.charity_data
              });

            }}
            style={{ marginTop: -20 }}
          >
            <Ionicons name="notifications" size={30} color={footerIcons} />
            <View style={{ height: 25, width: 25, backgroundColor: '#FFFFFF', borderWidth: .5, borderRadius: 15, justifyContent: 'center', marginTop: -40 }}>
              <Text style={{ fontSize: 15, alignSelf: 'center', fontWeight: 'bold',color:'#000' }}>{this.state.notifications_list.length}</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Body */}
        <ScrollView style={{ flex: 1, backgroundColor: bigBackground }}>
          <View style={styles.bodyContainer}>
            <View>
              {/* Cases Option */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.contianerOfCharityOptions}
                onPress={() => {
                  this.props.navigation.navigate('CharityCasesAdd', {
                    charity_data: this.state.charity_data,
                  });
                }}>
                {/* Cases Option Logo  */}
                <Image
                  source={require('../Images/cases.png')}
                  resizeMode="center"
                  style={styles.optionLogoStyle}
                />

                {/* Cases Option Text  */}
                <View>
                  <Text
                    style={[
                      styles.styleOfOptionTxt,
                      { marginTop: height * 0.015 },
                    ]}>
                    الحالات
                  </Text>
                </View>
              </TouchableOpacity>

              {/* Donation Categories Option */}
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.contianerOfCharityOptions}
                onPress={() => {
                  // this.props.navigation.navigate('AddCategories');
                  this.props.navigation.navigate('Categories',
                    {
                      charity_data: this.state.charity_data,
                    }
                  );
                }}>
                {/* Donation Categories Option Logo  */}
                <Image
                  source={require('../Images/type_donate.png')}
                  resizeMode="center"
                  style={styles.optionLogoStyle}
                />

                {/* Donation Categories Option Text  */}
                <View>
                  <Text style={styles.styleOfOptionTxt}>فئات التبرع</Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.contianerOfCharityOptions}
                onPress={() => {
                  this.props.navigation.navigate(
                    'CharityDetails',
                    {
                      charity_data: this.state.charity_data,
                    }
                  );
                }}>
                {/* Donation Categories Option Logo  */}
                <Image
                  source={require('../Images/detail.jpg')}
                  resizeMode="center"
                  style={styles.optionLogoStyle}
                />

                {/* Donation Categories Option Text  */}
                <View>
                  <Text style={styles.styleOfOptionTxt}>تفاصيل المؤسسه</Text>
                </View>
              </TouchableOpacity>


            </View>
          </View>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  // Header Style
  // ------------------------------------------------------------------------
  headerContainer: {
    width: width,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: height * 0.11,
    justifyContent: 'space-around',
    // paddingHorizontal: width * 0.03,
    // paddingLeft: width * 0.2,
    backgroundColor: bigBackground,
    // backgroundColor: "#f0f",
  },
  headerTittleContainer: {
    width: width * 0.5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    // paddingLeft: width * 0.08,
    // backgroundColor:'#0ff',
  },
  headerTittleTxtStyle: {
    color: '#1D1D1D',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RFValue(18),
    // marginLeft:width *0.12,
  },

  // Body Style
  // ------------------------------------------------------------------------
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: bigBackground,
    // backgroundColor:'#0f0',
  },
  contianerOfCharityOptions: {
    elevation: 10,
    borderRadius: 15,
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.52,
    height: height * 0.2,
    marginLeft: RFValue(15),
    marginTop: height * 0.02,
    // backgroundColor:'#ffffff',
    marginBottom: height * 0.05,
    paddingHorizontal: height * 0.02,
    shadowOffset: { width: 0, height: 7 },
    backgroundColor: '#ffffff',
  },
  styleOfOptionTxt: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RFValue(14),
  },
  optionLogoStyle: {
    width: width * 0.3,
    height: height * 0.13,
    alignSelf: 'center',
  },

});
