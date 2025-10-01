import { useNavigation } from "@react-navigation/native";
import { Image, TouchableOpacity, View } from "react-native";

export const BackButton = () =>{
    const  nav = useNavigation()
    return (
          <View className="absolute left-[24px] top-[50px] ">
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
          }}
        >
          <Image
            source={require("../../assets/AuthScreenAssets/Vector.png")}
            className="p-[5px]"
          />
        </TouchableOpacity>
      </View>
    )
}
