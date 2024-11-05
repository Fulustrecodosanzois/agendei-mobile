
import { COLORS, FONT_SIZE } from "../../constants/theme.js";

export const styles = {
  Appointment: {
    backgraundColor: COLORS.white,
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: COLORS.gray4
  },

  name:  {
    fonteSize: FONT_SIZE.md,
    color: COLORS.gray1,
    marginBottom: 2,
  },

  specialty: {
    fonteSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginBottom: 4
  },

  icon: {
    width: 25, 
    height: 25,
    marginRight: 5
  },

  bookingDate: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginTop: 3
  },

  bookingHour: {
    fontSize: FONT_SIZE.sm,
    color: COLORS.gray3,
    marginTop: 3
  },

  booking: {
    flexDirection: "row"
   
  },

  containerBooking: {
    flex: 1
  },

  containerButton: {
    marginTop: 6
  },

  container: {
    flexDirection: "row"
  },






};
