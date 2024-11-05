import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  container: {
    flex: 1,
    backgraundColor: COLORS.white,
    // paddingLeft: 20,
    // paddingRight: 20,
    justifyContent: "space-between",
    // marginBottom: 20
    padding: 25,
  },

  theme: {
    todayTextColor: COLORS.red,
    selectedDayBackgroundColor: COLORS.blue,
    selectedDayTextColor: COLORS.white,
    arrowColor: COLORS.blue
  },

  textHour: {
    fontSize: FONT_SIZE.lg,
    fontweight: "bold",
    color: COLORS.gray2,
    marginTop: 20
  }
};
