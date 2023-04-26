/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  loginView,
  footerView,
  footerIcons,
  bigBackground,
  secondaryColor,
} from '../UserApp/Colors';
import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      // donationCategories: [
      //   {
      //     category_id: 0,
      //     category_name: 'مبلغ نقدي',
      //     category_logo: require('../Images/MoneyCate.png'),
      //   },
      //   {
      //     category_id: 1,
      //     category_name: 'الملابس',
      //     category_logo: require('../Images/ClothesCate.png'),
      //   },
      //   {
      //     category_id: 2,
      //     category_name: 'الطعام',
      //     category_logo: require('../Images/FoodCateg.png'),
      //   },
      //   {
      //     category_id: 3,
      //     category_name: 'الدواء',
      //     category_logo: require('../Images/MedicineCate.png'),
      //   },
      //   {
      //     category_id: 4,
      //     category_name: 'الأجهزة',
      //     category_logo: require('../Images/DevicesCate.png'),
      //   },
      //   {
      //     category_id: 5,
      //     category_name: 'الكتب',
      //     category_logo: require('../Images/EducationCate.png'),
      //   },
      // ]
      charityCategories: this.props.route.params.charityCategories,

    };
  }

  render() {
    return (
      <>

        <StatusBar backgroundColor={loginView} barStyle={'light-content'} />

        {/* Header  */}
        <View style={styles.headerContainer}>
          {/* Header Arrow  */}
          <TouchableOpacity
            style={styles.headerArrowContainer}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <FontAwesome5 name="chevron-right" size={20} style={{ color: secondaryColor }} />
          </TouchableOpacity>

          {/* Header Tittle  */}
          <View style={styles.headerTittleContainer}>
            <Text style={styles.headerTittleTxtStyle}>فئات التبرع</Text>
          </View>
        </View>


        {/* Body */}
        <View style={styles.bodyContainer}>
          <ScrollView>

            <View style={styles.categoriesContainer}>
              <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                {this.state.charityCategories.map((item, index) => (
                  // Each Category 
                  <TouchableOpacity
                    key={index}
                    style={styles.eachCategoryContainer}
                    onPress={() => {
                      this.props.navigation.navigate('CasesOfCategory', {
                        categoryDetails: item,
                      }
                      )
                    }}
                  >
                    {/* Category Logo  */}
                    < Image
                      resizeMode="center"
                      style={styles.categoryLogoStyle}
                      source={item.category_logo}
                    />

                    {/* Categoty Name  */}
                    < View >
                      <Text style={styles.categoryName}>{item.category_name}</Text>
                    </View>

                  </TouchableOpacity>
                ))}
              </View>
            </View >

          </ScrollView >

          {/* Add Category Btn  */}
          < TouchableOpacity
            style={styles.addCategoryBtn}
          // onPress={() => {
          //   this.props.navigation.navigate('')
          // }}
          >
            <FontAwesome5 name="plus" size={18} color={footerView} />
          </TouchableOpacity >

        </View >

      </>
    );
  }
}


const styles = StyleSheet.create({
  // Header Style
  // ------------------------------------------------------------------------
  headerContainer: {
    width: width,
    alignSelf: "center",
    alignItems: "center",
    flexDirection: "row",
    height: height * 0.09,
    justifyContent: "space-evenly",
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
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    paddingRight: width * 0.05,
    // backgroundColor:'#0ff',
  },
  headerTittleTxtStyle: {
    color: "#000",
    fontWeight: "600",
    textAlign: "center",
    fontSize: RFValue(18),
  },

  // Body Style
  // ------------------------------------------------------------------------
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: bigBackground,
    // backgroundColor:'#0f0',
  },
  categoriesContainer: {
    flexWrap: 'wrap',
    marginBottom: height * 0.03,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: "space-between",
    paddingBottom: height * 0.015,
    // backgroundColor: '#00f',
  },
  eachCategoryContainer: {
    elevation: 10,
    borderRadius: 15,
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * .437,
    height: height * 0.2,
    marginLeft: RFValue(15),
    marginTop: height * 0.02,
    backgroundColor: '#ffffff',
    marginBottom: height * 0.01,
    paddingHorizontal: height * 0.02,
    shadowOffset: { width: 0, height: 7 },
    // backgroundColor:'#f00',
  },
  categoryLogoStyle: {
    width: width * 0.3,
    height: height * 0.13,
    alignSelf: "center",
  },
  categoryName: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: RFValue(17),
  },
  addCategoryBtn: {
    bottom: 0,
    elevation: 5,
    right: RFValue(15),
    shadowRadius: 9.51,
    shadowColor: '#000',
    shadowOpacity: 0.43,
    width: width * 0.145,
    position: 'absolute',
    alignItems: 'center',
    alignSelf: 'flex-end',
    height: height * 0.07,
    padding: width * 0.009,
    borderRadius: width * 0.5,
    justifyContent: 'center',
    marginBottom: height * 0.03,
    backgroundColor: footerIcons,
    shadowOffset: { width: 0, height: 7 },
  },
});





