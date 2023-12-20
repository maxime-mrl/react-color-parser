import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/theme";

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },  
    input: {
        borderColor: COLORS.dark.text,
        borderWidth: 2,
        padding: 5,
        marginVertical: 10,
        minWidth: 100,
        width: "40%",
        color: COLORS.dark.text,
        borderRadius: 5,
    }
});

export default styles;
