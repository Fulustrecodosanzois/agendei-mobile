import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    backgraundColor: COLORS.white,
    flex: 1,
  },

  banner: {
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 25,
  },

  name:  {
    fonteSize: FONT_SIZE.md,
    color: COLORS.white,
    fontWeight: "bold",
    marginTop: 5
  },

  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.white,
    marginTop: 5
  },

};
