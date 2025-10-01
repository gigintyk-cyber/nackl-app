import { useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";

export const OtpBox = ({ length = 6, onChange }) => {
  const [code, setCode] = useState("");
  const inputRef = useRef(null);

  const handleChange = (text) => {
    const cleanText = text.replace(/[^0-9]/g, "");
    if (cleanText.length <= length) {
      setCode(cleanText);
      onChange && onChange(cleanText);
    }
  };

  return (
    <View className="flex-row justify-between w-[378px] items-center">
      {/* Hidden TextInput */}
      <TextInput
        ref={inputRef}
        value={code}
        onChangeText={handleChange}
        keyboardType="number-pad"
        maxLength={length}
        className="absolute opacity-0"
      />

      {/* Visible Boxes */}
      {Array.from({ length }).map((_, i) => {
        const isActive = i === code.length; 
        return (
          <View
            key={i}
            className={`border rounded-[12px] h-[52px] w-[52px] justify-center items-center 
              ${isActive ? "border-green-500" : "border-gray-300"}`}
          >
            <Text
              onPress={() => inputRef.current.focus()}
              className={`text-xl text-center 
                ${code[i] ? "text-black" : "text-gray-400"}`}
            >
              {code[i] ?? ""}
            </Text>
          </View>
        );
      })}
    </View>
  );
};
