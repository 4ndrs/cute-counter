import { Link } from "expo-router";
import { useState } from "react";
import { useSettings } from "@/store/settings";
import { Pressable, Text } from "react-native";
import { Alert, SafeAreaView, View } from "react-native";

import Feather from "@expo/vector-icons/Feather";

import * as Haptics from "expo-haptics";

const Home = () => {
  const [count, setCount] = useState(0);

  const settings = useSettings();

  return (
    <SafeAreaView className="relative flex-1 items-center justify-center bg-white">
      <View className="absolute right-5 top-20">
        <Link href="/settings-modal">
          <Feather name="settings" size={24} color="black" />
        </Link>
      </View>

      <View className="items-center">
        <Text
          adjustsFontSizeToFit
          numberOfLines={1}
          className="text-center font-[Menlo] text-[200px] font-bold text-blue-400"
        >
          {count}
        </Text>

        <Pressable
          onPress={() => {
            if (settings.haptics) {
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
            }

            setCount(count + 1);
          }}
          className="size-40 items-center justify-center rounded-full border-[6px] border-blue-300 bg-blue-400 active:bg-blue-500"
        >
          <Text className="text-2xl font-bold text-white">Touch</Text>
        </Pressable>

        <Pressable
          onPress={() => {
            if (count === 0) {
              return;
            }

            if (settings.haptics) {
              Haptics.notificationAsync(
                Haptics.NotificationFeedbackType.Warning,
              );
            }

            Alert.alert(
              "Reset",
              "Are you sure you want to reset the counter?",
              [
                {
                  text: "Cancel",
                  style: "cancel",
                },
                {
                  text: "OK",
                  style: "destructive",
                  onPress: () => {
                    if (settings.haptics) {
                      Haptics.notificationAsync(
                        Haptics.NotificationFeedbackType.Success,
                      );
                    }

                    setCount(0);
                  },
                },
              ],
            );
          }}
          className="mt-10"
        >
          <Text className="text-lg font-medium text-red-500">Reset</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Home;
