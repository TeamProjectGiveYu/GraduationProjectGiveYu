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
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { bigBackground, headerColor } from './Colors';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import axios from 'axios';
import { RFValue } from 'react-native-responsive-fontsize';


import {
  smallBackground,
  searchIcon,
  categories,
  Footer,
  clickedIconFooter,
  unclickedIconFooter, secondaryColor,
  loginView, logintext, loginIcons,
  textInputcolor, iconContainer, eyeColor, textinTextinput, errorColor
} from './Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';

class CaseDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      savedstate: false,
      details: this.props.route.params.details,
      icon_name_save: "ios-bookmark-outline",
      icon_name: false,
      // index:details.case_id
  
      pressed: false,
    };
  }

  componentDidMount() {
   
    this.get_icon()
  }

 

  change_IconSave() {
    let icon_name = this.state.icon_name
    this.setState({ icon_name: !icon_name })
    this.setState({ icon_name_save: 'ios-bookmark' });
    this.stroe_icon(!icon_name)
  }

  async stroe_icon(value) {
    await AsyncStorage.setItem('icon_name', JSON.stringify(value))
  }

  async get_icon() {
    let name = await AsyncStorage.getItem('icon_name')
    if (name == null || name == '') {
      name = "false"
    }
    name = JSON.parse(name)
    this.setState({ icon_name: name })
  }

  async delete(value) {
    await AsyncStorage.removeItem('icon_name', JSON.stringify(value))
    this.setState({ icon_name_save: 'ios-bookmark-outline' });
  }


  render() {
    return (
      <>
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        <View
          style={{
            flex: 0.12,
            backgroundColor: bigBackground,
            flexDirection: 'row-reverse',
            justifyContent: "space-around"
          }}>

          {/* the saved icon */}

          <TouchableOpacity
            onPress={() => {

              // this.state.icon_name == 
              // 'bookmark-outline' ? 
              // this.cancel(this.state.details.case_id) : 
              // this.addFavCase

              this.addFavCase()
              // this.cancel(this.state.details.case_id)

            }}
            style={{
              // backgroundColor: '#0f0',
              alignItems: 'center',
              width: width * 0.25,
              justifyContent: 'center',

            }}>
            <Ionicons
              name=
              {
                this.state.icon_name ? 'ios-bookmark' : 'ios-bookmark-outline'
                // this.state.pressed
              }
              size={35}
              color={loginView}
            />
          </TouchableOpacity>



          <Text
            style={{



              fontWeight: 'bold',
              color: headerColor,
              fontSize: RFValue(18),
              fontWeight: 'bold',
              alignSelf: 'center',
              marginLeft: 30
            }}>
            الحالة:
            {this.state.details.case_identfication}
          </Text>


          {/* icon back arrow  */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{
              alignItems: 'center',
              width: width * 0.1,
              height: height * 0.04,
              borderRadius: RFValue(10),
              borderWidth: 1,
              borderColor: secondaryColor,
              marginLeft: RFValue(15),
              justifyContent: 'center',
              color: secondaryColor,
              alignSelf: "center",

            }}>
            <Icon
              name="chevron-right"
              size={20}
              style={{
                color: secondaryColor,
                // marginTop: height * 0.007,
              }}
            />
          </TouchableOpacity>

        </View>
        {/* Body */}
        <View
          style={{
            backgroundColor: bigBackground,
            flex: 1,
            // borderTopLeftRadius: 40,
            // borderTopRightRadius: 40,
          }}>
          <ScrollView>
            <Text style={{
              color: logintext,
              fontSize: 22, marginLeft: width * 0.03, textAlign: 'justify',
              paddingHorizontal: '5%', fontWeight: 'bold', marginTop: 20
            }}>شرح الحالة:</Text>
            <Text
              style={{
                marginLeft: width * 0.03,
                marginTop: height * 0.01,
                fontSize: 18,
                width: '95%',
                color: '#000',
                textAlign: 'justify',
                paddingHorizontal: '5%',
                minHeight: height * 0.15,
                // maxHeight:he
                fontSize: 20,
                fontWeight: '500',
              }}>
              {this.state.details.case_info}
            </Text>

            <Text style={{
              color: logintext,
              fontSize: 22,
              marginLeft: width * 0.03,
              marginTop: height * 0.05,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
            }}>العمر:
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

            <Text style={{
              color: logintext,
              fontSize: 22,
              marginLeft: width * 0.03,
              marginTop: height * 0.05,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
            }}>
              قيمة التبرع: {''}
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'justify',
                  paddingHorizontal: '5%',
                  fontSize: 20,
                  fontWeight: '500',
                  //   marginBottom: 20,
                }}>
                {this.state.details.case_needs}
              </Text>
            </Text>
            <Text style={{
              color: logintext,
              fontSize: 22,
              marginLeft: width * 0.03,
              marginTop: height * 0.05,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold'
            }}>
              المبلغ المطلوب:  {''}
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'justify',
                  paddingHorizontal: '5%',
                  fontSize: 20,
                  fontWeight: '500',
                  //   marginBottom: 20,
                }}>
                {this.state.details.case_money}
              </Text>
            </Text>
            <Text style={{
              color: logintext,
              fontSize: 22,
              marginLeft: width * 0.03,
              marginTop: height * 0.05,
              textAlign: 'justify',
              paddingHorizontal: '5%',
              fontWeight: 'bold',
            }}>
              مدى الخطورة:  {''}
              <Text
                style={{
                  fontSize: 18,
                  color: '#000',
                  textAlign: 'justify',
                  paddingHorizontal: '5%',
                  fontSize: 20,
                  fontWeight: '500',
                  //   marginBottom: 20,
                }}>
                {this.state.details.case_dangerous}
              </Text>
            </Text>
            <Text style={{
              color: '#000', fontSize: 20, marginLeft: width * 0.03, marginTop: height * 0.02, textAlign: 'justify',
              paddingHorizontal: '5%',
            }}>قال رَسُولَ اللهِ -صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ: كُلُّ امْرِئٍ فِي ظِلِّ صَدَقَتِهِ حَتَّى يُفْصَلَ بَيْنَ النَّاسِ </Text>

            <View style={{ marginBottom: '5%' }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('TypeOfDonate', {
                    user_data: this.state.user_data,
                    charityDetails:this.state.charityDetails
                  });
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



      </>
    );
  }
}

export default CaseDetails;
