import { useNavigation } from "@react-navigation/native";
import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { LucideEye, LucideEyeClosed } from "lucide-react-native";
import { useState } from "react";
import { BackButton } from "../components/BackButton";

const NewPassword = () => {
  const nav = useNavigation();
  const [showPwd, setShowPwd] = useState(true);
  const [showConfirmPwd, setShowConfirmPwd] = useState(true);

  
  const inputStyle = `flex-row items-center border border-gray-300 rounded-3xl h-13 px-4 w-full gap-3`

  return (
      <SafeAreaView className="flex-1 bg-LoginBG">
      <BackButton />

      {/* Bottom Card */}
      <View className="flex-1 bg-white mt-30 rounded-t-3xl items-center pt-8 px-6">
        {/* Header */}
        <View className="items-start w-full mb-6">
          <Image
            source={require("../../assets/AuthScreenAssets/image.png")}
            className="w-16 h-16 mb-2"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold text-black">New Password</Text>
          <Text className="text-sm font-medium text-gray-400 mt-1">
            Set a strong new password with special character
          </Text>
        </View>

        {/* Password Inputs */}
        <View className="w-full space-y-4 mt-6 items-center gap-4">
          {/* New Password */}
          <View className={inputStyle}>
            <SimpleLineIcons name="lock" size={20} color="gray" />
            <TextInput
              placeholder="New Password"
              className="flex-1 h-full text-black"
              secureTextEntry={showPwd}
            />
            <TouchableOpacity onPress={() => setShowPwd(!showPwd)}>
              {showPwd ? (
                <LucideEyeClosed size={20} color="gray" />
              ) : (
                <LucideEye size={20} color="gray" />
              )}
            </TouchableOpacity>
          </View>

          {/* Confirm Password */}
          <View className={inputStyle}>
            <SimpleLineIcons name="lock" size={20} color="gray" />
            <TextInput
              placeholder="Confirm New Password"
              className="flex-1 h-full text-black"
              secureTextEntry={showConfirmPwd}
            />
            <TouchableOpacity onPress={() => setShowConfirmPwd(!showConfirmPwd)}>
              {showConfirmPwd ? (
                <LucideEyeClosed size={20} color="gray" />
              ) : (
                <LucideEye size={20} color="gray" />
              )}
            </TouchableOpacity>
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            onPress={() => nav.navigate("MainAuth")}
            className="h-14 w-full bg-mint rounded-3xl items-center justify-center mt-6"
          >
            <Text className="text-white font-medium text-lg">Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewPassword;
