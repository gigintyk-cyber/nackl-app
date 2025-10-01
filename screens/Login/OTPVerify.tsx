import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Image, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { BackButton } from "../components/BackButton";
import { OtpBox } from "../components/OTPBox";


const OTPVerification = () => {
  const nav = useNavigation();

  const [timer, setTimer] = useState(120);
  const [canResend, setCanResend] = useState(false);
  useEffect(() => {
    let interval = null;
    if (timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else {
      setCanResend(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer]);

  const handleResend = () => {
    console.log("Resend OTP clicked");
    setTimer(120);
    setCanResend(false);
  };

  const formatTime = (sec) => {
    const minutes = Math.floor(sec / 60);
    const seconds = sec % 60;
    return `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <SafeAreaView className="flex-1 bg-[#F2FFF4] h-full w-full">
      <BackButton />
      <Image
        source={require("../../assets/AuthScreenAssets/OTP.png")}
        className="h-[200px] w-[200px] absolute top-[160px] left-[100px]"
      />
      <View className="h-[420px] w-[430px] bg-white absolute top-[420px] rounded-tl-[40px] rounded-tr-[40px] items-center">
        <View className="absolute left-[24px] mt-[20px] flex-column gap-[8px] w-[300px] h-[180px]">
          <Image
            source={require("../../assets/AuthScreenAssets/image.png")}
            className="h-[68px] w-[68px] "
          />
          <Text className="text-2xl font-bold ">OTP Verification</Text>
          <Text className="text-xs font-medium color-[#94A3B8]">
            Verify with your OTP to set a new password
          </Text>
        </View>
        <View className="mt-[170px] w-[383px] items-center mr-[30px]">
            {/* OTP BOX */}
          <OtpBox length={6} onChange={(pin) => console.log("llll", pin)} />

          {/* Verify Button */}
          <TouchableOpacity
            onPress={() => nav.navigate("NewPassword")}
            className="h-[56px] w-[378px] bg-[#139E75] rounded-[32px] items-center justify-center mt-[30px]"
          >
            <Text className="text-white font-medium">Verify</Text>
          </TouchableOpacity>
        </View>

        {/* Resend OTP */}
        <View className="flex-row h-[22px] w-[1000px] mt-[10px] align-right top-[220px] left-[300px] absolute">
          <TouchableOpacity onPress={handleResend} disabled={!canResend}>
            <Text className="color-[#dadada] text-sm">Resend </Text>
          </TouchableOpacity>
          <Text className="color-[#D72F2F] text-sm">
            {canResend ? "00 : 00" : formatTime(timer)}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerification;
