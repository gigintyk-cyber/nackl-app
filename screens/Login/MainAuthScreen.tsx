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
import {
  EvilIcons,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { LucideEye, LucideEyeClosed } from "lucide-react-native";
import { BackButton } from "../components/BackButton";

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
     if(activeTab == 'register'){
      if(activeRegTab != 'none'){
        console.log('kkkkk');
        
        setSelectedTab('none')
        setActiveRegTab('none')
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

  console.log('conec',activeRegTab,activeTab);
  
  

  return (
    <SafeAreaView className="flex-1 bg-[#F2FFF4] h-full w-full">
      <ImageBackground
        source={require("../../assets/AuthScreenAssets/BgLogin.png")}
        className="h-[400px] w-[430px]"
      >
        {/* back button */}
        <BackButton />
        {/* Heading Data */}
        <View className="absolute left-[24px] top-[95px] flex-column gap-[8px] w-[210px] h-[180px]">
          <Image
            source={require("../../assets/logo.png")}
            className="h-[68px] w-[68px]"
          />
          <Text className="text-2xl font-bold w-[166px]">
            {activeTab === "login"
              ? "Go ahead and set up your account"
              : "Create your account"}
          </Text>
          <Text className="text-xs font-medium color-[#94A3B8]">
            Sign in-up to enjoy the best managing experience
          </Text>
        </View>
        {/* ImageSally */}
        <View>
          {activeTab === "login" ? (
            <>
              <Image
                source={require("../../assets/AuthScreenAssets/Saly-29.png")}
                className="h-[265px] w-[341.69px] absolute top-[2.92px] left-[98.14px] rotate-[-41.7deg]"
              />
              <Image
                className="absolute left-[149px] top-[80px] h-[315px] w-[250px]"
                source={require("../../assets/AuthScreenAssets/Saly-11.png")}
              />
            </>
          ) : activeRegTab === "none" ? (
            <>
              <Image
                source={require("../../assets/AuthScreenAssets/Saly-43.png")}
                className="h-[86.23px] w-[86.23px] absolute top-[29px] left-[97px] rotate-[-3.5deg]"
              />
              <Image
                className="absolute left-[166px] top-[11px] h-[500px] w-[230px]"
                source={require("../../assets/AuthScreenAssets/Saly-15.png")}
              />
            </>
          ) : (
            <>
              <Image
                source={require("../../assets/AuthScreenAssets/Saly-23.png")}
                className="h-[300px] w-[300px] absolute top-[-15px] left-[90px]"
              />
              <Image
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
              <View className="space-y-4 gap-[10px]">
                {/* UserName input */}
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
                    value={loginData.username}
                    onChange={(text) =>
                      setLoginData({ ...loginData, username: text })
                    }
                  />
                </View>
                {/* pwd input */}
                <View className="flex-row items-center border border-gray-300 rounded-[32px] h-[52px] px-3 w-[378px]">
                  <SimpleLineIcons
                    name="lock"
                    size={24}
                    color="#139E75"
                    className="ml-[8px]"
                  />
                  <TextInput
                    placeholder="Password"
                    className="ml-2 flex-1 h-full"
                    secureTextEntry
                    value={loginData.password}
                    onChange={(text) =>
                      setLoginData({ ...loginData, password: text })
                    }
                  />
                </View>
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
                  className={`h-[56px] w-[378px] bg-[#139E75] rounded-[32px] items-center justify-center ${loginData.username == "" && loginData.password == "" ? "opacity-[0.5]" : "opacity-[1]"}`}
                  disabled={
                    loginData.username == "" && loginData.password == ""
                      ? true
                      : false
                  }
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
                        className={`flex-column items-center justify-center  border ${selectedTab === "single" ? "border-[#139E75]" : "border-gray-300"} rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]`}
                      >
                        <Text
                          className={`${selectedTab === "single" ? "color-[#139E75]" : "color-gray-500"}`}
                        >
                          Individual
                        </Text>
                      </TouchableOpacity>
                      {/* Brand/Business */}
                      <TouchableOpacity
                        onPress={() => setSelectedTab("brand")}
                        className={`flex-column items-center justify-center  border ${selectedTab === "brand" ? "border-[#139E75]" : "border-gray-300"}  rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]`}
                      >
                        <Text
                          className={`${selectedTab === "brand" ? "color-[#139E75]" : "color-gray-500"}`}
                        >
                          Brand/Business
                        </Text>
                      </TouchableOpacity>
                      {/* Institution/Organization */}
                      <TouchableOpacity
                        onPress={() => setSelectedTab("org")}
                        className={`flex-column items-center justify-center  border ${selectedTab === "org" ? "border-[#139E75]" : "border-gray-300"}  rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]`}
                      >
                        <Text
                          className={`${selectedTab === "org" ? "color-[#139E75]" : "color-gray-500"}`}
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
                    h-[56px] w-[378px] bg-[#139E75] rounded-[32px] items-center justify-center ${activeRegTab == "single" || activeRegTab == "none" ? "mt-[15px]" : "mt-[5px]"}`}
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

export const FormInputs = ({ active }) => {
  const [showPwd, setShowPwd] = useState(true);
  const [showConfirmPwd, setShowConfirmPwd] = useState(true);
  const nav = useNavigation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    orgName: "",
  });

  return (
    <>
      {/* USERNAME */}
      <View className="flex-row items-center border border-gray-300 rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]">
        <Ionicons
          name="person-outline"
          size={20}
          color="#139E75"
          className="ml-[8px]"
        />
        <TextInput placeholder="Username" className="ml-2 flex-1 h-full" />
        <TouchableOpacity>
          <Ionicons
            name="checkmark-circle"
            size={20}
            color="#dadada"
            className="mr-[8px]"
          />
        </TouchableOpacity>
      </View>

      {/* Organization/Brand */}
      {(active === "brand" || active === "org") && (
        <>
          <View className="flex-row items-center border border-gray-300 rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]">
            <Octicons
              name="organization"
              size={20}
              color="#139E75"
              className="ml-[8px]"
            />
            <TextInput
              placeholder={
                active == "brand" ? "Brand Name" : "Organization Name"
              }
              className="ml-2 flex-1 h-full"
            />
          </View>

          {/* Website */}
          <View className="flex-row items-center border border-gray-300 rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]">
            <MaterialCommunityIcons
              name="web"
              size={20}
              color="#139E75"
              className="ml-[8px]"
            />
            <TextInput placeholder="Website" className="ml-2 flex-1 h-full" />
          </View>
        </>
      )}

      {/* EMAIL_ID */}

      <View className="flex-row items-center border border-gray-300 rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]">
        <Fontisto name="email" size={20} color="#139E75" className="ml-[8px]" />
        <TextInput placeholder="Email-ID" className="ml-2 flex-1 h-full" />
        <TouchableOpacity
          className="mr-[8px] h-[22px] w-[57px] bg-[#139E75] items-center justify-center rounded-[6px]"
          onPress={() => nav.navigate("OTPVerification")}
        >
          <Text className="text-white text-sm font-semiBold">Verify</Text>
        </TouchableOpacity>
      </View>
      {/* PASSWORD */}

      <View className="flex-row items-center border border-gray-300 rounded-[32px] h-[52px] px-3 w-[378px] gap-[12px]">
        <SimpleLineIcons
          name="lock"
          size={20}
          color="#139E75"
          className="ml-[8px]"
        />
        <TextInput
          placeholder="Password"
          className="ml-2 flex-1 h-full"
          secureTextEntry={showPwd}
        />
        <TouchableOpacity onPress={() => setShowPwd(!showPwd)}>
          {showPwd ? (
            <LucideEyeClosed size={20} color="#dadada" className="mr-[8px]" />
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
          placeholder="Confirm Password"
          className="ml-2 flex-1 h-full"
          secureTextEntry={showConfirmPwd}
        />
        <TouchableOpacity onPress={() => setShowConfirmPwd(!showConfirmPwd)}>
          {showConfirmPwd ? (
            <LucideEyeClosed size={20} color="#dadada" className="mr-[8px]" />
          ) : (
            <LucideEye size={20} color="#dadada" className="mr-[8px]" />
          )}
        </TouchableOpacity>
      </View>

      {/* Register btn */}
      <TouchableOpacity
        disabled={active === "none" ? true : false}
        className={`
                   
        h-[56px] w-[378px] bg-[#139E75] rounded-[32px] items-center justify-center ${active === "single" || active === "none" ? "mt-[15px]" : "mt-[5px]"}`}
      >
        <Text className="text-white font-medium">Register</Text>
      </TouchableOpacity>
    </>
  );
};
