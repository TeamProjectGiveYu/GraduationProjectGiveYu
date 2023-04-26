/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  // KeyboardAvoidingView,
} from 'react-native';
import {Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {
  smallBackground,
  bigBackground,
  searchIcon,
  categories,
  Footer,
  clickedIconFooter,
  unclickedIconFooter,
  secondaryColor,
  headerColor,
  loginView,
  logintext,
  loginIcons,
  textInputcolor,
  iconContainer,
  eyeColor,
  textinTextinput,
  errorColor,
} from './Colors';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Cases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CasesOfCurrentCategory: this.props.route.params.CasesOfCurrentCategory,
    };
  }

  render() {
    return (
      <>
        {/* Header */}
        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
        <View
          style={{
            flex: 0.14,
            backgroundColor: '#fff',
          }}>
          <View style={styles.headerContainer}>
            {/* Page Tittle */}
            <View
              style={{
                flexWrap: 'wrap',
                alignSelf: 'center',
                // backgroundColor: '#f0f',
              }}>
              <Text style={styles.styleOfPageTitle}>الحالات</Text>
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
        <View style={styles.containerOfAllCases}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            keyboardShouldPersistTaps="handled">
            {/* Map Of Cases */}
            {this.state.CasesOfCurrentCategory.map((case_item, index) => (
              <View style={styles.viewOfScrolledCases}>
                {case_item.case_id % 2 == 0 ? (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('CaseDetails', {
                        details: case_item,
                      });
                    }}
                    style={[
                      styles.containerOfEachCase,
                      {
                        borderTopLeftRadius: case_item.case_id == 0 ? 40 : 0,
                        borderTopRightRadius: case_item.case_id == 0 ? 40 : 0,
                        // backgroundColor:
                        //   case_item.case_id % 2 == 0 ? bigBackground : bigBackground ,
                      },
                    ]}>
                    {/* Case Image */}
                    <View style={styles.containerOfCaseImage}>
                      <Image
                        resizeMode="center"
                        source={require('../Images/man.png')}
                        style={{width: width * 0.3, height: height * 0.15}}
                      />
                    </View>

                    {/* Case Description */}
                    <View style={styles.containerOfCaseDescription}>
                      <Text style={styles.styleOfCaseNumText}>
                        {case_item.case_name}
                      </Text>
                      <Text
                        style={styles.styleOfCaseDescriText}
                        numberOfLines={2}>
                        {case_item.case_info}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    onPress={() => {
                      this.props.navigation.navigate('CaseDetails', {
                        details: case_item,
                      });
                    }}
                    style={[
                      styles.containerOfEachCase,
                      {
                        borderTopLeftRadius: case_item.case_id == 0 ? 40 : 0,
                        borderTopRightRadius: case_item.case_id == 0 ? 40 : 0,
                        // backgroundColor:
                        //   case_item.case_id % 2 == 0 ? loginView : bigBackground,
                      },
                    ]}>
                    {/* Case Description  */}
                    <View style={styles.containerOfCaseDescription}>
                      <Text style={styles.styleOfCaseNumText}>
                        {case_item.case_name}
                      </Text>
                      <Text
                        style={styles.styleOfCaseDescriText}
                        numberOfLines={2}>
                        {case_item.case_info}
                      </Text>
                    </View>

                    {/* Case Image  */}
                    <View style={styles.containerOfCaseImage}>
                      <Image
                        resizeMode="center"
                        source={require('../Images/woman.png')}
                        style={{width: width * 0.3, height: height * 0.15}}
                      />
                    </View>
                  </TouchableOpacity>
                )}
              </View>
            ))}
          </ScrollView>
        </View>

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
    backgroundColor: '#fff',
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
    backgroundColor: '#fff',
    shadowColor: '#000',
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
