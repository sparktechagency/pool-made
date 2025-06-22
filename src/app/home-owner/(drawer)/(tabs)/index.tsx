import CustomHeader from "@/src/components/CustomHeader";
import GetQuotesModal from "@/src/components/ui/GetQuotesModal";
import HomePrevFeatures from "@/src/components/ui/HomePrevFeatures";
import HomeProvHeroBanner from "@/src/components/ui/HomeProvHeroBanner";
import Search from "@/src/components/ui/Search";
import TopProviders from "@/src/components/ui/TopProviders";
import Wrapper from "@/src/components/Wrapper";
import tw from "@/src/lib/tailwind";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";
import { useEffect, useRef } from "react";
import { ScrollView } from "react-native";

export default function HomeScreen() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      bottomSheetRef.current?.present(); //  Open after 3 seconds
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // setTimeout(() => {
  //   bottomSheetRef.current?.present(); //Open after 3 seconds
  // }, 1000);

  return (
    <Wrapper>
      <BottomSheetModalProvider>
        <CustomHeader />
        <Search />
        <GetQuotesModal sheetRef={bottomSheetRef} />

        <ScrollView
          style={tw`flex-col gap-4 `}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled
        >
          <HomeProvHeroBanner />
          <HomePrevFeatures />
          <TopProviders />
        </ScrollView>
      </BottomSheetModalProvider>
    </Wrapper>
  );
}
