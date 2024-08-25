import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Pressable, Text } from "react-native";

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView className="flex-1 items-center justify-center">
      <View className="items-center">
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          className="text-center font-[Menlo] text-[200px] font-bold text-blue-400"
        >
          {count}
        </Text>

        <Pressable
          onPress={() => setCount(count + 1)}
          className="size-40 items-center justify-center rounded-full border-[6px] border-blue-300 bg-blue-400 active:bg-blue-500"
        >
          <Text className="text-2xl font-bold text-white">Touch</Text>
        </Pressable>

        <Pressable onPress={() => setCount(0)} className="mt-10">
          <Text className="text-lg font-medium text-red-500">Reset</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
