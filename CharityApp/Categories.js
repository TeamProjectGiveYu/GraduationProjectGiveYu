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
  Alert,
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
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;
import axios from 'axios';

export default class Categories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      charity_data: this.props.route.params.charity_data,
    };
  }

  


  // Functions delete

  DeleteCategory(index) {
    console.log(index)
    let newArray = this.state.xxxxxxxx;
    let category_id = newArray[index].xxxxxxx;
    let dataToSend = {
      category_id: xxxxxxxxxx,
    }
    axios.post("http://#########/xXXxxxx/delete_category.php",
      dataToSend)
      .then(res => {
        if (res.data == "deleted_success") {
          newArray.splice(index, 1)
          this.setState({ x: newArray });
          alert("تم الحذف بنجاح")
          this.setState({ x: newArray })
        } else if (res.data == "deleted_failed") {
          alert("حدث خطأ ما")
        } else if (res.data == 'case_not_found') {
          alert("الحالة ليست موجودة");
        }
      })
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
                {this.state.categories.map((item, index) => (
                  // Each Category 
                  <TouchableOpacity
                    key={index}
                    style={[styles.eachCategoryContainer]}
                    onPress={() => {
                      this.props.navigation.navigate('CasesOfCategory', {
                        categories: item
                      }
                      )
                    }}
                  >
                    {/* Category Delete Icon */}
                    <TouchableOpacity style={[styles.deleteIconContainer]}
                      onPress={() => {
                        Alert.alert('', 'هل تريد الحذف ', [
                          { text: 'نعم', onPress: () => this.DeleteCategory(index) },
                          { text: 'لا', onPress: () => null },
                        ]);

                      }}
                    >
                      <Feather name='x' size={20} color={secondaryColor} />
                    </TouchableOpacity>

                    {/* Category Logo  */}
                    <Image
                      resizeMode="center"
                      style={styles.categoryLogoStyle}
                      source={{ uri: item.category_logo }}
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
            onPress={() => {
              this.props.navigation.navigate('NewCategory', {
                charity_data: this.state.charity_data
              })
            }}
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
    width: width,
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
    width: width * 0.437,
    height: height * 0.220,
    marginLeft: RFValue(15),
    marginTop: height * 0.02,
    backgroundColor: '#ffffff',
    marginBottom: height * 0.01,
    paddingHorizontal: height * 0.02,
    shadowOffset: { width: 0, height: 7 },
    // backgroundColor:'#f00',
  },
  deleteIconContainer: {
    borderWidth: 1,
    borderColor: '#000',
    width: width * 0.058,
    alignSelf: 'flex-start',
    marginTop: height * 0.007,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius:width*0.05,
    borderRadius: width * 0.07,
    // backgroundColor:'#ff0',
  },
  categoryLogoStyle: {
    width: width * 0.3,
    // height: height * 0.13,
    height: height * 0.1,
    alignSelf: "center",
    // backgroundColor:'#f0f',
  },
  categoryName: {
    color: '#1D1D1D',
    fontWeight: 'bold',
    textAlign: "center",
    fontSize: RFValue(16),
    // marginTop: RFValue(10),
    // backgroundColor:"#0f0"
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





