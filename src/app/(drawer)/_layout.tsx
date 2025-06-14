// import {
//   DrawerContentScrollView,
//   DrawerItemList,
//   DrawerContentComponentProps,
// } from '@react-navigation/drawer';

// function CustomDrawerContent(props: DrawerContentComponentProps) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//     </DrawerContentScrollView>
//   );
// }

// export default CustomDrawerContent;

// import {
//   DrawerContentComponentProps,
//   DrawerContentScrollView,
//   DrawerItem,
// } from "@react-navigation/drawer";
// import { router } from "expo-router";
// import { Drawer } from "expo-router/drawer";
// import { Text } from "react-native";
// import tw from "twrnc";

// const CustomDrawerContant = (props: DrawerContentComponentProps) => {
//   return (
//     <DrawerContentScrollView {...props}>
//       <Text style={tw`text-3xl font-semibold`}>Navigation</Text>
//       <DrawerItem
//         label={"Home"}
//         onPress={() => {
//           router.push("/(drawer)/(tabs)");
//         }}
//       />
//     </DrawerContentScrollView>
//   );
// };

// export default function Layout() {
//   return (
//     <Drawer
//       screenOptions={{
//         headerShown: false,
//       }}
//       drawerContent={(props) => CustomDrawerContant({ ...props })}
//     />
//   );
// }
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from "@react-navigation/drawer";
import { router } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Text } from "react-native";
import tw from "twrnc";

const CustomDrawerContant = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={tw`text-3xl font-semibold`}>Navigation</Text>

      <DrawerItem
        label="Terms & Conditions"
        onPress={() => router.push("/(drawer)/change-password")}
      />
      <DrawerItem
        label="Terms & Conditions"
        onPress={() => router.push("/(drawer)/privacy-policy")}
      />
      <DrawerItem
        label="Terms & Conditions"
        onPress={() => router.push("/(drawer)/terms-and-conditions")}
      />

      <Text style={tw`text-3xl font-semibold`}>Account</Text>
      <DrawerItem
        label={"Change password"}
        onPress={() => {
          //   router.push("/ChangePassword");
        }}
      />
    </DrawerContentScrollView>
  );
};

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => CustomDrawerContant({ ...props })}
    />
  );
}
