import { useEffect, useState } from "react";
import {
  BackHandler,
  Image,
  ImageBackground,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { EvilIcons, Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BackButton } from "../components/BackButton";
import { FormInputs } from "./FormInputs";
import { usePostLogin } from "../../APIHooks/UsePostLogin";
import { emailValidation, PasswordValidation } from "./RegexValidations";

const MainAuthScreen = () => {
  const [activeTab, setActiveTab] = useState<"login" | "register">("login");
  const [activeRegTab, setActiveRegTab] = useState<
    "single" | "brand" | "org" | "none"
  >("none");
  const nav = useNavigation();
  const [remember, setRemember] = useState(false);
  const [selectedTab, setSelectedTab] = useState("none");
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  // physical back click
  useEffect(() => {
    const backAction = () => {
      if (activeTab == "register") {
        if (activeRegTab != "none") {
          console.log("kkkkk");

          setSelectedTab("none");
          setActiveRegTab("none");
        }
      }
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  const OnLoginPress = async () => {
    const data = {
      username: "",
      email: loginData.username,
      password: loginData.password,
    };

    try {
      const response = await usePostLogin(data);

      if (response) {
        console.log("Login successful:", response);
      } else {
        console.log("Login failed:");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const inputStyle = `flex-row items-center border border-gray-300 rounded-3xl h-13 px-4 w-full gap-3`;

  return (
    <SafeAreaView className="flex-1 bg-LoginBG h-full w-full">
      <ImageBackground
        source={require("../../assets/AuthScreenAssets/BgLogin.png")}
        className="w-full h-[45%]"
        resizeMode="contain"
      >
        {/* back button */}
        <BackButton />
        {/* Heading Data */}
        <View className="absolute left-6 top-24 w-1/2 space-y-2">
          <Image
            source={require("../../assets/logo.png")}
            className="h-[68px] w-[68px]"
            resizeMode="contain"
          />
          <Text className="text-2xl font-bold w-10/12">
            {activeTab === "login"
              ? "Go ahead and set up your account"
              : "Create your account"}
          </Text>
          <Text className="text-xs font-medium color-textgray">
            Sign in-up to enjoy the best managing experience
          </Text>
        </View>
        {/* ImageSally */}
        <View>
          {activeTab === "login" ? (
            <>
              <Image
                resizeMode="contain"
                source={require("../../assets/AuthScreenAssets/Saly-29.png")}
                className="h-64 w-80 rotate-[-12deg]"
              />
              <Image
                resizeMode="contain"
                className="absolute left-[149px] top-[80px] h-[315px] w-[250px]"
                source={require("../../assets/AuthScreenAssets/Saly-11.png")}
              />
            </>
          ) : activeRegTab === "none" ? (
            <>
              <Image
                resizeMode="contain"
                source={require("../../assets/AuthScreenAssets/Saly-43.png")}
                className="h-30 w-30 absolute top-[29px] left-[97px] rotate-[-3.5deg]"
              />
              <Image
                resizeMode="contain"
                className="absolute left-[166px] top-[11px] h-28% w-60"
                source={require("../../assets/AuthScreenAssets/Saly-15.png")}
              />
            </>
          ) : (
            <>
              <Image
                resizeMode="contain"
                source={require("../../assets/AuthScreenAssets/Saly-23.png")}
                className="h-[300px] w-[300px] absolute top-[-15px] left-[90px]"
              />
              <Image
                resizeMode="contain"
                className="absolute left-[110px] top-[69px] h-[300px] w-[300px]"
                source={require("../../assets/AuthScreenAssets/Saly-38.png")}
              />
            </>
          )}
        </View>

        {/* MainAuthView */}
        <View className="h-[700px] w-[400px] bg-white absolute top-[290px] rounded-tl-[40px] rounded-tr-[40px] items-center">
          <View
            className={`flex-row bg-gray-200 w-[375px] h-[52px] rounded-[40px] p-[4px] ${activeRegTab === "single" || activeRegTab === "none" ? "mt-[20px]" : "mt-[10px]"}`}
          >
            {/* Login Tab */}
            <TouchableOpacity
              onPress={() => {
                setActiveTab("login");
                setActiveRegTab("none");
                setSelectedTab("none");
              }}
              className={`h-[44px] w-[182.5px] items-center justify-center rounded-[48px] ${activeTab === "login" ? "bg-white" : "bg-gray-200"}`}
            >
              <Text className="text-sm font-medium leading-4">Login</Text>
            </TouchableOpacity>

            {/* Register Tab */}
            <TouchableOpacity
              onPress={() => setActiveTab("register")}
              className={`h-[44px] w-[182.5px] items-center justify-center rounded-[48px] ${activeTab === "register" ? "bg-white" : "bg-gray-200"}`}
            >
              <Text className="text-sm font-medium leading-4">Register</Text>
            </TouchableOpacity>
          </View>

          <View
            className={`w-[383px] ${activeRegTab === "single" || activeRegTab === "none" ? "mt-[20px]" : "mt-[10px]"}`}
          >
            {/* if Login Tab  */}
            {activeTab === "login" ? (
              <View className="space-y-4 ">
                {/* UserName input */}
                <View className={inputStyle}>
                  <Ionicons
                    name="person-outline"
                    size={20}
                    color="gray"
                    className="ml-[8px]"
                  />
                  <TextInput
                    placeholder="Username or Email ID"
                    className="ml-2 flex-1 h-full"
                    value={loginData.username}
                    onChangeText={(text) => {
                      setLoginData({ ...loginData, username: text });

                      if (text === "" || emailValidation.test(text)) {
                        setError({ ...error, username: "" });
                      } else {
                        setError({ ...error, username: "Enter a valid email" });
                      }
                    }}
                  />
                </View>
                <Text className="text-sm color-numberRed p-1">
                  {error.username}
                </Text>

                {/* pwd input */}
                <View className={inputStyle}>
                  <SimpleLineIcons
                    name="lock"
                    size={24}
                    color="gray"
                    className="ml-[8px]"
                  />
                  <TextInput
                    placeholder="Password"
                    className="ml-2 flex-1 h-full"
                    secureTextEntry
                    value={loginData.password}
                    onChangeText={(text) => {
                      setLoginData({ ...loginData, password: text });

                      if (text === "" || PasswordValidation.test(text)) {
                        setError({ ...error, password: "" });
                      } else {
                        setError({
                          ...error,
                          password:
                            "Password must contain a special character, a number, a lowercase and an uppercase letter",
                        });
                      }
                    }}
                  />
                </View>
                <Text className="text-sm color-numberRed p-2">
                  {error.password}
                </Text>
                {/* RememberPwd & Forgot Pwd */}
                <View className="flex-row justify-between items-center h-[20px] w-[376px] mt-[8px] mb-[7px]">
                  <TouchableOpacity
                    onPress={() => setRemember(!remember)}
                    className="flex-row items-center"
                  >
                    <View
                      className={`h-4 w-4 border border-gray-400 rounded-sm mr-2 items-center ${remember ? "bg-green-500" : ""}`}
                    >
                      {remember && (
                        <Text className="color-white text-xs text-center">
                          ✓
                        </Text>
                      )}
                    </View>
                    <Text className="text-sm text-gray-600">Remember me</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => nav.navigate("ForgotPassword")}
                  >
                    <Text className="text-sm text-green-500">
                      Forget Password?
                    </Text>
                  </TouchableOpacity>
                </View>
                {/* login btn */}
                <TouchableOpacity
                  className={`h-14 w-full bg-mint rounded-3xl items-center justify-center mt-6 ${loginData.username == "" && loginData.password == "" ? "opacity-[0.5]" : "opacity-[1]"}`}
                  disabled={
                    loginData.username == "" && loginData.password == ""
                      ? true
                      : false
                  }
                  onPress={OnLoginPress}
                >
                  <Text className="text-white font-medium">Login</Text>
                </TouchableOpacity>

                {/* Or login with */}
                <View className="flex-row items-center my-4">
                  <View className="flex-1 h-[1px] bg-gray-300"></View>
                  <Text className="mx-3 text-gray-400 text-sm">
                    Or login with
                  </Text>
                  <View className="flex-1 h-[1px] bg-gray-300"></View>
                </View>
                {/* Other Login with */}
                <View className="flex-row p-[4px] justify-between w-full items-center">
                  <TouchableOpacity className="flex-column items-center justify-center border border-gray-300 rounded-[12px] h-[52px] flex-1 mr-2">
                    <Image
                      source={require("../../assets/AuthScreenAssets/GoogleIcon.png")}
                      className="h-[12px] w-[12px]"
                    />
                    <Text className="ml-2 text-sm">Google</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-column items-center justify-center border border-gray-300 rounded-[12px] h-[52px] flex-1 mx-1">
                    <EvilIcons name="sc-facebook" size={20} color="blue" />

                    <Text className="ml-2 text-sm">Facebook</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className="flex-column items-center justify-center border border-gray-300 rounded-[12px] h-[52px] flex-1 ml-2">
                    <Ionicons name="logo-apple" size={20} color="gray" />
                    <Text className="ml-2 text-sm">Apple</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ) : (
              // if Register Tab
              <View
                className={`"space-y-2 ${activeRegTab === "single" || activeRegTab === "none" ? "gap-[10px]" : "gap-[5px]"}`}
              >
                {
                  // {/* INDIVIDUAL */}
                  activeRegTab === "single" ? (
                    <FormInputs active="single" />
                  ) : // {/* BRAND */}
                  activeRegTab === "brand" ? (
                    <FormInputs active="brand" />
                  ) : // {/* ORGANIZATION */}
                  activeRegTab === "org" ? (
                    <FormInputs active="org" />
                  ) : (
                    // register tab buttons
                    <>
                      <Text className="text-sm font-semiBold text-gray-500 mt-[10px] mb-[10px]">
                        Select Account Type
                      </Text>
                      {/* Individual */}
                      <TouchableOpacity
                        onPress={() => setSelectedTab("single")}
                        className={`h-14 w-full rounded-3xl items-center justify-center mt-2 ${selectedTab === "single" ? "border-main" : "border-gray-300"} border border-gray`}
                      >
                        <Text
                          className={`${selectedTab === "single" ? "color-main" : "color-gray-500"}`}
                        >
                          Individual
                        </Text>
                      </TouchableOpacity>
                      {/* Brand/Business */}
                      <TouchableOpacity
                        onPress={() => setSelectedTab("brand")}
                        className={`h-14 w-full rounded-3xl items-center justify-center mt-2 ${selectedTab === "brand" ? "border-main" : "border-gray-300"}  border border-gray`}
                      >
                        <Text
                          className={`${selectedTab === "brand" ? "color-main" : "color-gray-500"}`}
                        >
                          Brand/Business
                        </Text>
                      </TouchableOpacity>
                      {/* Institution/Organization */}
                      <TouchableOpacity
                        onPress={() => setSelectedTab("org")}
                        className={`h-14 w-full rounded-3xl items-center justify-center mt-2 ${selectedTab === "org" ? "border-main" : "border-gray-300"}  border border-gray`}
                      >
                        <Text
                          className={`${selectedTab === "org" ? "color-main" : "color-gray-500"}`}
                        >
                          Institution/Organization
                        </Text>
                      </TouchableOpacity>
                      {/* continue btn */}
                      <TouchableOpacity
                        onPress={() => setActiveRegTab(selectedTab)}
                        disabled={selectedTab === "none" ? true : false}
                        className={`
                    ${selectedTab === "none" ? "opacity-[0.5]" : "opacity-[1]"}
                  h-14 w-full bg-mint rounded-3xl items-center justify-center mt-6 ${activeRegTab == "single" || activeRegTab == "none" ? "mt-[15px]" : "mt-[5px]"}`}
                      >
                        <Text className="text-white font-medium">Continue</Text>
                      </TouchableOpacity>
                    </>
                  )
                }
              </View>
            )}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MainAuthScreen;
