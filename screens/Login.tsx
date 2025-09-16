import { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

export default function Auth() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'register' | 'forgot'>('login');

  return (
    <View className="flex-1 justify-center items-center bg-white p-4 w-full">
      {/* LOGIN FORM */}
      {currentScreen === 'login' && (
        <>
          <Text className="text-2xl font-bold mb-4">Login</Text>
          <TextInput placeholder="Email" className="w-full border p-3 rounded mb-3" />
          <TextInput placeholder="Password" secureTextEntry className="w-full border p-3 rounded mb-5" />

          <TouchableOpacity className="bg-blue-500 w-full p-3 rounded mb-3">
            <Text className="text-center text-white font-bold">Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCurrentScreen('forgot')}>
            <Text className="text-blue-500 mb-2">Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCurrentScreen('register')}>
            <Text className="text-gray-700">Create Account</Text>
          </TouchableOpacity>
        </>
      )}

      {/* REGISTER FORM */}
      {currentScreen === 'register' && (
        <>
          <Text className="text-2xl font-bold mb-4">Register</Text>
          <TextInput placeholder="Name" className="w-full border p-3 rounded mb-3" />
          <TextInput placeholder="Email" className="w-full border p-3 rounded mb-3" />
          <TextInput placeholder="Password" secureTextEntry className="w-full border p-3 rounded mb-5" />

          <TouchableOpacity className="bg-green-500 w-full p-3 rounded mb-3">
            <Text className="text-center text-white font-bold">Sign Up</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCurrentScreen('login')}>
            <Text className="text-gray-700">Already have an account? Login</Text>
          </TouchableOpacity>
        </>
      )}

      {/* FORGOT PASSWORD FORM */}
      {currentScreen === 'forgot' && (
        <>
          <Text className="text-2xl font-bold mb-4">Forgot Password</Text>
          <TextInput placeholder="Email" className="w-full border p-3 rounded mb-5" />

          <TouchableOpacity className="bg-yellow-500 w-full p-3 rounded mb-3">
            <Text className="text-center text-white font-bold">Reset Password</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => setCurrentScreen('login')}>
            <Text className="text-gray-700">Back to Login</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
