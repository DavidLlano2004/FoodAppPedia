import React, { useEffect, useRef, useState } from "react";
import { Animated, View } from "react-native";

const AnimatedProgressBar = ({ index = 0 }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const translateX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (containerWidth > 0) {
      Animated.timing(translateX, {
        toValue: index === 0 ? 0 : containerWidth / 2,
        useNativeDriver: true,
      }).start();
    }
  }, [index, containerWidth]);

  return (
    <View
      className="h-1 rounded-lg bg-dark-gray-1 w-full flex-row overflow-hidden"
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <Animated.View
        className=" h-full bg-light-primary rounded-lg"
        style={[
          {
            width: containerWidth / 2, // ocupa la mitad
            transform: [{ translateX }],
          },
        ]}
      />
    </View>
  );
};

export default AnimatedProgressBar;
