import React, { ReactNode } from "react";
import { Dimensions, StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  PanGestureHandler,
} from "react-native-gesture-handler";
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

const { height } = Dimensions.get("window");

interface GuestBottomHitProps {
  children: ReactNode;
  onClose: () => void;
  height?: number | any;
}

const GuestBottomHit = ({ children, onClose, height }: GuestBottomHitProps) => {
  const translateY = useSharedValue(0);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      console.log(event);
      // Only allow downward drag
      if (event.translationY > 0) {
        translateY.value = event.translationY;
      }
    },
    onEnd: () => {
      if (translateY.value > 100) {
        // If dragged down enough, trigger close
        runOnJS(onClose)();
      } else {
        // Else reset position
        translateY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: translateY.value }],
  }));

  return (
    <GestureHandlerRootView style={[styles.container, { height: height }]}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.box, animatedStyle]}>
          {children}
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

export default GuestBottomHit;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  box: {
    flex: 1,
    width: "100%",
  },
});
