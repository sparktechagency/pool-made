import BackButton from "@/src/components/ui/BackButton";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Notification() {
  // const [setIsFollowing, setIsFollowingsetIsFollowing] =
  //   useState<boolean>(false);

  const [clicked, setClicked] = useState<boolean>(false);

  const handlePress = () => {
    if (!clicked) {
      // console.log(clicked);

      setClicked(true); // only once
    }

    // router.push("notifications/1");
  };

  return (
    <Wrapper>
      <View style={tw`flex-1 `}>
        <View style={tw` flex-row items-center justify-between`}>
          {/* Submit Button */}
          <BackButton title="Notifications" />
          <Pressable
            // onPress={handleSubmit}
            style={tw``}
          >
            <Text
              style={tw`text-center text-[#E53E3E]  text-sm font-roboto-600 underline`}
            >
              Read all
            </Text>
          </Pressable>
        </View>

        {/* when the api changes ScrollView and adds flatList  */}
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw` flex-col gap-4 `}>
            {/*  Notifications  */}
            <TouchableOpacity onPress={handlePress} style={tw` `}>
              <View
                style={tw` flex-row justify-between items-center ${
                  clicked ? "" : "bg-[#D5D5D51A]"
                }  p-2 rounded-2 `}
              >
                <View style={tw`flex-row items-center gap-2`}>
                  <Image
                    style={tw`h-14 w-14 rounded-full`}
                    source={{
                      uri: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
                    }}
                  />
                  <View style={tw`flex-col gap-1`}>
                    <View style={tw`flex-row justify-center gap-1`}>
                      <Text style={tw`text-sm font-roboto-600 `}>
                        Liam O'Connor
                      </Text>
                      <Text style={tw`text-sm text-text_gray`}>
                        {" "}
                        selected for your service.
                      </Text>
                    </View>
                    <View>
                      <Text style={tw` text-sm text-text_gray`}> 09:31 PM</Text>
                    </View>
                  </View>
                </View>
                {clicked ? (
                  ""
                ) : (
                  <View>
                    <View style={tw`w-2 h-2 rounded-full bg-[#E53E3E]`} />
                  </View>
                )}
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
}
