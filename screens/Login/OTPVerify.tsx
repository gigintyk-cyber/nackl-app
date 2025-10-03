import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Image, SafeAreaView } from "react-native";
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
    <SafeAreaView className="flex-1 bg-LoginBG">
      <BackButton />

      {/* Illustration */}
      <View className="items-center mt-20">
        <Image
          source={require("../../assets/AuthScreenAssets/OTP.png")}
          className="w-1/2 h-2/2"
          resizeMode="contain"
        />
      </View>

      {/* Bottom Card */}
      <View className="flex-1 bg-white rounded-t-3xl mt-[-10] items-center pt-8 px-6">
        {/* Header */}
        <View className="flex-row items-center w-full mb-6 space-x-4">
          <Image
            source={require("../../assets/AuthScreenAssets/image.png")}
            className="w-16 h-16"
            resizeMode="contain"
          />
          <View className="flex-1">
            <Text className="text-2xl font-bold text-black">OTP Verification</Text>
            <Text className="text-sm font-medium text-gray-400">
              Verify with your OTP to set a new password
            </Text>
          </View>
        </View>

        {/* OTP Input */}
        <View className="w-full items-center mt-8">
          <OtpBox length={6} onChange={(pin) => console.log("OTP:", pin)} />

          {/* Verify Button */}
          <TouchableOpacity
            onPress={() => nav.navigate("NewPassword")}
            className="mt-6 h-14 w-full bg-mint rounded-2xl items-center justify-center"
          >
            <Text className="text-white font-medium text-lg">Verify</Text>
          </TouchableOpacity>

          {/* Resend OTP */}
          <View className="flex-row mt-4 space-x-2">
            <TouchableOpacity onPress={handleResend} disabled={!canResend}>
              <Text className="text-gray-400 text-sm">Resend</Text>
            </TouchableOpacity>
            <Text className="text-red-500 text-sm">
              {canResend ? "00:00" : formatTime(timer)}
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OTPVerification;
