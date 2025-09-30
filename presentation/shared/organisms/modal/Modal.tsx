// components/CustomModal.tsx
import React from "react";
import { View } from "react-native";
import Modal from "react-native-modal";

interface CustomModalProps {
  isVisible: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({
  isVisible,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose} // cerrar al tocar fuera
      backdropOpacity={0.8}
      animationIn="fadeInUp"
      animationOut="fadeOutDown"
      className="m-0"
    >
      <View className="bg-white rounded-2xl p-6 mx-6">{children}</View>
    </Modal>
  );
};

export default CustomModal;
