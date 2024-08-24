import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView>
      <Text className="text-center text-2xl font-bold text-blue-600">
        Home Screen
      </Text>
    </SafeAreaView>
  );
};

export default Home;
