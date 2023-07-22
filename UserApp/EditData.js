/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StatusBar,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';
import AsyncStorage from '@react-native-async-storage/async-storage';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class EditData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
     
      user_name: '',
      user_email: '',
      user_phone: '',
      // UserAddress: '',
      // UserImage: '',
    };
  }
  render() {
    return (
      <>
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
                  color: '#E5ECF4',
                  marginTop: height * 0.02,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            flex: 0.77,
            backgroundColor: '#C7DBE9',
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            marginTop: height * -0.15,
          }}>
          {/* <ScrollView> */}
          {/* bottum type of donate */}
          <View
            style={{
              borderRadius: 300,
              borderWidth: 6,
              alignSelf: 'stretch',
              width: RFValue(140),
              marginLeft: width * 0.28,
              top: -50,
              borderColor: '#A2C6DC',
              // height: height * 0.25,
              // borderColor: '#ff0',
              height: RFValue(140),
            }}>
            <View
              style={{
                backgroundColor: '#A2C6DC',
                width: RFValue(115),
                height: RFValue(115),
                alignSelf: 'center',
                borderRadius: 200,
                top: 6,
                alignContent: 'center',
              }}>
              <Icon
                name="user"
                size={80}
                color={'#fff'}
                style={{
                  alignSelf: 'center',
                  marginTop: height * 0.02,
                }}
              />
            </View>
            <TouchableOpacity
              style={{
                backgroundColor: '#A2C6DC',
                width: RFValue(45),
                height: RFValue(40),
                alignSelf: 'center',
                marginTop: RFValue(-8),
                borderRadius: 20,
                elevation: 20,
                justifyContent: 'center',
              }}>
              <Icon
                name="camera"
                color={'#000'}
                size={27}
                style={{
                  alignSelf: 'center',
                  //   marginTop: RFValue(10),
                  //   justifyContent: 'center',
                  //   color: '#000',
                }}
              />
            </TouchableOpacity>
          </View>
          <ScrollView>
            <Text
              style={{
                fontSize: 22,
                color: '#4e7d91',
                //   textAlign: 'center',
                // marginTop: 10,
                marginLeft: 10,

                fontWeight: 'bold',
              }}>
              الاسم
            </Text>
            <TextInput
              value={this.state.user_name}
              onChangeText={value => {
                this.setState({ user_name: value });
              }}
              style={{
                width: width * 0.9,
                borderBottomWidth: 1,
                borderBottomColor: '#4e7d91',
                alignSelf: 'center',
                padding: 10,
                color: '#4e7d91',
                fontSize: 17,
                marginBottom: 15,
              }}
            />
            <Text
              style={{
                fontSize: 22,
                color: '#4e7d91',
                //   textAlign: 'center',
                marginTop: 10,
                marginLeft: 10,

                fontWeight: 'bold',
              }}>
              رقم الهاتف
            </Text>
            <TextInput
              value={this.state.user_phone}
              onChangeText={value => {
                this.setState({ user_phone: value });
              }}
              style={{
                width: width * 0.9,
                borderBottomWidth: 1,
                borderBottomColor: '#4e7d91',
                alignSelf: 'center',
                padding: 10,
                color: '#4e7d91',
                fontSize: 17,
                marginBottom: 15,
              }}
              keyboardType="number-pad"
            />
            <Text
              style={{
                fontSize: 22,
                color: '#4e7d91',
                //   textAlign: 'center',
                marginTop: 10,
                marginLeft: 10,

                fontWeight: 'bold',
              }}>
              البريد الالكتروني
            </Text>
            <TextInput
              value={this.state.user_email}
              onChangeText={value => {
                this.setState({ user_email: value });
              }}
              style={{
                width: width * 0.9,
                borderBottomWidth: 1,
                borderBottomColor: '#4e7d91',
                alignSelf: 'center',
                padding: 10,
                color: '#4e7d91',
                fontSize: 17,
                marginBottom: 15,
              }}
              keyboardType="email-address"
            />

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('MyAccount', {
                  user_name: this.state.user_name,
                });
              }}
              style={{
                alignSelf: 'center',
                width: width * 0.5,
                backgroundColor: '#FC854B',
                height: height * 0.08,
                marginBottom: 20,
                borderRadius: 20,
                marginTop: height * 0.07,
                justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 22,
                  color: '#fff',
                  textAlign: 'center',
                  fontWeight: 'bold',
                }}>
                حفظ
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* </View> */}

        <View
          style={{
            flex: 0.1,
            backgroundColor: '#E5ECF4',
            flexDirection: 'row-reverse',
            flexWrap: 'wrap',
            elevation: 15,
            shadowRadius: 9.51,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 7 },
            shadowOpacity: 0.43,

            // shadowRadius: 7,
            // shadowOpacity: 2.0,
          }}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('HomePage');
            }}
            style={{
              // backgroundColor: '#fff',
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
              // backgroundColor: '#fff',
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
            onPress={() => {
              this.props.navigation.navigate('FavoriteCases');
            }}
            style={{
              // backgroundColor: '#fff',
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
              // backgroundColor: '#fff',
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

export default EditData;

