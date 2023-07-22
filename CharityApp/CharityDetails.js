/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */
/* eslint-disable eqeqeq */

import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Image,
  Modal,
  StyleSheet,
  Animated,
} from 'react-native';
import { FAB } from 'react-native-paper';

import {
  loginView,
  loginIcons,
  footerView,
  footerIcons,
  bigBackground,
  logintext,
  secondaryColor,
  footerIconsOff,
  DonateView,
  textinTextinput,
  errorColor,
} from '../UserApp/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';
import { Hoshi } from 'react-native-textinput-effects';
import Fontisto from 'react-native-vector-icons/Fontisto';
import * as ImagePicker from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import axios from 'axios';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class CharityDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charity_data: this.props.route.params.charity_data,
      // charity_info: '',
      // user_whatsApp: '',
      vodafone_cash: '010',
      we_cash: '015',
      orange_cash: '012',
      etisalat_cash: '011',

      showInfo_brif: false,
      // showInfo_achievements: false,
      showInfo_whatsNum: false,
      showInfo_vodafone_cash: false,
      showInfo_we_cash: false,
      showInfo_orange_cash: false,
      showInfo_etisalat_cash: false,

      // text:'+2',

      we_active: false,
      vodafone_active: false,
      orange_active: false,
      etisalat_active: false,
      active: false,
      // Drop Down List
      categoriesWithFlags: [
        {
          id: 1,
          title: 'محفظة فودافون',
          image: require('../Images/Vodafone.png'),
          onPress: () => {
            this.setState({ vodafone_active: true });
          },
        },
        {
          id: 2,

          title: 'محفظة اتصالات',
          image: require('../Images/Etisalat.png'),
          onPress: () => {
            this.setState({ etisalat_active: true });
          },
        },
        {
          id: 3,

          title: 'محفظة اورانج',
          image: require('../Images/Orange.png'),
          onPress: () => {
            this.setState({ orange_active: true });
          },
        },
        {
          id: 4,

          title: 'محفظة We',
          image: require('../Images/We.png'),
          onPress: () => {
            this.setState({ we_active: true });
          },
        },
      ],
      isCollapsed: true,
      animation: new Animated.Value(0),
    };
  }

  toggleCollapse = () => {
    this.setState(prevState => ({
      isCollapsed: !prevState.isCollapsed,
    }));
  };
 

 


  render() {
    const { isCollapsed, animation } = this.state;
    const translateY = animation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, -100], // Adjust the value as needed
    });
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        {/* Content */}
        <View
          style={{
            flex: 1,
            backgroundColor: '#fff',
            // marginTop: RFValue(-0.2),
          }}>
          <ScrollView>
            {/* Header */}
            <View style={styles.headerContainer}>
              {/* Header Arrow  */}
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

              {/* Header Tittle  */}
              <View style={styles.headerTittleContainer}>
                <Text style={styles.headerTittleTxtStyle}>تفاصيل المؤسسه</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  this.setState({ showInfo_brif: true });
                }}
                style={{
                  backgroundColor: bigBackground,
                  // alignSelf: 'center',
                  alignItems: 'center',
                  width: RFValue(35),
                  height: RFValue(40),
                  justifyContent: 'center',
                  // marginTop: width * 0.05,
                }}>
                <Icon
                  name="edit"
                  size={25}
                  style={{
                    color: loginIcons,
                  }}
                />
              </TouchableOpacity>
            </View>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                // backgroundColor: '#0f0',
                // marginTop: '10%',
                // paddingHorizontal: RFValue(27),
              }}>
              {/* institution data.... */}

              {/*     brif     */}
              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: RFValue(7),
                  marginTop: height * 0.02,
                  //////////////marginTop: RFValue(10),height:height*0.14
                  // alignItems:"center"
                }}>
                <View
                  style={{
                    width: width * 0.85,
                    alignItems: 'center',
                    flexDirection: 'row',
                    // backgroundColor:  loginIcons,
                  }}>
                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(20),
                      flexDirection: 'column',
                    }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                      <Text
                        style={{
                          // marginRight: RFValue(130),
                          fontSize: 18,
                          fontWeight: 'bold',
                          color: logintext,
                          // textAlign: 'center',
                        }}>
                        تعريف للمؤسسه
                      </Text>
                    </View>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                        marginTop: width * 0.03,
                      }}>
                      {this.state.charity_data.charity_info}
                    </Text>
                  </View>
                </View>

              </View>

              {/* Achievements */}
              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: RFValue(7),
                  marginTop: height * 0.04,
                  //////////////marginTop: RFValue(10),height:height*0.14
                  // alignItems:"center"
                }}>
                <View
                  style={{
                    width: width * 0.85,
                    alignItems: 'center',
                    flexDirection: 'row',
                    // backgroundColor:  loginIcons,
                  }}>
                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(20),
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: logintext,
                        // textAlign: 'center',
                      }}>
                      إنجازات المؤسسة
                    </Text>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                        marginTop: width * 0.03,
                      }}>
                      بعض من إنجازات المؤسسة
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.navigation.navigate('CharityAchievements', {
                    });
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
                    marginTop: width * 0.05,
                  }}>
                  <FontAwesome5
                    name="chevron-left"
                    size={25}
                    style={{
                      color: loginIcons,
                    }}
                  />
                </TouchableOpacity>
              </View>

              {/* Whatsapp number */}
              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: RFValue(7),
                  marginTop: height * 0.04,
                  //////////////marginTop: RFValue(10),height:height*0.14
                  // alignItems:"center"
                }}>
                <View
                  style={{
                    width: width * 0.85,
                    alignItems: 'center',
                    flexDirection: 'row',

                    // backgroundColor:  loginIcons,
                  }}>
                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(20),
                      flexDirection: 'column',

                    }}>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 18,
                        fontWeight: 'bold',
                        color: logintext,
                        // textAlign: 'center',
                      }}>
                      رقم واتساب
                    </Text>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                        marginTop: width * 0.03,
                      }}>
                      {this.state.charity_data.user_whatsApp}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showInfo_whatsNum: true });
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
                    marginTop: width * 0.05,
                    marginBottom: 60
                  }}>
                  <FontAwesome5
                    name="chevron-left"
                    size={25}
                    style={{
                      color: loginIcons,
                    }}
                  />
                </TouchableOpacity>
              </View>

              {/* Vodafon cash */}
              {this.state.vodafone_active == true ? (
                <>
                  <View
                    style={{
                      width: width * 0.99,
                      backgroundColor: bigBackground,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: RFValue(7),
                      marginTop: height * 0.03,
                      //////////////marginTop: RFValue(10),height:height*0.14
                      // alignItems:"center"
                    }}>
                    <View
                      style={{
                        width: width * 0.85,
                        alignItems: 'center',
                        flexDirection: 'row',
                        // backgroundColor:  loginIcons,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ vodafone_active: false });
                        }}>
                        <Ionicons
                          name="remove-circle-outline"
                          size={30}
                          style={{
                            color: loginView,
                            alignSelf: 'center',
                            // marginRight: RFValue(-30),
                          }}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          // width: RFValue(250),
                          marginLeft: RFValue(10),
                          flexDirection: 'column',
                        }}>
                        <Text
                          style={{
                            // marginRight: RFValue(130),
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: logintext,
                            // textAlign: 'center',
                          }}>
                          رقم محفظة vodafone
                        </Text>
                        <Text
                          style={{
                            // marginRight: RFValue(130),
                            fontSize: 20,
                            // fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'left',
                            marginTop: width * 0.03,
                          }}>
                          {this.state.charity_data.vodafone_cash}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ showInfo_vodafone_cash: true });
                      }}
                      style={{
                        backgroundColor: bigBackground,
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: RFValue(35),
                        height: RFValue(40),
                        justifyContent: 'center',
                        marginTop: width * 0.05,
                      }}>
                      <Icon
                        name="edit"
                        size={25}
                        style={{
                          color: loginIcons,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              ) : null}
              {/* Orange cash */}
              {this.state.orange_active == true ? (
                <>
                  <View
                    style={{
                      width: width * 0.99,
                      backgroundColor: bigBackground,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: RFValue(7),
                      marginTop: height * 0.03,
                      //////////////marginTop: RFValue(10),height:height*0.14
                      // alignItems:"center"
                    }}>
                    <View
                      style={{
                        width: width * 0.85,
                        alignItems: 'center',
                        flexDirection: 'row',
                        // backgroundColor:  loginIcons,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ orange_active: false });
                        }}>
                        <Ionicons
                          name="remove-circle-outline"
                          size={30}
                          style={{
                            color: loginView,
                            alignSelf: 'center',
                            // marginRight: RFValue(-30),
                          }}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          // width: RFValue(250),
                          marginLeft: RFValue(20),
                          flexDirection: 'column',
                        }}>
                        <Text
                          style={{
                            // marginRight: RFValue(130),
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: logintext,
                            // textAlign: 'center',
                          }}>
                          رقم محفظة orange
                        </Text>
                        <Text
                          style={{
                            // marginRight: RFValue(130),
                            fontSize: 20,
                            // fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'left',
                            marginTop: width * 0.03,
                          }}>
                          {this.state.charity_data.orange_cash}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ showInfo_orange_cash: true });
                      }}
                      style={{
                        backgroundColor: bigBackground,
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: RFValue(35),
                        height: RFValue(40),
                        justifyContent: 'center',
                        marginTop: width * 0.05,
                      }}>
                      <Icon
                        name="edit"
                        size={25}
                        style={{
                          color: loginIcons,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              ) : null}
              {/* We cash */}
              {this.state.we_active == true ? (
                <>
                  <View
                    style={{
                      width: width * 0.99,
                      backgroundColor: bigBackground,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: RFValue(7),
                      marginTop: height * 0.03,
                      //////////////marginTop: RFValue(10),height:height*0.14
                      // alignItems:"center"
                    }}>
                    <View
                      style={{
                        width: width * 0.85,
                        alignItems: 'center',
                        flexDirection: 'row',
                        // backgroundColor:  loginIcons,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ we_active: false });
                        }}>
                        <Ionicons
                          name="remove-circle-outline"
                          size={30}
                          style={{
                            color: loginView,
                            alignSelf: 'center',
                            // marginRight: RFValue(-30),
                          }}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          // width: RFValue(250),
                          marginLeft: RFValue(20),
                          flexDirection: 'column',
                        }}>
                        <Text
                          style={{
                            // marginRight: RFValue(130),
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: logintext,
                            // textAlign: 'center',
                          }}>
                          رقم محفظة WE
                        </Text>
                        <Text
                          style={{
                            // marginRight: RFValue(130),
                            fontSize: 20,
                            // fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'left',
                            marginTop: width * 0.03,
                          }}>
                          {this.state.charity_data.we_cash}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ showInfo_we_cash: true });
                      }}
                      style={{
                        backgroundColor: bigBackground,
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: RFValue(35),
                        height: RFValue(40),
                        justifyContent: 'center',
                        marginTop: width * 0.05,
                      }}>
                      <Icon
                        name="edit"
                        size={25}
                        style={{
                          color: loginIcons,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              ) : null}
              {/* Etisalat cash  */}
              {this.state.etisalat_active == true ? (
                <>
                  <View
                    style={{
                      width: width * 0.99,
                      backgroundColor: bigBackground,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      paddingHorizontal: RFValue(7),
                      marginTop: height * 0.03,
                      //////////////marginTop: RFValue(10),height:height*0.14
                      // alignItems:"center"
                      marginBottom: width * 0.2,
                    }}>
                    <View
                      style={{
                        width: width * 0.85,
                        alignItems: 'center',
                        flexDirection: 'row',
                        // backgroundColor:  loginIcons,
                      }}>
                      <TouchableOpacity
                        onPress={() => {
                          this.setState({ etisalat_active: false });
                        }}>
                        <Ionicons
                          name="remove-circle-outline"
                          size={30}
                          style={{
                            color: loginView,
                            alignSelf: 'center',
                            // marginRight: RFValue(-30),
                          }}
                        />
                      </TouchableOpacity>
                      <View
                        style={{
                          // width: RFValue(250),
                          marginLeft: RFValue(20),
                          flexDirection: 'column',
                        }}>
                        <Text
                          style={{
                            // marginRight: RFValue(130),
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: logintext,
                            // textAlign: 'center',
                          }}>
                          رقم محفظة etisalat
                        </Text>
                        <Text
                          style={{
                            // marginRight: RFValue(130),
                            fontSize: 20,
                            // fontWeight: 'bold',
                            color: '#000',
                            textAlign: 'left',
                            marginTop: width * 0.03,
                          }}>
                          {this.state.charity_data.etisalat_cash}
                        </Text>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => {
                        this.setState({ showInfo_etisalat_cash: true });
                      }}
                      style={{
                        backgroundColor: bigBackground,
                        alignSelf: 'center',
                        alignItems: 'center',
                        width: RFValue(35),
                        height: RFValue(40),
                        justifyContent: 'center',
                        marginTop: width * 0.05,
                      }}>
                      <Icon
                        name="edit"
                        size={25}
                        style={{
                          color: loginIcons,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                </>
              ) : null}
            </View>
          </ScrollView>

          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              // marginBottom: width * 0.05,
              position: 'absolute',
              bottom: 0,
              // right: RFValue(5),
              alignSelf: 'flex-end',
              height: height * 0.05,
              padding: width * 0.009,
              borderRadius: width * 0.5,
            }}>
            {!isCollapsed && (
              <View
                style={{
                  // position: 'absolute',
                  bottom: 16,
                  right: 16,
                }}>
                {this.state.categoriesWithFlags.map(fab => (
                  <TouchableOpacity
                    key={fab.id}
                    style={{ marginBottom: width * 0.07 }}
                    onPress={fab.onPress}>
                    <Image
                      source={fab.image}
                      resizeMode="contain"
                      style={{
                        width: RFValue(45),
                        height: RFValue(45),
                        borderRadius: 35,
                      }}
                    />
                  </TouchableOpacity>
                ))}
              </View>
            )}
            <TouchableOpacity
              style={{
                // position: 'absolute',
                bottom: 10,
                right: 16,

                // marginTop: 30,
                // backgroundColor: '#ff0',
                // height: width * 0.1,
              }}
              onPress={this.toggleCollapse}>
              {/* <Ionicons
                // resizeMode="contain"
                // source={
                // isCollapsed
                //   ? require('../Images/card-back.png')
                //   : require('../Images/card-front.png')
                // }
                name={isCollapsed ? 'card-outline' : 'card'}
                size={40}
                style={{
                  // width: RFValue(40),
                  // height: RFValue(40),
                  borderRadius: 35,
                  color: loginIcons,
                }}
              /> */}
              <View
                style={{
                  width: RFValue(45),
                  height: RFValue(45),
                  borderRadius: 35,
                  backgroundColor: loginIcons,
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                  // marginBottom: width * 0.03,
                  // marginTop: width * 0.03,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    alignSelf: 'center',
                    // marginLeft: 7,
                    fontSize: 9,

                  }}>
                  {isCollapsed ? 'اضافة محفظة' : 'الغاء'}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        {/* brif edits..... */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_brif}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_brif;
            this.setState({ showInfo_brif: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={'تعريف للمؤسسه'}
                  value={this.state.charity_data.charity_info}
                  onChangeText={value => {
                    // this.setState({charity_info: value});
                    this.setState({
                      charity_data: {
                       
                      }
                    });
                  }}
                  // this is used as active border color
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  multiline={true}
                  //   editable={true}
                  height={70}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    justifyContent: 'flex-start',
                    // alignSelf: 'center',
                    width: width * 0.8,
                    // backgroundColor:  loginIcons,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    // height: width * 0.5,
                    elevation: 1,
                    paddingRight: 10,
                    // backgroundColor: '#f0f',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // paddingHorizontal:width*0.01
                  alignSelf: 'center',
                }}>
                {/* cancal */}
                <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate('Accounts');
                    // this.setState({ showInfo: false })
                    // achievements: this.state.charityDetails,
                    {
                      this.setState({ showInfo_brif: false });
                    }
                  }}
                  style={[
                    styles.charityAchieveBtn,
                    { marginRight: 40, backgroundColor: footerIconsOff },
                  ]}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    الغاء
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate('Accounts', {
                    //   // achievements: this.state.charityDetails,
                    // });

                    this.updated_charityInfo()
                  }}
                  style={styles.charityAchieveBtn}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    حفظ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Whatsapp Num edits..... */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_whatsNum}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_whatsNum;
            this.setState({ showInfo_whatsNum: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={'رقم الواتساب'}
                  value={this.state.charity_data.user_whatsApp}
                  onChangeText={value => {
                    this.setState({
                      charity_data: {
                       
                      }
                    });
                  }}
                  // this is used as active border color
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={20}
                  // inputMode='numeric'
                  keyboardType="phone-pad"
                  // placeholder=' +2 '
                  textAlign="right"
                  maxLength={14}
                  // multiline={true}
                  // editable={true}
                  // defaultValue={this.state.text}
                  height={70}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    justifyContent: 'flex-start',
                    // alignSelf: 'center',
                    width: width * 0.8,
                    // backgroundColor:  loginIcons,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    // height: width * 0.5,
                    elevation: 1,
                    paddingRight: 10,

                    // backgroundColor: '#f0f',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // paddingHorizontal:width*0.01
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showInfo_whatsNum: false });
                  }}
                  style={[
                    styles.charityAchieveBtn,
                    { marginRight: 40, backgroundColor: footerIconsOff },
                  ]}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    الغاء
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.updated_charityuser_whatsApp();
                  }}
                  style={styles.charityAchieveBtn}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    حفظ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Vodafone edits..... */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_vodafone_cash}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_vodafone_cash;
            this.setState({ showInfo_vodafone_cash: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={' رقم محفظة فودافون'}
                  value={this.state.charity_data.vodafone_cash}
                  onChangeText={value => {
                    this.setState({
                      charity_data: {
                       
                      }
                    });
                  }}
                  // this is used as active border color
                  keyboardType="numeric"
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  multiline={true}
                  editable={true}
                  height={70}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    // alignSelf: 'center',
                    width: width * 0.8,
                    // backgroundColor:  loginIcons,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    height: width * 0.5,
                    elevation: 1,
                    // backgroundColor: '#f0f',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // paddingHorizontal:width*0.01
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate('Accounts');
                    // this.setState({ showInfo: false })
                    // achievements: this.state.charityDetails,
                    {
                      this.setState({ showInfo_vodafone_cash: false });
                    }
                  }}
                  style={[
                    styles.charityAchieveBtn,
                    { marginRight: 40, backgroundColor: footerIconsOff },
                  ]}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    الغاء
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    this.updated_charity_vodafone_cash();
                  }}
                  style={styles.charityAchieveBtn}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    حفظ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Orange edit */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_orange_cash}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_orange_cash;
            this.setState({ showInfo_orange_cash: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={' رقم محفظة اورانج'}
                  value={this.state.charity_data.orange_cash}
                  onChangeText={value => {
                    this.setState({
                      charity_data: {
                        user_id: this.state.charity_data.user_id,
                        user_name: this.state.charity_data.user_name,
                        user_email: this.state.charity_data.user_email,
                        user_phone: this.state.charity_data.user_phone,
                        charity_address: this.state.charity_data.charity_address,
                        charity_identification: this.state.charity_data.charity_identification,
                        instagram_link: this.state.charity_data.instagram_link,
                        facebook_link: this.state.charity_data.facebook_link,
                        charity_info: this.state.charity_data.charity_info,
                        user_whatsApp: this.state.charity_data.user_whatsApp,
                        vodafone_cash: this.state.charity_data.vodafone_cash,
                        we_cash: this.state.charity_data.we_cash,
                        orange_cash: value,
                        etisalat_cash: this.state.charity_data.etisalat_cash
                      }
                    });
                  }}
                  // this is used as active border color
                  keyboardType="numeric"
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  multiline={true}
                  editable={true}
                  height={70}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    // alignSelf: 'center',
                    width: width * 0.8,
                    // backgroundColor:  loginIcons,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    height: width * 0.5,
                    elevation: 1,
                    // backgroundColor: '#f0f',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // paddingHorizontal:width*0.01
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate('Accounts');
                    // this.setState({ showInfo: false })
                    // achievements: this.state.charityDetails,
                    {
                      this.setState({ showInfo_orange_cash: false });
                    }
                  }}
                  style={[
                    styles.charityAchieveBtn,
                    { marginRight: 40, backgroundColor: footerIconsOff },
                  ]}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    الغاء
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                   this.updated_charity_orange_cash();
                  }}
                  style={styles.charityAchieveBtn}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    حفظ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* Etisalat edit*/}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_etisalat_cash}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_etisalat_cash;
            this.setState({ showInfo_etisalat_cash: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={' رقم محفظةاتصالات'}
                  value={this.state.charity_data.etisalat_cash}
                  onChangeText={value => {
                    this.setState({
                      charity_data: {
                        
                        etisalat_cash: value,
                      }
                    });
                  }}
                  // this is used as active border color
                  keyboardType="numeric"
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  multiline={true}
                  editable={true}
                  height={70}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    // alignSelf: 'center',
                    width: width * 0.8,
                    // backgroundColor:  loginIcons,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    height: width * 0.5,
                    elevation: 1,
                    // backgroundColor: '#f0f',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // paddingHorizontal:width*0.01
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate('Accounts');
                    // this.setState({ showInfo: false })
                    // achievements: this.state.charityDetails,
                    {
                      this.setState({ showInfo_etisalat_cash: false });
                    }
                  }}
                  style={[
                    styles.charityAchieveBtn,
                    { marginRight: 40, backgroundColor: footerIconsOff },
                  ]}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    الغاء
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate('Accounts', {
                    //   // achievements: this.state.charityDetails,
                    // });

                   this.updated_charity_etisalat_cash()
                  }}
                  style={styles.charityAchieveBtn}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    حفظ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>

        {/* We edit */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_we_cash}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_we_cash;
            this.setState({ showInfo_we_cash: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={' رقم محفظة we'}
                  value={this.state.charity_data.we_cash}
                  onChangeText={value => {
                    this.setState({
                      charity_data: {
                      
                        we_cash: value,
                       
                      }
                    });
                  }}
                  // this is used as active border color
                  keyboardType="numeric"
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  multiline={true}
                  editable={true}
                  height={70}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    // alignSelf: 'center',
                    width: width * 0.8,
                    // backgroundColor:  loginIcons,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,
                    height: width * 0.5,
                    elevation: 1,
                    // backgroundColor: '#f0f',
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  // paddingHorizontal:width*0.01
                  alignSelf: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate('Accounts');
                    // this.setState({ showInfo: false })
                    // achievements: this.state.charityDetails,
                    {
                      this.setState({ showInfo_we_cash: false });
                    }
                  }}
                  style={[
                    styles.charityAchieveBtn,
                    { marginRight: 40, backgroundColor: footerIconsOff },
                  ]}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    الغاء
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => {
                    // this.props.navigation.navigate('Accounts', {
                    //   // achievements: this.state.charityDetails,
                    // });

                    this.updated_charity_we_cash();
                  }}
                  style={styles.charityAchieveBtn}>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: width * 0.053,
                      // fontSize: RFValue(19),
                      fontWeight: 'bold',
                    }}>
                    حفظ
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </>
    );
  }
}

