import { useState } from "react";
import { Stack } from "expo-router";
import { SafeAreaView, StatusBar, View } from "react-native";
import { ColorInput, ColorSquare, ToggleBtn } from "../components";
import styles from "../styles/Index";

const Home = (): React.JSX.Element => {
    const [squareColor, setSquareColor] = useState('');
    const [colorName, setColorName] = useState('');
    const [textColor, setTextColor] = useState('');
    return (
        <SafeAreaView style={styles.appContainer}>
            <Stack.Screen
                options={{
                    headerShown: false,
                    statusBarHidden: true
                }}
            />
            <StatusBar hidden={true} />
            <ColorSquare color={squareColor} textColor={textColor} colorName={colorName} />
            <ColorInput setTextColor={setTextColor} setColorName={setColorName} setSquareColor={setSquareColor} />
            <ToggleBtn setTextColor={setTextColor} textColor={textColor} />
        </SafeAreaView>
    )
}

export default Home;
