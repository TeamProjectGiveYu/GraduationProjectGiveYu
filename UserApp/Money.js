/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
    StatusBar,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
    bigBackground,
    loginView, headerColor,
    secondaryColor,
    errorColor,
} from './Colors';
import axios from 'axios';
import { RFValue } from 'react-native-responsive-fontsize';
const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

class Money extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            CaseMoney: 0,
            CaseMoney_err: '',
            x: this.props.route.params.x,
            t: this.props.route.params.x,
        };
    }

   
    render() {
        return (
            <>
                <StatusBar backgroundColor={loginView} barStyle={'light-content'} />
                <View
                    style={{
                        flex: 0.12,
                        backgroundColor: bigBackground,
                        // marginBottom:"3%"
                    }}>
                    <View style={styles.headerContainer}>



                        {/* Page Tittle */}
                        <View
                            style={{
                                flexWrap: 'wrap',
                                alignSelf: 'center',
                                // backgroundColor: '#f0f',
                            }}>
                            <Text style={styles.styleOfPageTitle}>المبلغ</Text>
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
                                marginTop: RFValue(-5),
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

                <View
                    style={{
                        flex: 0.88,
                        backgroundColor: bigBackground,
                    }}>

                    {/* bottum type of donate */}
                    <Text
                        style={{
                            fontSize: 16,
                            color: '#000',
                            marginLeft: 10,
                            fontWeight: 'bold',
                            marginTop: 10
                        }}>
                        يرجى ادخال البيانات التاليه
                    </Text>
                    <ScrollView>
                        <TextInput
                            style={{ width: width * .95, alignSelf: 'center', backgroundColor: bigBackground, height: height * .08, marginTop: height * .02, fontSize: 18 }}
                            label=" مبلغ التبرع"
                            value={this.state.CaseMoney}
                            onChangeText={value => {
                                this.setState({ CaseMoney: value });

                            }}
                            activeOutlineColor={loginView}
                            textColor='#1D1D1D'
                            mode='outlined'
                            multiline={true}
                        />
                        <Text
                            style={{
                                fontSize: 15,
                                color: errorColor,
                                textAlign: 'center',
                                marginBottom: height * 0.01,
                            }}>
                            {this.state.CaseMoney_err}
                        </Text>

                        <TouchableOpacity
                            onPress={() => {
                                // this.Validation_Before_Send();
                                this.Edit_cardData();
                            }}
                            style={{
                                alignSelf: 'center',
                                width: width * 0.5,
                                backgroundColor: loginView,
                                height: height * 0.06,
                                borderRadius: 10,
                                marginTop: height * 0.5,
                                justifyContent: 'center',
                            }}>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: '#fff',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                }}>
                                موافق
                            </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>

                {/* </View> */}


            </>
        );
    }
}
const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        // marginBottom: height * 0.1,
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        // paddingHorizontal: width * 0.05,
        // backgroundColor: '#f0f',
        marginTop: RFValue(25),
        // marginBottom:RFValue(25),
    },
    leftArrowContainer: {
        width: width * 0.12,
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor:'#0ff',
        borderRadius: RFValue(15),
        marginHorizontal: width * 0.03,
        borderWidth: 1,
        borderColor: secondaryColor,
        marginLeft: RFValue(15),

    },
    styleOfPageTitle: {
        fontSize: 18,
        color: headerColor,
        width: width * 0.6,
        fontWeight: 'bold',
        textAlign: 'center',
        marginRight: width * 0.2,
        // backgroundColor:'#ff0',
    },
});
export default Money;