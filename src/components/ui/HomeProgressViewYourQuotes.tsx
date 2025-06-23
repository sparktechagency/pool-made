import tw from "@/src/lib/tailwind";
import dateFormate from "@/src/utils/dateFormate";
import { router } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

type UserProp = {
  id: number;
  name: string;
  image: string;
  date: string;
};

const userData: UserProp[] = [
  {
    id: 1,
    name: "Olivia Martinez",
    image: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
    date: "2025-06-01",
  },
  {
    id: 2,
    name: "Liam Johnson",
    image: "https://i.ibb.co/zTkFM36k/Rectangle-5043-2.png",
    date: "2025-06-02",
  },
  {
    id: 3,
    name: "Emma Brown",
    image: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
    date: "2025-06-03",
  },
  {
    id: 4,
    name: "Noah Smith",
    image: "https://i.ibb.co/zTkFM36k/Rectangle-5043-2.png",
    date: "2025-06-04",
  },
  {
    id: 5,
    name: "Ava Davis",
    image: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
    date: "2025-06-05",
  },
  {
    id: 6,
    name: "William Wilson",
    image: "https://i.ibb.co/zTkFM36k/Rectangle-5043-2.png",
    date: "2025-06-06",
  },
  {
    id: 7,
    name: "Sophia Moore",
    image: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
    date: "2025-06-07",
  },
  {
    id: 8,
    name: "James Taylor",
    image: "https://i.ibb.co/zTkFM36k/Rectangle-5043-2.png",
    date: "2025-06-08",
  },
  {
    id: 9,
    name: "Isabella Anderson",
    image: "https://i.ibb.co/pvjqbkRZ/Rectangle-5043.png",
    date: "2025-06-09",
  },
  {
    id: 10,
    name: "Benjamin Thomas",
    image: "https://i.ibb.co/zTkFM36k/Rectangle-5043-2.png",
    date: "2025-06-10",
  },
];

const HomePandingViewYourQuotes = () => {
  const renderItem = ({ item }: { item: UserProp }) => (
    <TouchableOpacity
      key={item?.id}
      style={tw`rounded-2xl bg-input_bg_gray my-2`}
      onPress={() =>
        router.push({
          pathname: "/home-owner/process/[id]",
          params: { id: String(item.id) },
        })
      }
    >
      <View style={tw`flex-row items-center justify-between p-4`}>
        <View style={tw`flex-row items-center gap-2`}>
          <Image source={{ uri: item.image }} style={tw`w-12 h-12 rounded-2`} />
          <View>
            <Text style={tw`text-lg text-title_color font-roboto-600`}>
              {item.name}
            </Text>
            <Text
              style={tw`text-sm text-secondary_button_color font-roboto-400`}
            >
              Select a date:
              <Text style={tw`text-sm text-button_color font-roboto-400`}>
                {" "}
                {dateFormate(item.date)}
              </Text>
            </Text>
          </View>
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

export default HomePandingViewYourQuotes;
