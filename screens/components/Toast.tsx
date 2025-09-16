import React, { useEffect } from "react";
import { Animated, Text } from "react-native";

type ToastProps = {
  message: string;
  onHide: () => void;
};

export default function Toast({ message, onHide }: ToastProps) {
  const translateY = new Animated.Value(100); // start off screen

  useEffect(() => {
    // Slide in
    Animated.timing(translateY, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Slide out after 2s
    const timer = setTimeout(() => {
      Animated.timing(translateY, {
        toValue: 100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => onHide());
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View
      style={{ transform: [{ translateY }] }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black px-4 py-2 rounded-full shadow"
    >
      <Text className="text-white text-sm">{message}</Text>
    </Animated.View>
  );
}
