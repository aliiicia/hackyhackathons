import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen name="usersGroups" options={{ headerShown: false }} />
      <Stack.Screen name="settings" options={{ headerShown: false }} />
      <Stack.Screen name="FriendsList" options={{ headerShown: false }} />
      <Stack.Screen name="findGroup" options={{ headerShown: false }} />
      <Stack.Screen name="makeGroup" options={{ headerShown: false }} />
    </Stack>
  );
}
