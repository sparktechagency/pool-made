import tw from "@/src/lib/tailwind";
import SimplifyDate from "@/src/utils/SimplifyDate";
import { router } from "expo-router";
import React, { useState } from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import CustomHeader from "../CustomHeader";

type UserProp = {
  name: string;
  image: string;
  id: number;
  date: string;
  message: string;
};

const userData: UserProp[] = [
  {
    id: 1,
    name: "Lara Voss",
    image: "https://i.ibb.co/x8dDLyjJ/Ellipse-10-1.png",
    message: "Hi there! What's new?",
    date: "2025-06-19T09:30:00Z",
  },
  {
    id: 2,
    name: "Nota ",
    image: "https://i.ibb.co/BVfhLYvG/Ellipse-10-2.png",
    message: "Hello! How's it going?",
    date: "2025-06-18T17:45:00Z",
  },
  {
    id: 3,
    name: "Lara Voss",
    image: "https://i.ibb.co/x8dDLyjJ/Ellipse-10-1.png",
    message: "Hi there! What's new?",
    date: "2025-06-17T14:20:00Z",
  },
  {
    id: 4,
    name: "Noah Smith",
    image: "https://i.ibb.co/BVfhLYvG/Ellipse-10-2.png",
    message: "Hello! How's it going?",
    date: "2025-06-19T11:10:00Z",
  },
  {
    id: 5,
    name: "Ava Davis",
    image: "https://i.ibb.co/x8dDLyjJ/Ellipse-10-1.png",
    message: "Hello! How's it going?",
    date: "2025-06-18T08:05:00Z",
  },
  {
    id: 6,
    name: "William Wilson",
    image: "https://i.ibb.co/BVfhLYvG/Ellipse-10-2.png",
    message: "Hello! How's it going?",
    date: "2025-06-17T19:50:00Z",
  },
];

const ChatView = () => {
  const [viewChat, setViewChat] = useState<boolean>(false);
  const [selectedChatId, setSelectedChatId] = useState<number[]>([]);

  const handleChat = (id: number) => {
    if (!selectedChatId.includes(id)) {
      setSelectedChatId((pre) => [...pre, id]);
    }
    setViewChat(true);
    router.push({
      pathname: "/common/[id]",
      params: { id: String(id) },
    });
  };

  // console.log(viewChat, "jhpgiu", selectedChatId);

  const renderItem = ({ item }: { item: UserProp }) => (
    <TouchableOpacity
      key={item?.id}
      style={tw`  my-2`}
      onPress={() => handleChat(item?.id)}
    >
      <View style={tw`flex-row items-center my-2  justify-between `}>
        {/* Left side: Image + Name + Description */}
        <View style={tw`flex-row items-center gap-2`}>
          <Image
            source={{ uri: item?.image }}
            style={tw`w-12 h-12 rounded-2`}
          />
          <View>
            <Text
              style={tw`text-base ${
                selectedChatId.includes(item.id)
                  ? "text-secondary_button_color"
                  : "text-title_color"
              } font-roboto-600`}
            >
              {item.name}
            </Text>
            <Text
              style={tw`text-sm ${
                selectedChatId.includes(item.id)
                  ? "text-secondary_button_color"
                  : "text-title_color"
              } font-roboto-400`}
            >
              {item.message.slice(0, 30)}
            </Text>
          </View>
        </View>

        {/* Right side: Price */}
        <Text
          style={tw`text-sm ${
            selectedChatId.includes(item.id)
              ? "text-secondary_button_color"
              : "text-title_color"
          } font-roboto-400`}
        >
          {/* {new Date(item.date).toTimeString()} */}
          {SimplifyDate(item.date)}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={tw`gap-3 flex-1 my-3`}>
      <CustomHeader />
      <FlatList
        data={userData}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ChatView;
