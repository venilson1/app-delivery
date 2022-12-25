import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import PreloadScreen from "../../screens/PreloadScreen";
import SignInScreen from "../../screens/SignInScreen";
import SignUpScreen from "../../screens/SignUpScreen";

const { Navigator, Screen} = createStackNavigator();

export default () => {
    return (
      <NavigationContainer>
        <Navigator 
        initialRouteName="PreloadScreen"
        screenOptions={{
          headerShown: false
        }}>
          <Screen name="Preload" component={PreloadScreen} />
          <Screen name="SignIn" component={SignInScreen} />
          <Screen name="SignUp" component={SignUpScreen} />
        </Navigator>
      </NavigationContainer>
    );
  }