import { StyleSheet } from "react-native";

import { COLORS } from "../../constants/theme";

const styles = ({theme, color, textColor}: { theme?: "dark"|"light", color?: string, textColor?: string }) => StyleSheet.create({
  colorSquare: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    alignSelf: "center",

    width: '40%',
    minWidth: 100,
    aspectRatio: 1,
    backgroundColor: (color ? color: COLORS.dark.background),
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: (theme ? COLORS[theme].text: COLORS.dark.text),
    borderRadius: 5,
  },
  text: {
    color: (textColor ? textColor: COLORS.dark.text),
    fontWeight: "bold",
    fontSize: 20,
  },
});

export default styles;
