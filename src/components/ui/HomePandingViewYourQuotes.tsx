import tw from "@/src/lib/tailwind";
import dateFormate from "@/src/utils/dateFormate";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import HomeDeletedModal from "./HomeDeletedModal";

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
  const [data, setData] = useState<UserProp[]>(userData);
  const [userId, setUserId] = useState<number>();
  const [deletesmodalVisible, setDeletesModalVisible] =
    useState<boolean>(false);

  const [viewModel, setViewModel] = useState<boolean>(false);

  const handleDelete = (rowKey: number) => {
    const newData = data.filter((item) => item.id !== rowKey);
    setData(newData);
  };

  const renderItem = ({ item }: { item: UserProp }) => (
    <Pressable
      onPress={() => setViewModel(!viewModel)}
      style={tw`rounded-xl bg-input_bg_gray my-2`}
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
    </Pressable>
  );

  const renderHiddenItem = ({ item }: { item: UserProp }) => (
    <View style={tw`flex-row justify-end items-center flex-1`}>
      <TouchableOpacity
        onPress={() => {
          setUserId(item.id);
          setDeletesModalVisible(true);
          handleDelete(item.id);
        }}
        style={tw`bg-white w-full items-end justify-end rounded-xl h-18`}
      >
        <View style={tw`w-full flex-1 items-end justify-center px-4`}>
          <Ionicons name="trash" size={24} color="red" />
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={tw`flex-1 gap-3`}>
      <SwipeListView
        data={data} // fixed
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        disableRightSwipe
      />

      <HomeDeletedModal
        deletesmodalVisible={deletesmodalVisible}
        setDeletesModalVisible={setDeletesModalVisible}
        userId={userId} // optional
      />
      <Modal animationType="fade" transparent visible={viewModel}>
        <View style={tw`flex-1 items-end justify-end `}>
          <View style={tw`bg-white shadow-xl  max-h-[70%] p-4 rounded-lg `}>
            {/* Image */}
            <Image
              source={require("@/assets/images/rectangle-banner.png")}
              style={tw`w-full h-40 rounded-xl`}
              resizeMode="cover"
            />

            <View style={tw`flex-1 justify-between`}>
              {/* Description */}
              <View style={tw`py-4`}>
                <Text
                  style={tw`text-base text-title_color font-roboto-600 mb-4`}
                >
                  I need a cleaner to clean my swimming pool which are 34 meters
                  long.
                </Text>

                <View style={tw`flex-col gap-7`}>
                  <View>
                    <InfoRow label="Category" value="Pool Cleaning" />
                    <InfoRow
                      label="Property type"
                      value="Commercial Property"
                    />
                    <InfoRow label="Service date" value="12/04/2026" />
                    <InfoRow label="Zip code" value="5555 " />
                    <InfoRow label="Address" value="3/2 Los Angeles, USA" />
                    <InfoRow label="Expected budget" value="$7346.00" />
                  </View>

                  {/* Owner Info */}

                  <View style={tw`flex-col gap-4`}>
                    {/* Pay Button */}
                    <TouchableOpacity
                      style={tw`bg-button_color py-3 rounded-full items-center `}
                      onPress={() =>
                        router.push("/home-owner/badding/badding-histrory")
                      }
                    >
                      <Text style={tw`text-white text-lg font-roboto-600`}>
                        Check Bidding
                      </Text>
                    </TouchableOpacity>
                    {/* Pay Button */}
                    <TouchableOpacity
                      style={tw` border-[#8F8F8F] border-[1px]  py-3 rounded-full items-center `}
                      onPress={() => setViewModel(!viewModel)}
                    >
                      <Text
                        style={tw`text-secondary_button_color text-lg font-roboto-600`}
                      >
                        Cancel
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const InfoRow = ({ label, value }: { label: string; value: string }) => (
  <View style={tw`flex-row justify-between py-1`}>
    <Text style={tw`text-secondary_button_color font-roboto-400`}>{label}</Text>
    <Text style={tw`text-title_color text-sm font-roboto-500`}>{value}</Text>
  </View>
);

export default HomePandingViewYourQuotes;
