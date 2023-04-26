/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable eqeqeq */
import React from 'react';
import {
  StatusBar,
  Image,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  smallBackground,
  bigBackground,
  searchIcon,
  categories,
  Footer,
  clickedIconFooter,
  unclickedIconFooter,
  loginView, logintext, loginIcons, textInputcolor, iconContainer, eyeColor, textinTextinput, errorColor
} from './Colors';
// import Icon from 'react-native-vector-icons/FontAwesome5';
import { RFValue } from 'react-native-responsive-fontsize';
import Ionicons from 'react-native-vector-icons/Ionicons';

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  // eslint-disable-next-line no-lone-blocks
  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 2000);
  }

  render() {
    return (
      <>
        {this.state.isVisible === true ? (
          <>
            <StatusBar backgroundColor={bigBackground} />
            <View
              style={{
                backgroundColor: bigBackground,
                justifyContent: 'center',
                // alignSelf: 'center',
                flex: 1,
              }}>
              <Image
                source={require('../Images/logo.png')}
                resizeMode='center'
                style={{
                  alignSelf: 'center',
                  width: width * 0.5,
                  height: height * 0.5,
                  marginTop: height * -0.1,
                }}
              />
              <Text
                style={{
                  color: logintext,
                  alignSelf: 'center',
                  fontSize: 30,
                  fontWeight: 'bold',
                  marginTop: height * -0.1,
                }}>
                GiveYu
              </Text>
            </View>
          </>
        ) : (
          <>

          </>
        )}
      </>
    );
  }
}
