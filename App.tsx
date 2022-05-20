import { AuthProvider } from "./app/providers/AuthProvider";
import { Navigation } from "./app/navigation/Navigation";
import { LogBox } from "react-native";
// tailwind
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";

export default function App() {
  return (
    <TailwindProvider utilities={utilities}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </TailwindProvider>
  );
}

LogBox.ignoreAllLogs();
