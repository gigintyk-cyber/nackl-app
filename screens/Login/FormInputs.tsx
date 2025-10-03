import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { emailValidation } from "./RegexValidations";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import {
  EvilIcons,
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  Octicons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { OtpBox } from "../components/OTPBox";
import { LucideEye, LucideEyeClosed } from "lucide-react-native";
import { usePostRegister } from "../../APIHooks/usePostRegister";
import { usePostSendOTP } from "../../APIHooks/UsePostSendOTP";
import { useVerifyOTP } from "../../APIHooks/UseVerifyOTP";

export const FormInputs = ({ active }) => {
  const [showPwd, setShowPwd] = useState(true);
  const [showConfirmPwd, setShowConfirmPwd] = useState(true);
  const [showOTP, setShowOTP] = useState(false);
  const [otp, setOTP] = useState("");
  const nav = useNavigation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    website: "",
    orgName: "",
    brandName: "",
  });
  console.log(
    formData.email.length < 1,
    emailValidation.test(formData.email),
    formData.email
  );

  const onRegisterClick = async () => {
    const data = {
      email: formData.email,
      username: formData.username,
      password: formData.password,
      confirm_password: formData.confirmPassword,
      first_name: "",
      last_name: "",
      phone_number: "1234567890",
      org_name: formData.orgName,
      brand_name: formData.brandName,
      website: formData.website,
      description: "",
      contact_email: formData.email,
    };
    try {
      const response = await usePostRegister(data);

      if (response) {
        console.log("REgister successful:", response);
      } else {
        console.log("REgister failed:");
      }
    } catch (error) {
      console.error("Error during REgister:", error);
    }
  };

  const onVerifyResendPress = async () => {
    setShowOTP(true);
    const OTPData = {
      email: formData.email,
      otp: "string",
    };
    try {
      const response = await usePostSendOTP(OTPData);

      if (response) {
        console.log("OTP SEND successful:", response);
      } else {
        console.log("OTP SEND failed:");
      }
    } catch (error) {
      console.error("Error during OTP SEND:", error);
    }
  };

  const OnOTPComplete = async () => {
    const sendData = {
      email: formData.email,
      otp: otp,
    };
    try {
      const response = await useVerifyOTP(sendData);

      if (response) {
        console.log("OTP SEND successful:", response);
      } else {
        console.log("OTP SEND failed:");
      }
    } catch (error) {
      console.error("Error during OTP SEND:", error);
    }
  };

  const inputStyle = `flex-row items-center border border-gray-300 rounded-3xl h-13 px-4 w-full gap-3`

  return (
    <>
      {/* USERNAME */}
      <View className={inputStyle}>
        <Ionicons
          name="person-outline"
          size={20}
          color="gray"
          className="ml-[8px]"
        />
        <TextInput
          placeholder="Username"
          className="ml-2 flex-1 h-full"
          value={formData.username}
          onChangeText={(t) => setFormData({ ...formData, username: t })}
        />
        <TouchableOpacity>
          <Ionicons
            name="checkmark-circle"
            size={20}
            color="gray"
            className="mr-[8px]"
          />
        </TouchableOpacity>
      </View>

      {/* Organization/Brand */}
      {(active === "brand" || active === "org") && (
        <>
          <View className={inputStyle}>
            <Octicons
              name="organization"
              size={20}
              color="gray"
              className="ml-[8px]"
            />
            <TextInput
              placeholder={
                active == "brand" ? "Brand Name" : "Organization Name"
              }
              className="ml-2 flex-1 h-full"
              value={active == "brand" ? formData.brandName : formData.orgName}
              onChangeText={(t) => {
                active == "brand"
                  ? setFormData({ ...formData, brandName: t })
                  : setFormData({ ...formData, orgName: t });
              }}
            />
          </View>

          {/* Website */}
          <View className={inputStyle}>
            <MaterialCommunityIcons
              name="web"
              size={20}
              color="gray"
              className="ml-[8px]"
            />
            <TextInput
              placeholder="Website"
              className="ml-2 flex-1 h-full"
              value={formData.website}
              onChangeText={(t) => setFormData({ ...formData, website: t })}
            />
          </View>
        </>
      )}

      {/* EMAIL_ID */}

      <View className={inputStyle}>
        <Fontisto name="email" size={20} color="gray" className="ml-[8px]" />
        <TextInput
          placeholder="Email-ID"
          className="ml-2 flex-1 h-full"
          value={formData.email}
          onChangeText={(t) => {
            setFormData({ ...formData, email: t });
          }}
        />
        {formData.email.length > 1 && emailValidation.test(formData.email) ? (
          <TouchableOpacity
            className="mr-[8px] h-[22px] w-[57px] bg-main items-center justify-center rounded-lg"
            onPress={onVerifyResendPress}
          >
            <Text className="text-white text-sm font-semiBold">
              {showOTP ? "Resend" : "Verify"}
            </Text>
          </TouchableOpacity>
        ) : null}
      </View>

      {showOTP &&
        formData.email.length > 1 &&
        emailValidation.test(formData.email) && (
          <OtpBox
            length={6}
            onChange={(t) => {
              setOTP(t);
              if (t.length >= 6) {
                OnOTPComplete();
              }
            }}
          />
        )}
      {/* PASSWORD */}

      <View className={inputStyle}>
        <SimpleLineIcons
          name="lock"
          size={20}
          color="gray"
          className="ml-[8px]"
        />
        <TextInput
          placeholder="Password"
          className="ml-2 flex-1 h-full"
          secureTextEntry={showPwd}
        />
        <TouchableOpacity onPress={() => setShowPwd(!showPwd)}>
          {showPwd ? (
            <LucideEyeClosed
              size={20}
              color="gray"
              className="mr-[8px]"
            />
          ) : (
            <LucideEye size={20} color="gray" className="mr-[8px]" />
          )}
        </TouchableOpacity>
      </View>
      {/* CONFIRM PASSWORD */}

      <View className={inputStyle}>
        <SimpleLineIcons
          name="lock"
          size={20}
          color="gray"
          className="ml-[8px]"
        />
        <TextInput
          placeholder="Confirm Password"
          className="ml-2 flex-1 h-full"
          secureTextEntry={showConfirmPwd}
        />
        <TouchableOpacity onPress={() => setShowConfirmPwd(!showConfirmPwd)}>
          {showConfirmPwd ? (
            <LucideEyeClosed
              size={20}
              color="gray"
              className="mr-[8px]"
            />
          ) : (
            <LucideEye size={20} color="gray" className="mr-[8px]" />
          )}
        </TouchableOpacity>
      </View>

      {/* Register btn */}
      <TouchableOpacity
        disabled={active === "none" ? true : false}
        onPress={onRegisterClick}
        className={`
                   
        h-[56px] w-[378px] bg-main rounded-3xl items-center justify-center ${active === "single" || active === "none" ? "mt-[15px]" : "mt-[5px]"}`}
      >
        <Text className="text-white font-medium">Register</Text>
      </TouchableOpacity>
    </>
  );
};
