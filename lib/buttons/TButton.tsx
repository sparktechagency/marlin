import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import React from "react";
import tw from "../tailwind";

interface IButton {
  containerStyle?: {};
  titleStyle?: {};
  title?: string;
  isLoading?: boolean;
  onPress?: () => void;
  loadingColor?: string;
  disabled?: boolean;
}

const TButton = ({
  containerStyle,
  title,
  titleStyle,
  isLoading,
  onPress,
  loadingColor,
  disabled,
}: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={isLoading || disabled}
      activeOpacity={0.5}
      style={[
        tw`bg-primary h-14 flex-row justify-center items-center gap-3 rounded-full   ${
          disabled ? "opacity-60" : "opacity-100"
        }`,
        containerStyle,
      ]}
    >
      {isLoading && (
        <ActivityIndicator color={loadingColor ? loadingColor : "white"} />
      )}
      {title && (
        <Text
          style={[
            tw`text-white font-DegularDisplaySemibold text-lg text-center `,
            titleStyle,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default TButton;

const styles = StyleSheet.create({});
