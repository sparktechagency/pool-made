import { Icons3Dot, IconsDleled, IconsSend } from "@/assets/icons";
import KeyboardAvoidingWrapper from "@/src/components/KeyboardAvoidingWrapper";
import BackButton from "@/src/components/ui/BackButton";
import GallaryImage from "@/src/components/ui/GallaryImage";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind"; // অথবা তোমার twrnc config
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SvgXml } from "react-native-svg";

const messages = [
  { id: 1, text: "Hi! How are you?", sender: "other" },
  { id: 2, text: "I am fine. You?", sender: "me" },
  {
    id: 3,
    text: "I am also fine. OK so can you tell me about service that you wanted?",
    sender: "other",
  },
  {
    id: 4,
    text: "I have 4 bedrooms and three washrooms. Can you help me to clean this out?",
    sender: "me",
  },
];

const ChatScreen = () => {
  const [input, setInput] = useState("");
  const [deletedView, setDeletedView] = useState<boolean>(false);

  const renderItem = ({ item }: { item: (typeof messages)[0] }) => {
    const isMe = item.sender === "me";

    return (
      <View
        style={tw.style(
          "flex-row items-end my-2 px-4",
          isMe ? "justify-end" : "justify-start"
        )}
      >
        {!isMe && (
          <Image
            source={{ uri: "https://i.ibb.co/x8dDLyjJ/Ellipse-10-1.png" }}
            style={tw`w-6 h-6 rounded-full mr-2`}
          />
        )}

        <View style={tw.style("max-w-[70%] px-3 py-2 rounded-xl")}>
          <Text style={tw`text-black`}>{item.text}</Text>
        </View>

        {isMe && (
          <Image
            source={{ uri: "https://i.ibb.co/BVfhLYvG/Ellipse-10-2.png" }}
            style={tw`w-6 h-6 rounded-full ml-2`}
          />
        )}
      </View>
    );
  };
  return (
    <KeyboardAvoidingWrapper>
      <Wrapper>
        <View style={tw`flex-1 `}>
          {/* Header */}
          <View style={tw` flex-row justify-between items-center  py-2 `}>
            <View style={tw` flex-row justify-evenly items-center  `}>
              <BackButton />
              {/*  */}
              <Image
                source={{ uri: "https://i.ibb.co/x8dDLyjJ/Ellipse-10-1.png" }}
                style={tw`w-10 h-10 rounded-full mr-3`}
              />
              <Text style={tw`text-lg font-bold text-title_color`}>
                Lara Voss
              </Text>
            </View>
            <View style={tw``}>
              <TouchableOpacity onPress={() => setDeletedView(!deletedView)}>
                <SvgXml xml={Icons3Dot} />
              </TouchableOpacity>
            </View>
          </View>

          {deletedView && (
            <TouchableOpacity
              style={tw` flex-row items-end justify-end shadow-2xl px-4 py-2 rounded-lg absolute right-0 top-16 bg-white`}
              onPress={() => setDeletedView(!deletedView)}
            >
              <SvgXml xml={IconsDleled} />
              <Text>Delete conversation</Text>
            </TouchableOpacity>
          )}

          {/* Chat Messages */}
          <FlatList
            data={messages}
            keyExtractor={(item) => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={tw`py-3`}
            showsVerticalScrollIndicator={false}
          />

          {/* Input Box */}
          <View
            style={tw`flex-row items-center mb-4 bg-white flex justify-center rounded-2xl `}
          >
            <TextInput
              value={input}
              onChangeText={setInput}
              placeholder="Write your message..."
              placeholderTextColor="454545"
              style={tw`flex-1 text-base py-3 px-2.5 rounded-full  text-black`}
              selectionColor={"#454545"}
            />
            <TouchableOpacity style={tw`ml-3`}>
              {/* <SvgXml xml={IconsCamara} /> */}
              <GallaryImage />
            </TouchableOpacity>
            <TouchableOpacity style={tw`ml-3`}>
              <SvgXml xml={IconsSend} />
            </TouchableOpacity>
          </View>
        </View>
      </Wrapper>
    </KeyboardAvoidingWrapper>
  );
};

export default ChatScreen;
