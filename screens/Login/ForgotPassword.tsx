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
    
  const inputStyle = `flex-row items-center border border-gray-300 rounded-3xl h-13 px-4 w-full gap-3`
  
return(
     <SafeAreaView className="flex-1 bg-LoginBG h-full w-full">
      <BackButton />

      {/* Centered Illustration */}
      <View className="items-center mt-20">
        <Image
          source={require("../../assets/AuthScreenAssets/forgotPass.png")}
          className="h-65 w-65"
          resizeMode="contain"
        />
      </View>

      {/* Bottom Card */}
      <View className="flex-1 bg-white rounded-t-3xl mt-10 items-center pt-8">
        {/* Top Content */}
        <View className="flex-row items-center space-x-4 mb-6 px-6 w-full">
          <Image
            source={require("../../assets/AuthScreenAssets/image.png")}
            className="h-16 w-16"
            resizeMode="contain"
          />
          <View className="flex-1">
            <Text className="text-2xl font-bold text-black">
              Forget Password?
            </Text>
            <Text className="text-sm font-medium color-textgray">
              No worries! Just enter your email ID and verify it.
            </Text>
          </View>
        </View>

        {/* Input */}
        <View className="w-11/12">
          <View className={inputStyle}>
            <Ionicons name="person-outline" size={20} color="gray"/>
            <TextInput
              placeholder="Username or Email ID"
              className="flex-1 ml-2 h-full text-black"
            />
          </View>

          {/* Send OTP Button */}
          <TouchableOpacity
            onPress={() => nav.navigate("OTPVerification")}
            className="h-14 w-full bg-mint rounded-[32] items-center justify-center "
          >
            <Text className="text-white font-medium text-lg">Send OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
)
  };

export default ForgotPassword;
