import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useSettings } from "@/store/settings";
import { Switch, Text, View } from "react-native";

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

        <View className="gap-4">
          <View className="flex-row items-center justify-between rounded-lg bg-white p-6">
            <Text>Haptics</Text>
            <Switch
              value={settings.haptics}
              trackColor={{ true: "#3b82f6" }}
              onValueChange={() => settings.toggleHaptics()}
            />
          </View>
        </View>
      </View>
    </>
  );
};

export default SettingsModal;
