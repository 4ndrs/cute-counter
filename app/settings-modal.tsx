import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSettings } from "@/store/settings";
import { Alert, Pressable, Switch, Text, View } from "react-native";

import Divider from "@/components/divider";

const SettingsModal = () => {
  const settings = useSettings();

  return (
    <>
      <StatusBar style="light" />

      <View className="flex-1 bg-gray-100 p-5">
        <View className="ml-auto mr-0">
          <Link href="../">
            <Text className="text-lg font-bold text-blue-500">Done</Text>
          </Link>
        </View>

        <Text className="mb-4 mt-8 text-4xl font-bold">Settings</Text>

        <View className="gap-4 rounded-lg bg-white p-6">
          <View className="flex-row items-center justify-between">
            <Text>Haptics</Text>
            <Switch
              value={settings.haptics}
              trackColor={{ true: "#3b82f6" }}
              onValueChange={() => settings.toggleHaptics()}
            />
          </View>

          <Divider />

          <Pressable
            onPress={() => {
              Alert.prompt(
                "Daily Goal",
                "Enter a number",
                (value) => {
                  if (value === null) {
                    return;
                  }

                  if (isNaN(+value) || +value < 1) {
                    settings.setDailyGoal(0);
                    return;
                  }

                  settings.setDailyGoal(+value);
                },
                "plain-text",
                settings.dailyGoal > 0 ? `${settings.dailyGoal}` : "",
                "number-pad",
              );
            }}
            className="flex-row items-center justify-between"
          >
            <Text>Daily Goal</Text>
            <Text className="text-gray-500">
              {settings.dailyGoal === 0 ? "Disabled" : settings.dailyGoal}
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
};

export default SettingsModal;
