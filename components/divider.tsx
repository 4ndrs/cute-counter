import { View } from "react-native";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

const Divider = ({ className }: Props) => (
  <View className={twMerge("my-4 border-b border-gray-200", className)} />
);

export default Divider;
