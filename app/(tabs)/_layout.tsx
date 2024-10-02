import { Tabs } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'blue', headerShown: false}}>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          tabBarIcon:({color}) => <FontAwesome size={28} name="home" color={color}/>,
          tabBarShowLabel: false
        }}
      />
      <Tabs.Screen 
        name="passwords"
        options={{
          title: 'Passwords',
          tabBarIcon:({color}) => <FontAwesome size={28} name="lock" color={color}/>,
          tabBarShowLabel: false
        }}
      />
    </Tabs>
  );
}
