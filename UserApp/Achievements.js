/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Share,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Dimensions} from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import Ionicons from 'react-native-vector-icons/Ionicons';
import {RFValue} from 'react-native-responsive-fontsize';

class Achievements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      achievements: this.props.route.params.achievements,
    };
  }
  sharePost(index) {
    let achieve = this.state.achievements.achievements;
    let charity = this.state.achievements;
    Share.share({
      message: charity.CharityName + ' \n' + achieve[index].AchievementPost,
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
        <StatusBar backgroundColor="#4e7d91" />
        <View
          style={{
            flex: 0.3,
            backgroundColor: '#4e7d91',
          }}>
          <View
            style={{
              // flex: 0.1,
              //   backgroundColor: '#f0f',
              flexDirection: 'row-reverse',
              marginTop: height * 0.01,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{
                // backgroundColor: '#fff',
                alignItems: 'center',
                width: width * 0.2,
                justifyContent: 'center',
              }}>
              <Icon
                name="chevron-left"
                size={30}
                style={{
                  color: '#fff',
                }}
              />
            </TouchableOpacity>
            <View style={{alignSelf: 'center'}}>
              <Text
                style={{
                  //   marginRight: width * 0.2,
                  fontSize: 30,
                  fontWeight: 'bold',
                  color: '#fff',
                  //   flexWrap: 'wrap',
                }}>
                الانجازات{'    '}
              </Text>
            </View>
          </View>
        </View>
        {/* Body */}

        <View
          style={{
            flex: 0.77,
            backgroundColor: '#E5ECF4',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            marginTop: height * -0.19,
          }}>
          <ScrollView style={{marginTop: '5%'}}>
            <View
              style={{
                // flexDirection: 'row',
                // flexWrap: 'wrap',
                marginTop: '1%',
                marginBottom: '1.5%',
                // marginRight: '1%',
              }}>
              {this.state.achievements.achievements.map((item, index) => (
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
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Footer */}
        <View
          style={{
            flex: 0.1,
            backgroundColor: '#E5ECF4',
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            elevation: 100,
            shadowRadius: 9.51,
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 7},
            shadowOpacity: 0.43,
            // borderRadius: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomePage');
            }}
            style={{
              alignItems: 'center',
              width: width * 0.15,
              height: height * 0.1,
              justifyContent: 'center',
              marginRight: width * 0.05,
            }}>
            <Icon
              name="home"
              size={30}
              style={{
                color: '#A2C6DC',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('DonateInstitutions');
            }}
            style={{
              alignItems: 'center',
              width: width * 0.15,
              height: height * 0.1,
              justifyContent: 'center',
              marginRight: width * 0.1,
            }}>
            <Icon
              name="coins"
              size={30}
              style={{
                color: '#A2C6DC',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              alignItems: 'center',
              width: width * 0.15,
              height: height * 0.1,
              justifyContent: 'center',
              marginRight: width * 0.1,
            }}>
            <Icon
              name="heart"
              size={30}
              style={{
                color: '#A2C6DC',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('MyAccount');
            }}
            style={{
              alignItems: 'center',
              width: width * 0.15,
              height: height * 0.1,
              justifyContent: 'center',
              marginRight: width * 0.1,
            }}>
            <Icon
              name="user"
              size={30}
              style={{
                color: '#A2C6DC',
              }}
            />
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

export default Achievements;
