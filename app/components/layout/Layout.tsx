import { View, ScrollView, SafeAreaView } from "react-native";
import React, { FC } from "react";
import { useTailwind } from "tailwind-rn";

interface ILayout {
  isScrollView?: boolean;
}

const Layout: FC<ILayout> = ({ children, isScrollView = true }) => {
  const tailwind = useTailwind();

  return (
    <SafeAreaView>
      <View style={tailwind("h-full w-full bg-white pt-16")}>
        {isScrollView ? <ScrollView>{children}</ScrollView> : children}
      </View>
    </SafeAreaView>
  );
};

export default Layout;
