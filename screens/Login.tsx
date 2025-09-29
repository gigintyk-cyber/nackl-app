import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, SafeAreaView, ScrollView } from 'react-native';
import { Feather } from '@expo/vector-icons'; // Assuming you're using Expo for icons

export default function LoginScreen() {
  const [showPassword, setShowPassword] = React.useState(false);

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1">
        {/* Top Background Design */}
        <View className="absolute top-0 left-0 right-0 h-1/3 bg-green-100/50 rounded-bl-[100px] rounded-br-[100px] opacity-70">
          {/* You might need to adjust the exact shape/gradient based on a more detailed design */}
        </View>
        <View className="absolute top-0 left-0 right-0 h-1/4 bg-green-200/50 rounded-bl-[120px] rounded-br-[120px] opacity-70">
          {/* Second layer for the top design */}
        </View>

        {/* Bottom Background Design */}
        <View className="absolute bottom-0 left-0 right-0 h-1/4 bg-green-100/50 rounded-tl-[100px] rounded-tr-[100px] opacity-70">
          {/* You might need to adjust the exact shape/gradient based on a more detailed design */}
        </View>
        <View className="absolute bottom-0 left-0 right-0 h-1/6 bg-green-200/50 rounded-tl-[120px] rounded-tr-[120px] opacity-70">
          {/* Second layer for the bottom design */}
        </View>

        <View className="flex-1 items-center justify-between px-6 pt-10 pb-8">
          {/* Logo Section */}
          <View className="mt-12 items-center">
            {/* Replace with your actual logo image */}
            <Image
              source={require('./assets/nackl-logo.png')} // Make sure to place your logo image in the assets folder
              className="w-48 h-24 resize-contain mb-2"
            />
            <Text className="text-gray-600 text-sm font-medium tracking-wider">
              DARE TO CONQUER
            </Text>
          </View>

          {/* Login Form Card */}
          <View className="w-full bg-white p-6 rounded-3xl shadow-lg -mt-12 z-10">
            <Text className="text-2xl font-bold text-gray-800 mb-6">
              Login your account
            </Text>

            {/* Username/Email Input */}
            <View className="mb-4">
              <TextInput
                className="w-full h-14 bg-gray-100 px-4 rounded-xl text-lg border border-gray-300 focus:border-green-500"
                placeholder="Username Or Email"
                placeholderTextColor="#A0A0A0"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            </View>

            {/* Password Input */}
            <View className="mb-2">
              <View className="flex-row items-center w-full h-14 bg-gray-100 px-4 rounded-xl border border-gray-300 focus-within:border-green-500">
                <TextInput
                  className="flex-1 text-lg"
                  placeholder="Password"
                  placeholderTextColor="#A0A0A0"
                  secureTextEntry={!showPassword}
                />
                <TouchableOpacity onPress={() => setShowPassword(!showPassword)} className="p-2">
                  <Feather name={showPassword ? 'eye' : 'eye-off'} size={20} color="#A0A0A0" />
                </TouchableOpacity>
              </View>
            </View>

            {/* Forgot Password */}
            <TouchableOpacity className="self-end mb-6">
              <Text className="text-green-600 font-semibold text-sm">
                Forgot Password?
              </Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <TouchableOpacity className="w-full bg-green-500 py-4 rounded-xl mb-6 shadow-md active:bg-green-600">
              <Text className="text-white text-xl font-bold text-center">
                Sign in
              </Text>
            </TouchableOpacity>

            {/* Or continue with */}
            <View className="flex-row items-center justify-center mb-6">
              <View className="flex-1 h-px bg-gray-300" />
              <Text className="text-gray-500 mx-4 text-sm">
                Or continue with
              </Text>
              <View className="flex-1 h-px bg-gray-300" />
            </View>

            {/* Social Login Buttons */}
            <View className="flex-row justify-center space-x-4 mb-8">
              <TouchableOpacity className="w-14 h-14 bg-gray-100 rounded-lg items-center justify-center border border-gray-200 shadow-sm">
                <Image
                  source={require('./assets/google-icon.png')} // Replace with your actual icons
                  className="w-6 h-6 resize-contain"
                />
              </TouchableOpacity>
              <TouchableOpacity className="w-14 h-14 bg-gray-100 rounded-lg items-center justify-center border border-gray-200 shadow-sm">
                <Image
                  source={require('./assets/facebook-icon.png')} // Replace with your actual icons
                  className="w-6 h-6 resize-contain"
                />
              </TouchableOpacity>
              <TouchableOpacity className="w-14 h-14 bg-gray-100 rounded-lg items-center justify-center border border-gray-200 shadow-sm">
                <Image
                  source={require('./assets/apple-icon.png')} // Replace with your actual icons
                  className="w-6 h-6 resize-contain"
                />
              </TouchableOpacity>
            </View>

            {/* Don't have an account */}
            <View className="flex-row justify-center items-center">
              <Text className="text-gray-600 text-base">
                Don't have an account?
              </Text>
              <TouchableOpacity>
                <Text className="text-green-600 font-semibold ml-1 text-base">
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Ensure you have these assets in your project, e.g., in an 'assets' folder:
// assets/nackl-logo.png
// assets/google-icon.png
// assets/facebook-icon.png
// assets/apple-icon.png