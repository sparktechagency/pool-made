import { IconsMenu, IconsMenuNotification } from "@/assets/icons";
import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "../lib/tailwind";

type NavigationProp = DrawerNavigationProp<Record<string, object | undefined>>;

export default function CustomHeader() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={tw`flex-row justify-between items-center  py-2`}>
      <View style={tw`flex-row  gap-2`}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <SvgXml xml={IconsMenu} />
        </TouchableOpacity>

        <View style={tw`flex-col gap-1 `}>
          <Text style={tw` text-2xl text-title_color font-roboto-600`}>
            Hi, Mehedi
          </Text>
          <Text style={tw`text-xs text-sub_title_color font-roboto-400`}>
            3/2 Park street, Los Angeles, USA
          </Text>
        </View>
      </View>

      <View style={tw`flex-row items-center gap-2`}>
        <TouchableOpacity
          style={tw`bg-[#ECF1F6] relative w-11 h-11 rounded-full items-center flex justify-center`}
          onPress={() => router.push("/common/notification")}
        >
          <SvgXml xml={IconsMenuNotification} />
          <View
            style={tw`bg-red-600 absolute right-[13px] top-[11px]  w-2 h-2 rounded-full `}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`bg-[#ECF1F6] h-12 w-12 rounded-full items-center flex justify-center`}
          onPress={() => router.push("/user-profile")}
        >
          <Image
            source={require(`@/assets/images/Ellipse.png`)}
            style={tw`w-10 h-10 rounded-full `}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
