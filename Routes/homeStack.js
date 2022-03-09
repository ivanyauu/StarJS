import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { LoginScreen } from "../Screens/Login/LoginScreen";
import { TestScreen } from "../Screens/Login/TestScreen";
import { PickParentChild } from "../Screens/Login/PickParentChild";
import { CreateJoinFamily } from "../Screens/Login/CreateJoinFamily";
import { JoinFamily } from "../Screens/Login/JoinFamily";
import { RegisterScreen } from "../Screens/Login/RegisterScreen";

const screens = {
    Login: {
        screen: LoginScreen
    },
    PickParentChild:{
        screen: PickParentChild
    },
    CreateJoinFamily: {
        screen: CreateJoinFamily
    },
    JoinFamily: {
        screen: JoinFamily
    },
    Register: {
        screen: RegisterScreen
    },
    Test:{
        screen: TestScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);