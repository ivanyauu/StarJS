import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { LoginScreen } from "../Screens/LoginScreen";
import { TestScreen } from "../Screens/TestScreen";

const screens = {
    Login: {
        screen: LoginScreen
    },
    Test:{
        screen: TestScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);