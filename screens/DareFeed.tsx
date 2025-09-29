import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bookmark, Bookmark as BookmarkFilled, Plus } from "lucide-react-native";
import Toast from "./components/Toast"; 

export default function DareFeed() {
  // State to track bookmarked cards
  const [bookmarkedCards, setBookmarkedCards] = useState<number[]>([]);
  const [toastMessage, setToastMessage] = useState("");
  const dares = [
    {
      title: "Hold a plank for 60 secondsHold a plank for 60 seconds while keeping your core tight, back straight, and avoiding any sagging in your hips to maximize strength and stability gains",
      people: "150+",
      desc: "Get into a push-up position, but rest on your forearms instead of your hands. Keep your body straight.",
      img: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg"
    },
    {
      title: "Wall Sit for 90 Seconds",
      people: "256+",
      desc: "Sit against the wall with thighs parallel to the floor. Test your willpower and leg strength.",
      img: "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg"
    },
    {
      title: "1-Minute Mountain Climbers",
      people: "318+",
      desc: "Stay in plank and sprint with your knees. A heart-pumping, sweat-dripping challenge.",
      img: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
    }
  ];

  const handleBookmark = (index: number) => {
  if (bookmarkedCards.includes(index)) {
    setBookmarkedCards(bookmarkedCards.filter(i => i !== index));
  } else {
    setBookmarkedCards([...bookmarkedCards, index]);
    setToastMessage("Bookmark Added"); // show toast
  }
};

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1 px-4">
         <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-4 px-2">
            <View className="flex-row gap-x-4">
              {[
                { name: 'MoneyMoves', img: 'https://i.pravatar.cc/50?img=1' },
                { name: 'BodyBeat', img: 'https://i.pravatar.cc/50?img=2' },
                { name: 'MindBoost', img: 'https://i.pravatar.cc/50?img=3' },
                { name: 'SkillUp', img: 'https://i.pravatar.cc/50?img=4' },
                { name: 'SkillUp', img: 'https://i.pravatar.cc/50?img=4' },
                { name: 'SkillUp', img: 'https://i.pravatar.cc/50?img=4' },
              ].map((category, idx) => {
                const isActive = idx === 0; // Example: first tab active
                return (
                  <TouchableOpacity key={idx} className="items-center">
                    {/* Rounded Image */}
                    <Image
                      source={{ uri: category.img }}
                      className="w-16 h-16 rounded-full"
                    />
                    {/* Category Text */}
                    <Text className="text-xs mt-1 font-semibold">{category.name}</Text>
                    {/* Active underline */}
                    {isActive && <View className="h-1 w-full bg-mint mt-1 rounded-full" />}
                  </TouchableOpacity>
                );
              })}
            </View>
         </ScrollView>

        
        {/* Stats Row */}
        <View className="flex-row h-[52px] justify-between items-center bg-secondary border border-green-500 rounded-xl p-3 mt-3">
          <Text className="text-sm">⚡ 56 Dares</Text>
          <Text className="text-sm">❤️ 236 Life Points</Text>
          <Text className="text-sm">🔥 45 No Skip Days</Text>
        </View>

        {/* Sort + Chips */}
        <View className="flex-row items-center justify-between mt-4">
          <Text className="font-semibold text-base">Body Beat</Text>
          <TouchableOpacity className="flex-row items-center">
            <Text className="mr-1">Sort: Newest</Text>
          </TouchableOpacity>
        </View>

        {/* Profession Chips */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mt-3">
          <View className="flex-row gap-x-2">
            {['All', 'Students', 'Professionals', 'Coaches', 'Doctors'].map((chip, idx) => (
              <TouchableOpacity
                key={idx}
                className={`px-4 py-2 rounded-full border ${
                  chip === 'All' ? 'bg-gray-900 border-gray-900' : 'border-gray-300'
                }`}
              >
                <Text className={`${chip === 'All' ? 'text-white' : 'text-gray-600'} text-sm`}>
                  {chip}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Add New Dare Card */}
        <TouchableOpacity className="border-2 border-dotted border-mint rounded-2xl items-center py-10 mt-5">
          <View className="flex-row items-center space-x-2">
            <Plus size={24} color="gray" />
            <Text className="font-semibold text-base mt-2">Create New Dare</Text>
          </View>
          <Text className="text-gray-500 text-sm">Drop your dare, spark the fun!</Text>
        </TouchableOpacity>

        {/* Dare Cards */}
        {dares.map((dare, idx) => {
          const isBookmarked = bookmarkedCards.includes(idx);
          return (
            <View key={idx} className="bg-white border border-gray-200 rounded-2xl p-4 mt-4 shadow">

              {/* Top Row: Image + Title/People + Bookmark */}
              <View className="flex-row items-start justify-between">
                
                {/* Image + Title/People */}
                <View className="flex-row flex-1 items-start">
                  <Image
                    source={{ uri: dare.img }}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <View className="flex-1">
                    <Text className="font-bold text-base" numberOfLines={1} ellipsizeMode="tail">{dare.title}</Text>
                    <Text className="text-[13px] font-normal text-gray-900 mt-1">
                      <Text className="font-semibold">{dare.people}</Text> People dared this
                    </Text>
                  </View>
                </View>

                {/* Bookmark Icon */}
                <TouchableOpacity onPress={() => handleBookmark(idx)} className="pl-4">
                  {isBookmarked ? (
                    <BookmarkFilled size={22} color={isBookmarked ? "#FCD34D" : "gray"} fill={isBookmarked ? "#FCD34D" : "none"} />
                  ) : (
                    <Bookmark size={22} color="gray" />
                  )}
                </TouchableOpacity>
              </View>

              {/* Description Paragraph */}
              <Text className="text-gray-600 text-sm mt-3">{dare.desc}</Text>

              {/* Bottom Row: By user & Dare Now */}
              <View className="flex-row justify-between items-center mt-4">
                
                {/* By User */}
                <View className="flex-row items-center">
                  <Image source={{ uri: "https://i.pravatar.cc/50" }} className="w-6 h-6 rounded-full mr-2" />
                  <Text className="text-xs text-gray-700">By John Rosario</Text>
                </View>

                {/* Dare Now Button */}
                <TouchableOpacity className="bg-mint rounded-lg px-4 py-2">
                  <Text className="text-white font-semibold text-sm">Dare Now</Text>
                </TouchableOpacity>
              </View>

            </View>
          );
        })}
      </ScrollView>
      {toastMessage ? (
    <Toast message={toastMessage} onHide={() => setToastMessage("")} />
  ) : null}
    </SafeAreaView>
  );
}
