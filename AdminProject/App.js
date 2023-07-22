// /* eslint-disable prettier/prettier */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import MainPage from './Admin/MainPage';
import AllCharities from './Admin/AllCharities';
import WaitingList from './Admin/WaitingList';
import WaitingDetails from './Admin/WaitingDetails';

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
            <Stack.Screen name="MainPage" component={MainPage} />
            <Stack.Screen name="AllCharities" component={AllCharities} />
            <Stack.Screen name="WaitingList" component={WaitingList} />

            <Stack.Screen name="WaitingDetails" component={WaitingDetails} />
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );
  }
}

export default App;
