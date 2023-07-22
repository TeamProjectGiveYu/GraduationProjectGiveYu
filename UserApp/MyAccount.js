/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Image,
  StyleSheet,
  Modal,
  PermissionsAndroid,
} from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as ImagePicker from 'react-native-image-picker';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Hoshi } from 'react-native-textinput-effects';
// import RNFetchBlob from 'rn-fetch-blob';
import {
  bigBackground,
  smallBackground,
  searchIcon,
  categories,
  Footer,
  clickedIconFooter,
  unclickedIconFooter,
  loginView,
  logintext,
  loginIcons,
  textInputcolor,
  iconContainer,
  eyeColor,
  textinTextinput,
  errorColor,
  secondaryColor,
  footerIcons,
  footerIconsOff,
  footerView,
} from './Colors';
import axios from 'axios';
import RNFetchBlob from 'rn-fetch-blob';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

class MyAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      user_data: this.props.route.params.user_data,

      showInfo_name: false,
      showInfo_phone: false,
      showInfo_email: false,
      data: null,
      ImageSource: null,
      Image_TAG: '',
      img: '',
      photo_data: '',
      // user_id: 2,
    };
  }

  LogoutDB = () => {
    var Data = {};

    var headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

   
    Alert.alert('تحذير', 'هل تريد تسجيل الخروج', [
      { text: 'نعم', onPress: () => this.props.navigation.navigate('LogIn') },
      { text: 'لا', onPress: () => this.props.navigation.navigate('MyAccount') },
    ]);
  };

 

  async componentDidMount() {
    this.requestCameraPermission();
    this.getdata();
  }

  requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
        console.log(this.state.user_data.user_id);
      } else {
        console.log('Camera permission denied');
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
            flex: 1,
            backgroundColor: '#fff',

            // marginTop: RFValue(-0.2),
          }}>
          <ScrollView>
            {/* image and camera icon... */}
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
                marginTop: RFValue(70),
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

            {/* body... */}
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                // backgroundColor: '#0f0',
                marginTop: '15%',
                paddingHorizontal: RFValue(27),
              }}>
              {/* user data.... */}

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
                    name="user"
                    size={25}
                    style={{
                      color: '#9AAEBB',
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
                      الاسم
                    </Text>
                    <Text
                      style={{
                        // marginRight: RFValue(130),
                        fontSize: 20,
                        // fontWeight: 'bold',
                        color: '#000',
                        textAlign: 'left',
                      }}>
                      {this.state.user_data.user_name}
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
                      color: '#9AAEBB',
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
                      {this.state.user_data.user_phone}
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
                    // backgroundColor:  loginIcons,
                  }}>
                  <Fontisto
                    name="email"
                    size={25}
                    style={{
                      color: '#9AAEBB',
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
                      {this.state.user_data.user_email}
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
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
                </TouchableOpacity>
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
                      color: '#9AAEBB',
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
                        // marginRight: RFValue(120),
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
                      { user_data: this.state.user_data });
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
                      color: '#9AAEBB',
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
                        // marginRight: RFValue(120),
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
          </ScrollView >
        </View >
        {/* <View
          style={{
            backgroundColor: '#E5ECF4',
            flex: 0.11,
          }}> */}
        {/* footer */}
        <View
          style={{
            height: height * 0.065,
            backgroundColor: footerView,
            // backgroundColor:"#ff0",
            // backgroundColor:footerIconsOff,
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            elevation: 2,
            shadowRadius: 9.51,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 7 },
            shadowOpacity: 0.43,
            justifyContent: 'space-around',
            bottom: 0,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomePage', {
                user_data: this.state.user_data,
              });
            }}
            style={{
              alignItems: 'center',
              width: width * 0.16,
              height: height * 0.08,
              justifyContent: 'center',
              // marginRight: width * 0.05,
            }}>
            <Ionicons
              name="home"
              size={25}
              style={{
                color: footerIconsOff,
                marginTop: -10,
              }}></Ionicons>
            <Text
              style={{
                color: footerIconsOff,
                fontSize: width * 0.02,
                marginTop: 4,
                fontWeight: 'bold',
              }}>
              الرئيسية
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('DonateInstitutions', {
                user_data: this.state.user_data,
              });
            }}
            style={{
              alignItems: 'center',
              width: width * 0.16,
              height: height * 0.08,
              justifyContent: 'center',
              // marginRight: width * 0.1,
            }}>
            <Ionicons
              name="mail"
              size={25}
              style={{
                color: footerIconsOff,
                marginTop: -10,
              }}
            />

            <Text
              style={{
                color: footerIconsOff,
                fontSize: width * 0.02,
                marginTop: 4,
                fontWeight: 'bold',
              }}>
              التبرع برسالة
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('FavoriteCases', {
                user_data: this.state.user_data,
              });
            }}
            style={{
              alignItems: 'center',
              width: width * 0.16,
              height: height * 0.08,
              justifyContent: 'center',
              // marginRight: width * 0.1,
            }}>
            <Ionicons
              name="star"
              size={25}
              style={{
                color: footerIconsOff,
                marginTop: -10,
              }}
            />
            <Text
              style={{
                color: footerIconsOff,
                fontSize: width * 0.02,
                marginTop: 4,
                fontWeight: 'bold',
              }}>
              المفضلة
            </Text>
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: '#FFFFFF',
              width: 70,
              height: 70,
              borderRadius: 60,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: -30,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MyAccount');
              }}
              style={{
                width: width * 0.15,
                height: height * 0.07,
                borderRadius: 40,
                elevation: 2,
                backgroundColor: footerView,
                justifyContent: 'center',
              }}>
              {/* <Ionicons
                name="heart-circle-outline"
                size={30}
                style={{
                  color: footerIcons,
                  marginTop: 10

                }}
              /> */}
              <Image
                source={require('../Images/wired-outline-21-avatar.gif')}
                style={{
                  width: width * 0.13,
                  height: height * 0.05,
                  alignSelf: 'center',
                }}></Image>
              {/* <Text style={{ color: footerIcons, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
              المفضلة
            </Text> */}
            </TouchableOpacity>
          </View>
        </View>
        {/* </View> */}

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
                  label={'الاسم'}
                  value={this.state.user_data.user_name}
                  onChangeText={value => {
                    this.setState({
                      user_data: {
                        user_name: value,
                      
                      },
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
                  
                    
                    this.setState({ showInfo_name: false });
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
                  value={this.state.user_data.user_phone}
                  onChangeText={value => {
                    this.setState({
                      user_data: {
                        
                        user_phone: value,
                      },
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
                    // this.props.navigation.navigate('Accounts', {
                    //   // achievements: this.state.charityDetails,
                    // });
                   
                    this.setState({ showInfo_phone: false });
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

        {/* email edits..... */}
        <Modal
          transparent
          statusBarTranslucent
          visible={this.state.showInfo_email}
          onRequestClose={() => {
            showModelInfo = this.state.showInfo_email;
            this.setState({ showInfo_email: !showModelInfo });
          }}>
          <View style={styles.infoModalBackground}>
            <View style={styles.charityInfoBox}>
              {/* Header Of Charity Info Box */}
              <View style={styles.charityNameImgContainer}>
                <Hoshi
                  label={'البريد الالكتروني'}
                  value={this.state.user_data.user_email}
                  onChangeText={value => {
                    this.setState({
                      user_data: {
                       
                        user_email: value,
                       
                      },
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
                      this.setState({ showInfo_email: false });
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
                    

                    this.setState({ showInfo_email: false });
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

export default MyAccount;
