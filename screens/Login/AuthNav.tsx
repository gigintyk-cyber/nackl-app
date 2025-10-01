import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainAuthScreen from "./MainAuthScreen";
import ForgotPassword from "./ForgotPassword";
import NewPassword from "./NewPassword";
import OTPVerification from "./OTPVerify";


const Stack = createNativeStackNavigator();

const AuthNav = () => {
    return (
        <Stack.Navigator 
        screenOptions={{headerShown:false}}>
            <Stack.Screen name="MainAuth" component={MainAuthScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="OTPVerification" component={OTPVerification} />
        </Stack.Navigator>
    )
}


export default AuthNav