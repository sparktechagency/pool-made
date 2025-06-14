import { IconsMenu } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

const MenuBar = () => {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const slideAnim = useRef(new Animated.Value(-520)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: drawerOpen ? 0 : -520,
      duration: 450,
      easing: drawerOpen ? Easing.out(Easing.ease) : Easing.in(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [drawerOpen]);

  return (
    <View style={tw`flex-row justify-between items-center my-4 `}>
      {/* Left - Hamburger and Logo */}
      <View style={tw`flex-row gap-2 items-center`}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <SvgXml xml={IconsMenu} />
        </TouchableOpacity>
        <Text style={tw`text-2xl font-rubik-700 text-[#141A47]`}>
          Hi, Mehedi
        </Text>
      </View>

      {/* Right - Icons and Avatar */}
      <View style={tw`flex-row items-center gap-2`}>
        {["Search", "Map", "Notifications"].map((_, idx) => (
          <TouchableOpacity
            key={idx}
            style={tw`p-2 rounded-full bg-[#3333331A]`}
            activeOpacity={0.7}
          >
            {/* Optional Icon Goes Here */}
          </TouchableOpacity>
        ))}

        <TouchableOpacity activeOpacity={0.7}>
          <Image
            source={require("@/assets/images/image.png")}
            style={tw`w-8 h-8 rounded-full`}
          />
        </TouchableOpacity>
      </View>

      {/* Drawer Modal */}
      <Modal transparent visible={drawerOpen} animationType="none">
        <Pressable
          style={tw`flex-1 bg-black bg-opacity-40`}
          onPress={() => setDrawerOpen(false)}
        >
          <Animated.View
            style={[
              tw`absolute top-0 bottom-0 left-0 w-80.1 rounded-r-2xl py-20 px-6 bg-white justify-between`,
              { transform: [{ translateX: slideAnim }] },
            ]}
          >
            <View style={tw`flex-col gap-6`}>
              {/* Drawer Header */}
              <View style={tw`flex-row items-center justify-between`}>
                <Text style={tw`text-9 font-rubik-700 text-[#141A47]`}>
                  Hi, Mehedi
                </Text>
                <TouchableOpacity onPress={() => setDrawerOpen(false)}>
                  {/* Close Icon (SvgXml) */}
                </TouchableOpacity>
              </View>

              {/* Navigation Section */}
              <View style={tw`flex-col gap-4`}>
                <Text style={tw`text-4 font-inter-700 text-textPrimary`}>
                  Navigation
                </Text>
                <View style={tw`flex-col gap-2`}>
                  <TouchableOpacity onPress={() => setDrawerOpen(false)}>
                    <View style={tw`flex-row items-center gap-2`}>
                      <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
                        Home
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>

              {/* Account Section */}
              <View style={tw`flex-col gap-4`}>
                <Text style={tw`text-4 font-inter-700 text-textPrimary`}>
                  Account
                </Text>
                <View style={tw`flex-col gap-2`}>
                  <TouchableOpacity>
                    <View style={tw`flex-row items-center gap-2`}>
                      <Text style={tw`text-4 font-inter-400 text-[#454545]`}>
                        Change Password
                      </Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* Optional Logout */}
            <View>{/* <Logout /> */}</View>
          </Animated.View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default MenuBar;
