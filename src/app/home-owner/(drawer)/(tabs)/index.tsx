import CustomHeader from "@/src/components/CustomHeader";
import GetQuotesModal from "@/src/components/ui/GetQuotesModal";
import HomePrevFeatures from "@/src/components/ui/HomePrevFeatures";
import HomeProvHeroBanner from "@/src/components/ui/HomeProvHeroBanner";
import Search from "@/src/components/ui/Search";
import TopProviders from "@/src/components/ui/TopProviders";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true); // Open modal after 3 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <Wrapper>
      <View style={tw`flex-1 `}>
        <CustomHeader />
        <Search />

        <GetQuotesModal
          visible={showModal}
          onClose={() => setShowModal(!showModal)}
        />

        <ScrollView
          style={tw`flex-col gap-4 `}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        >
          <HomeProvHeroBanner />
          <HomePrevFeatures />
          <TopProviders />
        </ScrollView>
      </View>
    </Wrapper>
  );
}
