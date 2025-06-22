// import { IconsClock } from "@/assets/icons";
// import tw from "@/src/lib/tailwind";
// import React, { useState } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import { SvgXml } from "react-native-svg";

// const SetTime = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] =
//     useState<boolean>(false);
//   const [viewTime, setViewTime] = useState<string>("");

//   const handleConfirm = (date: Date) => {
//     const selectedTime = date.toLocaleTimeString([], {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     });
//     console.warn("Selected Time:", selectedTime);
//     setViewTime(selectedTime);
//     setDatePickerVisibility(false);
//   };

//   return (
//     <View>
//       <TouchableOpacity
//         style={tw`bg-[#ECF1F6] p-3 rounded-md flex-row items-center justify-between `}
//         onPress={() => setDatePickerVisibility(true)}
//       >
//         {viewTime ? (
//           <Text style={tw`text-base text-title_color`}>{viewTime}</Text>
//         ) : (
//           <Text style={tw`text-base text-title_color`}>Select time</Text>
//         )}
//         <SvgXml xml={IconsClock} />
//       </TouchableOpacity>
//       <DateP
//         isVisible={isDatePickerVisible}
//         mode="time"
//         onConfirm={handleConfirm}
//         onCancel={() => setDatePickerVisibility(false)}
//         pickerStyleIOS={{
//           backgroundColor: "#1f2937", // dark gray
//         }}
//         textColor="#ffffff" // iOS only
//       />
//     </View>
//   );
// };

// export default SetTime;

// import React from "react";
// import { Text, View } from "react-native";

// const SetTime = () => {
//   return (
//     <View>
//       <Text>SetTime</Text>
//     </View>
//   );
// };

// export default SetTime;

import { IconsClock } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const SetTime = () => {
  const [time, setTime] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event: any, selectedTime?: Date) => {
    setShowPicker(Platform.OS === "ios"); // iOS stays open, Android auto-hides
    if (selectedTime) {
      setTime(selectedTime);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={tw`bg-[#ECF1F6] p-3 rounded-md flex-row items-center justify-between`}
        onPress={() => setShowPicker(true)}
      >
        <Text style={tw`text-base text-title_color`}>
          {time
            ? time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
                hour12: true,
              })
            : "Select time"}
        </Text>
        <SvgXml xml={IconsClock} />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={time}
          mode="time" // ✅ Corrected here
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default SetTime;
