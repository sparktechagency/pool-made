import { IconsDone } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

type UserProp = {
  id: number;
  name: string;
  image: string;
  price: number;
};

const userData: UserProp[] = [
  {
    id: 1,
    name: "Olivia Martinez",
    image: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
    price: 3999.5,
  },
  {
    id: 2,
    name: "Liam Johnson",
    image: "https://i.ibb.co/zTkFM36k/Rectangle-5043-2.png",
    price: 2450.0,
  },
  {
    id: 3,
    name: "Emma Brown",
    image: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
    price: 3245.75,
  },
  {
    id: 4,
    name: "Noah Smith",
    image: "https://i.ibb.co/zTkFM36k/Rectangle-5043-2.png",
    price: 2890.0,
  },
  {
    id: 5,
    name: "Ava Davis",
    image: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
    price: 3100.0,
  },
  {
    id: 6,
    name: "William Wilson",
    image: "https://i.ibb.co/zTkFM36k/Rectangle-5043-2.png",
    price: 1999.99,
  },
  {
    id: 7,
    name: "Sophia Moore",
    image: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
    price: 3600.0,
  },
  {
    id: 8,
    name: "James Taylor",
    image: "https://i.ibb.co/zTkFM36k/Rectangle-5043-2.png",
    price: 2750.25,
  },
  {
    id: 9,
    name: "Isabella Anderson",
    image: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
    price: 4200.0,
  },
  {
    id: 10,
    name: "Benjamin Thomas",
    image: "https://i.ibb.co/zTkFM36k/Rectangle-5043-2.png",
    price: 3899.5,
  },
];
const HomeViewYourQuotes = () => {
  const renderItem = ({ item }: { item: UserProp }) => (
    <TouchableOpacity
      key={item?.id}
      style={tw`rounded-2xl bg-input_bg_gray my-2`}
      onPress={() =>
        router.push({
          pathname: "/home-owner/complete-opder/[id]",
          params: { id: String(item.id) },
        })
      }
    >
      <View style={tw`flex-row items-center justify-between p-4 relative`}>
        {/* Left side: Image + Name + Description */}
        <View style={tw`flex-row items-center gap-2`}>
          <Image source={{ uri: item.image }} style={tw`w-12 h-12 rounded-2`} />
          <View>
            <Text style={tw`text-lg text-title_color font-roboto-600`}>
              {item.name}
            </Text>
            <Text
              style={tw`text-sm text-secondary_button_color font-roboto-400`}
            >
              Total cost:
              <Text style={tw`text-sm text-button_color font-roboto-400`}>
                {" "}
                ${item.price}
              </Text>
            </Text>
          </View>
        </View>

        <View style={tw` absolute -top-1 -right-0`}>
          <SvgXml xml={IconsDone} />
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={tw`gap-3 flex-1`}>
      <FlatList
        data={userData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default HomeViewYourQuotes;
