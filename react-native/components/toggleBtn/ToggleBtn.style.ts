import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    button: {
        padding: 10,
        backgroundColor: COLORS.dark.text,
        borderColor: COLORS.dark.background,
        borderWidth: 2,
        borderRadius: 5,
        color: COLORS.dark.background,
        overflow: "hidden",
    }
});

export default styles;
