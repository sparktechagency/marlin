import { Dimensions } from "react-native";

export const { height: _HIGHT, width: _WIDTH } = Dimensions.get("window");

export const PrimaryColor = "#1E90FF"; // Example primary color, replace with your actual primary color

export const RandomImage = `https://picsum.photos/200/300?random=${Math.floor(
  Math.random() * 1000
)}`;