const styles = StyleSheet.create({
  // Model Style
  // ------------------------------------------------------------------------
  infoModalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  charityInfoBox: {
    // width: width * 0.85,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.35,
    marginTop: height * 0.05,
    paddingHorizontal: height * 0.02,
    paddingVertical: height * 0.015,
    borderRadius: height * 0.03,
    backgroundColor: '#fff',
    // backgroundColor: '#ff0',
  },
  charityNameImgContainer: {
    width: width * 0.8,
    height: height * 0.2,
    // alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
    backgroundColor: '#fff',
  },

  charityAchieveBtn: {
    width: width * 0.3,
    alignItems: 'center',
    height: height * 0.065,
    justifyContent: 'center',
    marginTop: height * 0.035,
    borderRadius: height * 0.018,
    backgroundColor: '#4695BC',
    elevation: 15,
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 7 },
    // marginLeft:width*0.1
  },
  headerContainer: {
    width: width,
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    height: height * 0.09,
    justifyContent: 'space-around',
    paddingHorizontal: width * 0.03,
    backgroundColor: bigBackground,
    // backgroundColor: "#f0f",
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
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingRight: width * 0.05,
    // backgroundColor:'#0ff',
  },
  headerTittleTxtStyle: {
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: RFValue(18),
  },
  addCaseBtn: {
    elevation: 5,
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.4,
    alignItems: 'center',
    height: height * 0.06,
    padding: width * 0.009,
    borderRadius: width * 0.05,
    justifyContent: 'center',
    marginBottom: height * 0.05,
    backgroundColor: footerIcons,
    shadowOffset: { width: 0, height: 7 },
    marginTop: width * 0.1,
  },
});

export default CharityDetails;
