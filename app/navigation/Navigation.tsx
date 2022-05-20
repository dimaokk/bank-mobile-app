import React, { FC } from "react";
//nav
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
//auth
import { useAuth } from "../hooks/useAuth";
import { Auth } from "../components/screens/auth/Auth";
//components
import { Payments } from "../components/screens/payments/Payments";
import { Service } from "../components/screens/service/Service";
import { Home } from "../components/screens/home/Home";
import { Support } from "../components/screens/support/Support";
import { More } from "../components/screens/more/More";
import { Profile } from "../components/screens/profile/Profile";

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
  const { user } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Auth" component={Auth} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Payments" component={Payments} />
            <Stack.Screen name="Service" component={Service} />
            <Stack.Screen name="Support" component={Support} />
            <Stack.Screen name="More" component={More} />
          </>
        ) : (
          <Stack.Screen name="Auth" component={Auth} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
