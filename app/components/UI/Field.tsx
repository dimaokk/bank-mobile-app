import { TextInput } from "react-native";
import React, { FC } from "react";
import { useTailwind } from "tailwind-rn/dist";

interface IField {
  onChange: (val: string) => void;
  val: string;
  placeholder: string;
  isSecure?: boolean;
}

export const Field: FC<IField> = ({ onChange, val, placeholder, isSecure }) => {
  const tw = useTailwind();
  return (
    <TextInput
      placeholder={placeholder}
      value={val}
      onChangeText={onChange}
      secureTextEntry={isSecure}
      showSoftInputOnFocus={false}
      autoCapitalize="none"
      style={tw("rounded-xl bg-gray-200 mb-3 p-3")}
    />
  );
};
