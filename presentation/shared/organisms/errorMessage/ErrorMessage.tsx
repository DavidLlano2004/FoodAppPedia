import ThemedText from "@/presentation/shared/ThemedText";
import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

interface ErrorMessageProps {
  message?: string;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: message ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [message]);

  if (!message) return null;

  return (
    <Animated.View style={{ opacity }}>
      <ThemedText type="medium" className="text-light-primary">
        {message}
      </ThemedText>
    </Animated.View>
  );
};

export default ErrorMessage;
