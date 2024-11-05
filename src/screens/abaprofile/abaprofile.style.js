import { COLORS, FONT_SIZE } from "../../constants/theme";

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingTop: 12,
  },

  item: {
    borderWidth: 1,
    borderColor: COLORS.gray4,
    paddingLeft: 8,
    paddingTop: 15,
    marginBottom: 15,
  },

  title: {
    fontsize: FONT_SIZE.s,
    color: COLORS.gray3,
    marginBottom: 4,
  },

  text: {
    fontsize: FONT_SIZE.sm,
    color: COLORS.gray1,
    paddingLeft: 8,
  },
};
