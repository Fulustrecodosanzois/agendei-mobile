import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  service: {
    backgraundColor: COLORS.white,
    flexDirection: "row",
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.gray4
  },

  containerText: {
    flex: 1,

  },

  containerButton: {
    marginTop: 5,
  },

  description: {
    fontSize: FONT_SIZE.md,
    color: COLORS.gray3,
    marginTop: 5
  },

  price: {
    fonteSize: FONT_SIZE.md,
    color: COLORS.blue,
    marginTop: 3,
  },


};
