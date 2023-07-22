/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
// import React from 'react';
import React from 'react';
import SearchBar from 'react-native-dynamic-search-bar';
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
// import axios from 'axios';
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
  textInputcolor,
} from '../UserApp/Colors';
import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class NewCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      category_list: [],
      // casesList: this.props.route.params.casesList,
      numOfItems: 0,
      found: true,
      loading: true,
      network: false,
      charity_data: this.props.route.params.charity_data,
    };
  }
  componentDidMount() {
    this.net()
  }
  net() {
    NetInfo.addEventListener(state => {
      if (state.isConnected) {
        this.setState({ network: true, loading: true });
        if (this.state.category_list.length == 0) {
          this.getdata();
        }
      } else {
        this.setState({ network: false, loading: false });
      }
    });
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
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.headerTittleTxtStyle}> اضافة فئه
              </Text>

            </View>
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
            {this.state.category_list.length != 0 ? (
              <>
                <ScrollView>



                  <View>
                    {this.state.category_list.map((item, index) =>

                      item.category_show == 1 ? (
                        <View
                          key={index}
                          style={{
                            backgroundColor: '#ffffff',
                            marginVertical: 10,
                            borderRadius: 15,
                            width: '95%',
                            alignSelf: 'center',
                            elevation: 2,
                          }}>
                          <View
                            style={{
                              height: height * 0.10,
                              // width: '70%',
                              flexDirection: 'row',

                            }}>

                            {/* <TouchableOpacity
                              style={{
                                height: height * 0.13,
                                width: '70%',
                                flexDirection: 'row',
                           
                              }}
                              > */}

                            <View
                              style={{
                                alignSelf: 'center',
                                marginLeft: '5%',
                                width: '70%',
                                // backgroundColor: '#070',
                                flexDirection: "row",
                                alignItems: "center",

                              }}>

                              {/* Case Image  */}
                              <Image
                                source={{ uri: item.category_logo }}
                                style={styles.categoryImgContainer}
                                resizeMode="center"
                              />


                              {/* Category name */}
                              <Text
                                style={{
                                  color: '#1D1D1D',
                                  textAlign: 'center',
                                  fontWeight: 'bold',
                                  // marginHorizontal: 60,
                                  fontSize: 18,
                                }}>
                                {item.category_name}
                              </Text>
                            </View>


                            {/*   </TouchableOpacity> */}

                            {/* plus ICON */}

                            <TouchableOpacity
                              style={styles.addCategoryBtn}
                              onPress={() => {
                                this.addCategory(index)
                              }}
                            >

                              <FontAwesome5 name="plus" size={15} color={footerView} />

                            </TouchableOpacity>


                          </View>
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
                    لا توجد فئات
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
              //  backgroundColor: "#f0f",
              // flex: 1,
              backgroundColor: '#fff',
              // borderTopLeftRadius: 40,
              // borderTopRightRadius: 40,
              // marginTop: height * -0.09,
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
              لا توجد فئات
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
    height: height * 0.11,
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
    borderColor: secondaryColor,
    marginRight: width * 0.07,
  },
  headerTittleContainer: {
    width: width * 0.6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: width * 0.02,
    // paddingLeft: width * 0.08,
    // backgroundColor:'#0ff',
  },
  headerTittleTxtStyle: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: RFValue(18),
    marginRight: width * 0.28,
    flexDirection: "row"
  },


  categoryImgContainer: {

    // backgroundColor:"#ff0",
    width: 70, height: 65, resizeMode: 'contain',

  },



  addCategoryBtn: {
    bottom: 0,
    elevation: 5,
    right: RFValue(15),
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.100,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: height * 0.05,
    padding: width * 0.009,
    borderRadius: width * 0.5,
    justifyContent: 'center',
    marginBottom: height * 0.025,
    backgroundColor: footerIcons,
    shadowOffset: { width: 0, height: 7 },
  },







  dropdown3BtnStyle: {
    width: '85%',
    height: 63,
    backgroundColor: loginView,
    borderRadius: 8,
    marginTop: height * 0.03,
  },


});


