// import { IconsDate } from "@/assets/icons";
// import tw from "@/src/lib/tailwind";
// import React, { useState } from "react";
// import { Text, TouchableOpacity, View } from "react-native";
// import DateTimePickerModal from "react-native-modal-datetime-picker";
// import { SvgXml } from "react-native-svg";

// const SetDate = () => {
//   const [isDatePickerVisible, setDatePickerVisibility] =
//     useState<boolean>(false);
//   const [viewDate, setViewDate] = useState<string>("");

//   const handleConfirm = (date: Date) => {
//     const selectedDate = date.toLocaleDateString([], {
//       day: "2-digit",
//       month: "2-digit",
//       year: "numeric",
//     });

//     console.warn("Selected Time:", selectedDate);
//     setViewDate(selectedDate);
//     setDatePickerVisibility(false);
//   };

//   return (
//     <View>
//       <TouchableOpacity
//         style={tw`bg-[#ECF1F6] p-3 rounded-md flex-row items-center justify-between`}
//         onPress={() => setDatePickerVisibility(true)}
//       >
//         {viewDate ? (
//           <Text style={tw`text-base text-title_color`}>{viewDate}</Text>
//         ) : (
//           <Text style={tw`text-base text-title_color`}>Select date</Text>
//         )}
//         <SvgXml xml={IconsDate} />
//       </TouchableOpacity>
//       <DateTimePickerModal
//         isVisible={isDatePickerVisible}
//         mode="date"
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

// export default SetDate;

import { IconsDate } from "@/assets/icons";
import tw from "@/src/lib/tailwind";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Text, TouchableOpacity, View } from "react-native";
import { SvgXml } from "react-native-svg";

const SetDate = () => {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const onChange = (event: any, selectedDate?: Date) => {
    setShowPicker(Platform.OS === "ios"); // iOS stays open, Android auto-hides
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={tw`bg-[#ECF1F6] p-3 rounded-md flex-row items-center justify-between`}
        onPress={() => setShowPicker(true)}
      >
        <Text style={tw`text-base text-title_color`}>
          {date ? date.toLocaleDateString() : "Select date"}
        </Text>
        <SvgXml xml={IconsDate} />
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={date}
          mode="date" // ✅ This shows calendar date
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};

export default SetDate;
