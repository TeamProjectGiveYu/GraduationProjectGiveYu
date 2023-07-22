/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-undef */

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
} from 'react-native';

import {
  loginView,
  loginIcons,
  footerView,
  footerIcons,
  bigBackground,
  logintext,
  secondaryColor,
  footerIconsOff,
} from '../UserApp/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';
import { Hoshi } from 'react-native-textinput-effects';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'react-native-image-picker';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class InstitutionProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charity_data: this.props.route.params.charity_data,
      showInfo_name: false,
      showInfo_phone: false,
      showInfo_email: false,
      showInfo_location: false,
      showInfo_id: false,
      showInfo_brif: false,
      showInfo_whatsapp: false,
      showInfo_instgram: false,
      showInfo_facebook: false,
      img: '',
    };
  }


  async componentDidMount() {
    this.requestCameraPermission()
    
  }
  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
        console.log(this.state.charity_data.user_id);
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  select_first_photo() {
    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.launchImageLibrary(
      {
        options,
        mediaType: 'photo',
        includeBase64: true,
        maxHeight: 250,
        maxWidth: 250,
      },
      response => {
        if (response.didCancel) {
          console.log('User cancelled photo picker');
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        } else {
          this.setState({
            photo_data: response.assets[0],
            img: response.assets[0].uri,
            Image_TAG: response.assets[0].fileName,
          });

          // this.uploadImage(this.state.img);
          this.uploadImageToServer();
        }
      },
    );
  }
 

  








  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        {/* header */}

        {/* content */}
        <View
          style={{
            flex: 0.995,
            backgroundColor: '#fff',

            // marginTop: RFValue(-0.2),
          }}>
          <ScrollView>
            <TouchableOpacity onPress={() => {
              this.props.navigation.navigate('CharityOptions', {
                charity_data: this.state.charity_data,
              })
            }}
              style={{
                borderWidth: 1,
                width: width * 0.1,
                alignItems: 'center',
                color: secondaryColor,
                height: height * 0.04,
                justifyContent: 'center',
                borderRadius: RFValue(10),
                borderColor: secondaryColor,
                marginLeft: width * 0.05,
                marginTop: height * 0.03,
              }}
            >
              <FontAwesome5 name="chevron-right" size={20} style={{ color: secondaryColor }} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.select_first_photo();
                // this.launchCamera()
              }}

              style={{
                backgroundColor: '#ffff',
                width: RFValue(120),
                height: RFValue(120),
                borderRadius: 180,
                marginTop: RFValue(5),
                alignContent: 'center',
                alignSelf: 'center',
                justifyContent: "center",
                // marginTop: '8%',
                borderColor: '#FFFFFF',
                borderWidth: 1,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.36,
                shadowRadius: 6.68,

                elevation: 11,
              }}>
              {this.state.img == '' ?
                <View
                  // onPress={() => {
                  //   this.select_first_photo();
                  //   // this.launchCamera()
                  // }}
                  style={{ alignSelf: "center", justifyContent: "center" }}>
                  <AntDesign
                    name='plus'
                    style={{
                      // backgroundColor: "#ff0",
                      alignSelf: "center",
                      justifyContent: "center",
                      // scale: 150,
                      fontSize: height * 0.05,
                      color: "#ccc", alignItems: "center"

                    }}
                  />
                </View>

                :
                <Image
                  resizeMode="contain"
                  resizeMethod="scale"
                  // crop={}
                  source={{ uri: this.state.img }}
                  style={{
                    width: '100%',
                    height: '100%',
                    // width:10,height:100,
                    borderRadius: 200,
                    // backgroundColor:"#ff0",
                    alignSelf: 'center',
                    scale: 150,
                  }} />
              }

            </TouchableOpacity>

            <View
              style={{
                flex: 1,
                alignItems: 'center',
                // backgroundColor: '#0f0',
                marginTop: '15%',
                paddingHorizontal: RFValue(27),
              }}>
              {/* institution data.... */}

              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: height * 0.1,
                  paddingHorizontal: RFValue(7),
                  // alignItems:"center"
                }}>
                <View
                  style={{
                    width: width * 0.6,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name="university"
                    size={30}
                    style={{
                      color: loginView,
                      alignSelf: 'center',
                      // marginRight: RFValue(-30),
                    }}
                  />
                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(20),
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 16,
                        // fontWeight: 'bold',
                        color: '#000',
                        // textAlign: 'center',
                      }}>
                      اسم المؤسسه
                    </Text>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                      }}>
                      {this.state.charity_data.user_name}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showInfo_name: true });
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
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

              {/* phone data */}
              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: height * 0.1,
                  paddingHorizontal: RFValue(7),
                  //////////////marginTop: RFValue(10)
                }}>
                <View
                  style={{
                    width: width * 0.6,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name="phone"
                    size={25}
                    style={{
                      color: loginIcons,
                      alignSelf: 'center',
                      // marginRight: RFValue(-30),
                    }}
                  />

                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(20),
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 16,
                        // fontWeight: 'bold',
                        color: '#000',
                        // textAlign: 'center',
                      }}>
                      الهاتف
                    </Text>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                      }}>
                      {this.state.charity_data.user_phone}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showInfo_phone: true });
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
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

              {/* location data */}
              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: height * 0.1,
                  paddingHorizontal: RFValue(7),
                  //////////////marginTop: RFValue(10)
                }}>
                <View
                  style={{
                    width: width * 0.6,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Icon
                    name="map-marker-alt"
                    size={25}
                    style={{
                      color: loginIcons,
                      alignSelf: 'center',
                      // marginRight: RFValue(-30),
                    }}
                  />

                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(20),
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 16,
                        // fontWeight: 'bold',
                        color: '#000',
                        // textAlign: 'center',
                      }}>
                      العنوان
                    </Text>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                      }}>
                      {this.state.charity_data.charity_address}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showInfo_location: true });
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
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

              {/* ID data */}
              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: height * 0.1,
                  paddingHorizontal: RFValue(7),
                  //////////////marginTop: RFValue(10)
                }}>
                <View
                  style={{
                    width: width * 0.6,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <Ionicons name="clipboard" color={loginIcons} size={25} />

                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(20),
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 16,
                        // fontWeight: 'bold',
                        color: '#000',
                        // textAlign: 'center',
                      }}>
                      رقم القيد
                    </Text>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',

                        color: '#000',
                        textAlign: 'left',
                      }}>
                      {this.state.charity_data.charity_identification}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showInfo_id: true });
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
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

              {/* email data */}
              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: RFValue(7),
                  //////////////marginTop: RFValue(10),height:height*0.14
                  // alignItems:"center"
                }}>
                <View
                  style={{
                    width: width * 0.85,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: height * 0.02,
                    // backgroundColor:  loginIcons,
                  }}>
                  <Fontisto
                    name="email"
                    size={25}
                    style={{
                      color: loginIcons,
                      alignSelf: 'center',
                      marginRight: RFValue(-2),
                    }}
                  />

                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(20),
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 16,
                        // fontWeight: 'bold',
                        color: '#000',
                        // textAlign: 'center',
                      }}>
                      البريد الالكتروني
                    </Text>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                      }}>
                      {this.state.charity_data.user_email}
                    </Text>
                  </View>
                </View>
                {/* <TouchableOpacity
                  onPress={() => {
                    this.setState({ showInfo_email: true });
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
                  }}>
                  <Icon
                    name="edit"
                    size={25}
                    style={{
                      color: loginIcons,
                    }}
                  />
                </TouchableOpacity> */}
              </View>



              {/* instgram link */}
              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: RFValue(7),
                  //////////////marginTop: RFValue(10),height:height*0.14
                  // alignItems:"center"
                }}>
                <View
                  style={{
                    width: width * 0.85,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: height * 0.02,
                    // backgroundColor:  loginIcons,
                  }}>
                  <Fontisto
                    name="instagram"
                    size={25}
                    style={{
                      color: loginIcons,
                      alignSelf: 'center',
                      marginRight: RFValue(-2),
                    }}
                  />

                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(20),
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 16,
                        // fontWeight: 'bold',
                        color: '#000',
                        // textAlign: 'center',
                      }}>
                      لينك الانستجرام
                    </Text>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                      }}>
                      {this.state.charity_data.instagram_link}
                    </Text>
                  </View>
                </View>
                {/* <TouchableOpacity
                  onPress={() => {
                    this.setState({ showInfo_instgram: true });
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
                  }}>
                  <Icon
                    name="edit"
                    size={25}
                    style={{
                      color: loginIcons,
                    }}
                  />
                </TouchableOpacity> */}
              </View>

              {/* facebook link*/}
              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingHorizontal: RFValue(7),
                  //////////////marginTop: RFValue(10),height:height*0.14
                  // alignItems:"center"
                }}>
                <View
                  style={{
                    width: width * 0.85,
                    alignItems: 'center',
                    flexDirection: 'row',
                    marginTop: height * 0.02,
                    // backgroundColor:  loginIcons,
                  }}>
                  <Fontisto
                    name="facebook"
                    size={25}
                    style={{
                      color: loginIcons,
                      alignSelf: 'center',
                      marginRight: RFValue(-2),
                    }}
                  />

                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(20),
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 16,
                        // fontWeight: 'bold',
                        color: '#000',
                        // textAlign: 'center',
                      }}>
                      لينك فيسبوك
                    </Text>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                      }}>
                      {this.state.charity_data.facebook_link}
                    </Text>
                  </View>
                </View>
                {/* <TouchableOpacity
                  onPress={() => {
                    this.setState({ showInfo_facebook: true });
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
                  }}>
                  <Icon
                    name="edit"
                    size={25}
                    style={{
                      color: loginIcons,
                    }}
                  />
                </TouchableOpacity> */}
              </View>

              {/* password */}
              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: height * 0.1,
                  paddingHorizontal: RFValue(7),
                  // marginLeft: width *0.03
                  //////////////marginTop: RFValue(10)
                }}>
                <View
                  style={{
                    width: width * 0.6,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <MaterialCommunityIcons
                    name="form-textbox-password"
                    size={25}
                    style={{
                      color: loginIcons,
                      alignSelf: 'center',
                      marginRight: RFValue(27),
                    }}
                  />
                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(-12),
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        // marginLeft: RFValue(15),
                        fontSize: 18,
                        // fontWeight: 'bold',
                        color: '#000',
                        // alignSelf: 'center',
                      }}>
                      تغيير كلمة المرور
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                   onPress={() => {
                    this.props.navigation.navigate('PassChange',
                      { user_data: this.state.charity_data });
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
                    marginRight: RFValue(-8),
                  }}>
                  <Icon
                    name="chevron-left"
                    size={25}
                    style={{
                      color: loginIcons,
                    }}
                  />
                </TouchableOpacity>
              </View>

              {/* logout */}

              <View
                style={{
                  width: width * 0.99,
                  backgroundColor: bigBackground,
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: height * 0.1,
                  paddingHorizontal: RFValue(7),
                  //////////////marginTop: RFValue(10)
                }}>
                <View
                  style={{
                    width: width * 0.6,
                    alignItems: 'center',
                    flexDirection: 'row',
                  }}>
                  <MaterialCommunityIcons
                    name="logout"
                    size={25}
                    style={{
                      color: loginIcons,
                      alignSelf: 'center',
                      marginRight: RFValue(27),
                    }}
                  />
                  <View
                    style={{
                      // width: RFValue(250),
                      marginLeft: RFValue(-12),
                      flexDirection: 'column',
                    }}>
                    <Text
                      style={{
                        // marginLeft: RFValue(15),
                        fontSize: 18,
                        // fontWeight: 'bold',
                        color: '#000',
                        // alignSelf: 'center',
                      }}>
                      تسجيل الخروج
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.LogoutDB();
                  }}
                  style={{
                    backgroundColor: bigBackground,
                    alignSelf: 'center',
                    alignItems: 'center',
                    width: RFValue(35),
                    height: RFValue(40),
                    justifyContent: 'center',
                  }}>
                  <Icon
                    name="chevron-left"
                    size={25}
                    style={{
                      color: loginIcons,
                      marginRight: RFValue(-14),
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>

        {/* name edits..... */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_name}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_name;
            this.setState({ showInfo_name: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={'اسم المؤسسه '}
                  value={this.state.charity_data.user_name}
                  onChangeText={value => {
                    this.setState({
                      charity_data: {
                        user_name: value,
                      
                      }
                    });
                  }}
                  // this is used as active border color
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    alignSelf: 'center',
                    width: width * 0.8,
                    // backgroundColor:  loginIcons,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,

                    elevation: 1,
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
                      this.setState({ showInfo_name: false });
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

                    this.updated_charityName();

                    // this.setState({ showInfo_name: false });
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

        {/* phone edits..... */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_phone}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_phone;
            this.setState({ showInfo_phone: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={'رقم الهاتف'}
                  value={this.state.charity_data.user_phone}
                  onChangeText={value => {
                    this.setState({
                      charity_data: {
                       
                        user_phone: value,
                     
                      }
                    });
                  }}
                  keyboardType={'phone-pad'}
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    alignSelf: 'center',
                    width: width * 0.8,
                    // backgroundColor:  loginIcons,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,

                    elevation: 1,
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
                      this.setState({ showInfo_phone: false });
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
                    this.updated_charityPhone();
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

        {/* location edits..... */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_location}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_location;
            this.setState({ showInfo_location: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={'العنوان'}
                  value={this.state.charity_data.charity_address}
                  onChangeText={value => {
                    this.setState({
                      charity_data: {
                       
                        charity_address: value,
                      
                      }
                    });
                  }}
                  // this is used as active border color
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    alignSelf: 'center',
                    width: width * 0.8,
                    // backgroundColor:  loginIcons,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,

                    elevation: 1,
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
                      this.setState({ showInfo_location: false });
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
                    this.updated_charityAddress();
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

        {/* .....identification edits..... */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_id}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_id;
            this.setState({ showInfo_id: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={'رقم القيد'}
                  value={this.state.charity_data.charity_identification}
                  onChangeText={value => {
                    this.setState({
                      charity_data: {
                      
                        charity_identification: value,
                        
                      }
                    });
                  }}
                  keyboardType={'numeric'}
                  borderColor={loginIcons}
                  paddingRight={30}
                  inputPadding={25}
                  style={{
                    borderBottomWidth: 1,
                    fontSize: 17,
                    alignSelf: 'center',
                    width: width * 0.8,
                    // backgroundColor:  loginIcons,
                    shadowColor: '#000',
                    shadowOffset: {
                      width: 0,
                      height: 1,
                    },
                    shadowOpacity: 0.2,
                    shadowRadius: 1.41,

                    elevation: 1,
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
                      this.setState({ showInfo_id: false });
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
                    this.updated_charityIdentification();
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
    height: height * 0.25,
    marginTop: height * 0.05,
    paddingHorizontal: height * 0.02,
    paddingVertical: height * 0.015,
    borderRadius: height * 0.03,
    // backgroundColor: '#D9D9D9',
    backgroundColor: '#fff',
  },
  charityNameImgContainer: {
    width: width * 0.8,
    height: height * 0.1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // backgroundColor: '#0ff',
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
});

export default InstitutionProfile;
