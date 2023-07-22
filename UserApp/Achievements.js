/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Share, StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import Ionicons from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import axios from 'axios'; 'react-native-vector-icons/FontAwesome5';
import {
  smallBackground,
  bigBackground,
  searchIcon,
  categories,
  Footer,
  clickedIconFooter,
  unclickedIconFooter, secondaryColor, headerColor,
  loginView, logintext, loginIcons, textInputcolor, iconContainer, eyeColor, textinTextinput, errorColor
} from './Colors';


export default class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charityDetails: this.props.route.params.charityDetails,
      found: true,
    };
  }



  sharePost(index) {
    let achieve = this.state.charityDetails.achievements;
    let charity = this.state.charityDetails;
    Share.share({
      message: charity.user_name + ' \n' + achieve[index].achievement_text,
      url: 'https://www.example.com/newAchievement',
      title: 'newAchievement',
    })
      .then(result => {
        if (result.action === Share.sharedAction) {
          console.log('Content shared successfully');
        } else if (result.action === Share.dismissedAction) {
          console.log('Content sharing dismissed');
        }
      })
      .catch(error => {
        console.error(error.message);
      });
  }

  render() {
    return (
      <>
        {/* Header */}
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        <View
          style={{
            flex: 0.1,
            backgroundColor: "#fff"
          }}>
          <View style={styles.headerContainer}>

            {/* Page Tittle */}
            <View
              style={{
                flexWrap: 'wrap',
                alignSelf: 'center',
                // backgroundColor: '#f0f',
              }}>
              <Text style={styles.styleOfPageTitle}>الانجازات</Text>
            </View>

            {/* right Arrow Container */}
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

        {this.state.charityDetails.achievements.length != 0 ? (
          <View
            style={{
              flex: 1,
              // backgroundColor:"#ff0"
              backgroundColor: bigBackground,
              // marginTop: height * -0.19,
            }}>
            <ScrollView>
              <View
                style={{
                  // flexDirection: 'row',
                  // flexWrap: 'wrap',
                  marginTop: '1%',
                  marginBottom: '1.5%',
                  // marginRight: '1%',
                }}>
                {this.state.charityDetails.achievements.map((item, index) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor: '#fff',
                      marginTop: 10,
                      borderRadius: 15,
                      width: '90%',
                      elevation: 2,
                      // marginLeft: 13,
                      alignSelf: 'center',
                      // height: height * 0.3,
                      alignContent: 'center',
                    }}>

                    <View>
                      <View>

                        <Text
                          style={{
                            fontSize: 17,
                            //   fontWeight: '800',
                            color: '#333',
                            //   textAlign: 'center',
                            padding: 10,
                          }}>
                          {item.achievement_text}
                        </Text>

                      </View>


                      {/* func share */}
                      <View
                        style={{
                          padding: 5,
                          paddingBottom: 10,
                        }}>
                        <TouchableOpacity
                          onPress={() => {
                            this.sharePost(index);
                          }}
                          style={{
                            // backgroundColor: '#ff0',
                            marginRight: RFValue(250),
                            alignSelf: 'center',
                          }}>
                          <Ionicons
                            name="share-social"
                            size={30}
                            style={{
                              color: '#4e7d91',
                            }}
                          />
                        </TouchableOpacity>

                        <View
                          style={{
                            marginTop: RFValue(-23),
                            marginLeft: RFValue(50),
                          }}>
                          <Text
                            style={{
                              fontSize: 17,
                              color: '#4e7d91',
                            }}>
                            مشاركه
                          </Text>
                        </View>

                      </View>


                    </View>

                  </View>
                ))}
              </View>
            </ScrollView>
          </View>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: bigBackground,
              alignItems:"center",
              justifyContent:"center",
            }}>
              <Image
                source={require('../Images/notFoundCases.png')}
                resizeMode="contain"
                style={{ width: 300, height: 450, alignSelf: 'center',marginTop:RFValue(-60) }}
              />
              <Text style={{ fontSize: 20, color: '#000', fontWeight: 'bold', textAlign: "center" }}>
                لم يتم اضافة انجازات حتي الأن
              </Text>
            </View>
         

        )}






        {/* Footer */}

      </>
    );
  }
}

const styles = StyleSheet.create({
  //Header:
  // -----------------------------------------------------------------------------------
  headerContainer: {
    alignItems: 'center',
    marginTop: height * 0.033,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.05,
  },
  leftArrowContainer: {
    width: width * 0.1,
    height: height * 0.1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor:'#0ff',
  },
  styleOfPageTitle: {
    fontSize: 22,
    color: headerColor,
    width: width * 0.6,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: width * 0.15,
    // backgroundColor:'#ff0',
  },
  //Body:
  // -----------------------------------------------------------------------------------
  containerOfAllCases: {
    flex: 1,
    overflow: 'hidden',
    // backgroundColor: '#E5ECF4',
    backgroundColor: "#fff",
  },

  viewOfScrolledCases: {
    // flex:1,
    // paddingTop: height * 0.15,
    marginTop: height * 0.0005,
    // borderTopLeftRadius: 40,
    // borderTopRightRadius: 40,
    // backgroundColor: '#f00',
  },
  containerOfEachCase: {
    width: width,
    padding: width * 0.02,
    alignSelf: 'center',
    flexDirection: 'row',
    height: height * 0.2,
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: loginView,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 2,
  },
  containerOfCaseImage: {
    width: width * 0.3,
    height: height * 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#f0f'
  },
  containerOfCaseDescription: {
    width: width * 0.53,
    height: height * 0.17,
    padding: width * 0.001,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#ff0'
  },
  styleOfCaseNumText: {
    color: '#000',
    fontWeight: 'bold',
    fontFamily: 'Inter',
    marginLeft: width * 0.07,
    fontSize: RFValue(22),
    marginBottom: width * 0.03,
    // textAlign:"justify"
  },
  styleOfCaseDescriText: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: RFValue(16),
    // eslint-disable-next-line no-dupe-keys
    // textAlign: 'justify',
  },
});
