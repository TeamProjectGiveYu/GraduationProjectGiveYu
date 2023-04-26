// /* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
// User Application:
import PassChange from './UserApp/PassChange';
import MyAccount from './UserApp/MyAccount';
import HomePage from './UserApp/HomePage';
import LogIn from './UserApp/LogIn';
import SignUp from './UserApp/SignUp';
import RestorePass from './UserApp/RestorePass';
import Otp from './UserApp/Otp';
import Donation from './UserApp/Donation';
import CharityInfo_Categories from './UserApp/CharityInfo_Categories';
import CharityInfo from './UserApp/CharityInfo';
import Achievements from './UserApp/Achievements';
import FavoriteCases from './UserApp/FavoriteCases';
import Cases from './UserApp/Cases';
import CaseDetails from './UserApp/CaseDetails';
import TypeOfDonate from './UserApp/TypeOfDonate';
import Delegate from './UserApp/Delegate';
import EditData from './UserApp/EditData';
import DonateInstitutions from './UserApp/DonateInstitutions';

// Charity Application:
// import Logo from './CharityApp/Logo';
import CharityOptions from './CharityApp/CharityOptions';
import Categories from './CharityApp/Categories';
import EntryCaseDetails from './CharityApp/EntryCaseDetails';
import CharityCasesAdd from './CharityApp/CharityCasesAdd';
import Notifications from './CharityApp/Notifications';
import CasesOfCategory from './CharityApp/CasesOfCategory';
import NotificationDetails from './CharityApp/NotificationDetails';

class App extends React.Component {
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

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 2000);
  }
  render() {
    return (
      <>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            {/* Introduction */}
            {/* <Stack.Screen name="Logo" component={Logo} /> */}
            <Stack.Screen name="LogIn" component={LogIn} />
            {/* User Application */}
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="RestorePass" component={RestorePass} />
            <Stack.Screen name="Otp" component={Otp} />
            <Stack.Screen name="PassChange" component={PassChange} />
            <Stack.Screen name="HomePage" component={HomePage} />
            <Stack.Screen
              name="CharityInfo_Categories"
              component={CharityInfo_Categories}
            />
            <Stack.Screen name="Donation" component={Donation} />
            <Stack.Screen
              name="DonateInstitutions"
              component={DonateInstitutions}
            />

            <Stack.Screen name="MyAccount" component={MyAccount} />
            <Stack.Screen name="EditData" component={EditData} />

            <Stack.Screen name="CharityInfo" component={CharityInfo} />
            <Stack.Screen name="Achievements" component={Achievements} />
            <Stack.Screen name="FavoriteCases" component={FavoriteCases} />
            <Stack.Screen name="Cases" component={Cases} />
            <Stack.Screen name="CaseDetails" component={CaseDetails} />
            <Stack.Screen name="TypeOfDonate" component={TypeOfDonate} />
            <Stack.Screen name="Delegate" component={Delegate} />

            {/* Charity Application */}
            {/* <Stack.Screen name="Logo" component={Logo} /> */}
            <Stack.Screen name="CharityOptions" component={CharityOptions} />
            {/* <Stack.Screen name="CharityDonationCategories" component={CharityDonationCategories} /> */}
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen
              name="NotificationDetails"
              component={NotificationDetails}
            />
            <Stack.Screen name="CharityCasesAdd" component={CharityCasesAdd} />
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen
              name="EntryCaseDetails"
              component={EntryCaseDetails}
            />
            <Stack.Screen name="CasesOfCategory" component={CasesOfCategory} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
