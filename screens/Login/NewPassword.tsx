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
  return (
    <SafeAreaView className="flex-1 bg-[#F2FFF4] h-full w-full">
      <BackButton />
      <View className="h-[700px] w-[430px] bg-white absolute top-[200px] rounded-tl-[40px] rounded-tr-[40px] items-center mb-[20px]">
        <View className="absolute left-[24px] mt-[20px] flex-column gap-[8px] w-[300px] h-[180px]">
          <Image
            source={require("../../assets/AuthScreenAssets/image.png")}
            className="h-[68px] w-[68px] "
          />
          <Text className="text-2xl font-bold ">New Password</Text>
          <Text className="text-xs font-medium color-[#94A3B8]">
            Set a strong new password with special character
          </Text>
        </View>
        {/* PASSWORD */}
        <View className={`space-y-4 gap-[10px] mt-[180px] items-center mr-[30px]`}>
          <View className="flex-row items-center border border-gray-300 rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]">
            <SimpleLineIcons
              name="lock"
              size={20}
              color="#139E75"
              className="ml-[8px]"
            />
            <TextInput
              placeholder="New Password"
              className="ml-2 flex-1 h-full"
              secureTextEntry={showPwd}
            />
            <TouchableOpacity onPress={() => setShowPwd(!showPwd)}>
              {showPwd ? (
                <LucideEyeClosed
                  size={20}
                  color="#dadada"
                  className="mr-[8px]"
                />
              ) : (
                <LucideEye size={20} color="#dadada" className="mr-[8px]" />
              )}
            </TouchableOpacity>
          </View>

          {/* CONFIRM PASSWORD */}

          <View className="flex-row items-center border border-gray-300 rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]">
            <SimpleLineIcons
              name="lock"
              size={20}
              color="#139E75"
              className="ml-[8px]"
            />
            <TextInput
              placeholder="Confirm New Password"
              className="ml-2 flex-1 h-full"
              secureTextEntry={showConfirmPwd}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPwd(!showConfirmPwd)}
            >
              {showConfirmPwd ? (
                <LucideEyeClosed
                  size={20}
                  color="#dadada"
                  className="mr-[8px]"
                />
              ) : (
                <LucideEye size={20} color="#dadada" className="mr-[8px]" />
              )}
            </TouchableOpacity>
          </View>
             <TouchableOpacity
          onPress={() => nav.navigate("MainAuth")}
          // disabled
          className={`h-[56px] w-[378px] bg-[#139E75] rounded-[32px] items-center justify-center mt-[180px]`}
        >
          <Text className="text-white font-medium">Submit</Text>
        </TouchableOpacity>
        </View>
     
      </View>
    </SafeAreaView>
  );
};

export default NewPassword;
