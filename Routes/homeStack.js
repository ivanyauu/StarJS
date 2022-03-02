import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { LoginScreen } from "../Screens/LoginScreen";
import { TestScreen } from "../Screens/TestScreen";
import { PickParentChild } from "../Screens/PickParentChild";
import { CreateJoinFamily } from "../Screens/CreateJoinFamily";
import { JoinFamily } from "../Screens/JoinFamily";
import { RegisterScreen } from "../Screens/RegisterScreen";

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