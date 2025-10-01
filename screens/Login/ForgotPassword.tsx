import { useNavigation } from "@react-navigation/native";
import {
    Image,
    SafeAreaView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { BackButton } from "../components/BackButton";

const ForgotPassword = () => {
    const nav = useNavigation();

    return (
        <SafeAreaView className="flex-1 bg-[#F2FFF4] h-full w-full">
            <BackButton />
            <Image
                source={require("../../assets/AuthScreenAssets/forgotPass.png")}
                className="h-[220px] w-[220px] absolute top-[160px] left-[90px]"
            />
            <View className="h-[420px] w-[430px] bg-white absolute top-[420px] rounded-tl-[40px] rounded-tr-[40px] items-center">
                <View className="absolute left-[24px] mt-[20px] flex-column gap-[8px] w-[300px] h-[180px]">
                    <Image
                        source={require("../../assets/AuthScreenAssets/image.png")}
                        className="h-[68px] w-[68px] "
                    />
                    <Text className="text-2xl font-bold ">Forget Password ?</Text>
                    <Text className="text-xs font-medium color-[#94A3B8]">
                        No Worries!!! Just Enter The mail ID And Verify That ....
                    </Text>
                </View>
                <View className="mt-[170px] w-[383px] items-center mr-[30px]">
                    <View className="flex-row items-center border border-gray-300 rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]">
                        <Ionicons
                            name="person-outline"
                            size={20}
                            color="#139E75"
                            className="ml-[8px]"
                        />
                        <TextInput
                            placeholder="Username or Email ID"
                            className="ml-2 flex-1 h-full"
                        />
                    </View>
                    <TouchableOpacity
                        onPress={() => nav.navigate('OTPVerification')}
                        // disabled
                        className={`h-[56px] w-[378px] bg-[#139E75] rounded-[32px] items-center justify-center mt-[20px]`}
                    >
                        <Text className="text-white font-medium">Send OTP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default ForgotPassword;
