/* eslint-disable prettier/prettier */
/* eslint-disable no-dupe-keys */
/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from 'react-native';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {bigBackground, headerColor} from './Colors';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import axios from 'axios';
import {RFValue} from 'react-native-responsive-fontsize';

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
} from './Colors';

class CaseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedstate: false,
      details: this.props.route.params.details,
      icon_name: 'ios-bookmark-outline',
      // index:details.case_id
    };
  }
  addFavCase() {
    let dataToSend = {
      user_id: 1,
      case_id: this.state.details.case_id,
      charity_id: 1,
    };
    let icon_name = this.state.icon_name;
    axios
      .post(
        'http://192.168.1.7/GP_backend/insertFavouriteCases.php',
        dataToSend,
      )
      .then(res => {
        console.log(res.data);
        if (res.data == 'favCases_added') {
          alert('Your case Added Successfully ✔️');
          this.setState({icon_name: 'ios-bookmark'});
        } else if (res.data == 'failed_to_add_favCases') {
          alert('حدث خطأ ما');
        } else if (res.data == 'case_already_exist') {
          alert('الحالة موجودة بالفعل');
        }
      });
  }

  cancel(index) {
    console.log(index);
    let newArray = this.state.details;
    // let case_id = newArray[case_id].case_id;
    let case_id = this.state.details.case_id;
    let dataToSend = {
      case_id: case_id,
    };
    axios
      .post('http://192.168.1.7/GP_backend/deleteFavCases.php', dataToSend)
      .then(res => {
        console.log(res.data);
        if (res.data == 'deleted_success') {
          newArray.splice(index, 1);
          alert('deleted_sucess');
          this.setState({details: newArray});
        } else if (res.data == 'deleted_failed') {
          alert('حدث خطأ ما');
        } else if (res.data == 'favCases_not_found') {
          alert('cases Not Found..!');
        }
      });
  }

  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        <View
          style={{
            flex: 0.3,
            backgroundColor: bigBackground,
            // backgroundColor: "#ff0",
          }}>
          <View
            style={{
              flexDirection: 'row-reverse',
              marginTop: RFValue(25),
              justifyContent: 'space-between',
            }}>
            {/* the saved icon */}
            <TouchableOpacity
              onPress={() => {
                this.addFavCase();
                this.cancel(this.state.details.case_id);
              }}
              style={{
                // backgroundColor: '#0f0',
                alignItems: 'center',
                width: width * 0.25,
                justifyContent: 'center',
                marginTop: height * -0.01,
              }}>
              <Ionicons
                name={this.state.icon_name}
                size={35}
                color={loginView}
              />
            </TouchableOpacity>

            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  // marginRight: width * 0.2,
                  fontSize: 22,
                  fontWeight: 'bold',
                  color: headerColor,
                  // marginTop: height * -0.01,
                }}>
                {this.state.details.case_name}
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
                marginHorizontal: width * 0.03,
                borderWidth: 1,
                borderColor: secondaryColor,
                marginLeft: RFValue(15),
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
            marginTop: height * -0.15,
          }}>
          <ScrollView>
            <Text
              style={{
                color: logintext,
                fontSize: 22,
                marginLeft: width * 0.03,
                marginTop: height * 0.04,
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: 'bold',
              }}>
              شرح الحالة:
            </Text>
            <Text
              style={{
                marginLeft: width * 0.03,
                marginTop: height * 0.01,
                fontSize: 18,
                width: '95%',
                color: '#000',
                textAlign: 'justify',
                paddingHorizontal: '5%',
                minHeight: height * 0.35,
                fontSize: 20,
                fontWeight: '500',
              }}>
              {this.state.details.case_info}
            </Text>

            <Text
              style={{
                color: logintext,
                fontSize: 22,
                marginLeft: width * 0.03,
                marginTop: height * -0.05,
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: 'bold',
              }}>
              العمر:
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'justify',
                  paddingHorizontal: '5%',
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                {this.state.details.case_age} سنه
              </Text>
            </Text>

            <Text
              style={{
                color: logintext,
                fontSize: 22,
                marginLeft: width * 0.03,
                marginTop: height * 0.04,
                textAlign: 'justify',
                paddingHorizontal: '5%',
                fontWeight: 'bold',
              }}>
              المبلغ المطلوب:
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'justify',
                  paddingHorizontal: '5%',
                  fontSize: 20,
                  fontWeight: '500',
                }}>
                {this.state.details.case_money} جنيها
              </Text>
            </Text>
            <Text
              style={{
                color: '#000',
                fontSize: 20,
                marginLeft: width * 0.03,
                marginTop: height * 0.02,
                textAlign: 'justify',
                paddingHorizontal: '5%',
              }}>
              قال رَسُولَ اللهِ -صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: كُلُّ امْرِئٍ
              فِي ظِلِّ صَدَقَتِهِ حَتَّى يُفْصَلَ بَيْنَ النَّاسِ{' '}
            </Text>

            <View style={{marginBottom: '5%'}}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('TypeOfDonate');
                }}
                style={{
                  width: '42%',
                  height: 60,
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'center',
                  borderRadius: 11,
                  backgroundColor: logintext,
                  marginTop: height * 0.05,
                  // position: 'relative',
                }}>
                <Text
                  style={{
                    // marginTop: height * 0.01,
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#fff',
                    textAlign: 'center',
                  }}>
                  التبرع
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        {/* footer */}
        {/* <View
          style={{
            height: height * 0.09,
            backgroundColor: footerView,
            // backgroundColor:footerIconsOff,
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            elevation: 15,
            shadowRadius: 9.51,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 7 },
            shadowOpacity: 0.43,
            justifyContent: 'space-around',
            bottom: 0,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomePage');
            }}
            style={{
              alignItems: 'center',
              width: width * 0.16,
              height: height * 0.08,
              justifyContent: 'center',
              // marginRight: width * 0.05,
            }}>
            <Ionicons name="home-outline" size={30}
              style={{
                color: footerIconsOff,
                marginTop: 10
              }}></Ionicons>
            <Text style={{ color: footerIconsOff, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
              الرئيسية
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('DonateInstitutions');
            }}
            style={{
              alignItems: 'center',
              width: width * 0.16,
              height: height * 0.08,
              justifyContent: 'center',
              // marginRight: width * 0.1,
            }}>
            <Ionicons
              name="mail-outline"
              size={30}
              style={{
                color: footerIconsOff,
                marginTop: 10

              }}
            />

            <Text style={{ color: footerIconsOff, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
              التبرع برسالة
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('FavoriteCases');
            }}
            style={{
              alignItems: 'center',
              width: width * 0.16,
              height: height * 0.08,
              justifyContent: 'center',
              // marginRight: width * 0.1,
            }}>
            <Ionicons
              name="heart-circle-outline"
              size={30}
              style={{
                color: footerIcons,
                marginTop: 10

              }}
            />
            <Text style={{ color: footerIcons, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
              المفضلة
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('MyAccount');
            }}
            style={{
              alignItems: 'center',
              width: width * 0.16,
              height: height * 0.08,
              justifyContent: 'center',
              // marginRight: width * 0.1,
            }}>
            <Ionicons
              name="person-circle-outline"
              size={30}
              style={{
                color: footerIconsOff,
                marginTop: 10

              }}
            />
            <Text style={{ color: footerIconsOff, fontSize: width * .02, marginTop: 4, fontWeight: 'bold' }}>
              الملف الشخصى
            </Text>
          </TouchableOpacity>
        </View> */}
      </>
    );
  }
}

export default CaseDetails;
