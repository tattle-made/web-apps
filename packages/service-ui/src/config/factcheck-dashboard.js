export const weekNumDateRangeBiDirectionalMap = {
  default: {
    num: 65,
    string: "March 22, 2021 - March 28, 2021",
  },

  34: "August 17 - August 23, 2020",
  "August 17 - August 23, 2020": 34,

  35: "August 24 - August 30, 2020",
  "August 24 - August 30, 2020": 35,

  36: "August 31 - September 6, 2020",
  "August 31 - September 6, 2020": 36,

  37: "September 7 - September 13, 2020",
  "September 7 - September 13, 2020": 37,

  38: "September 14 - September 20, 2020",
  "September 14 - September 20, 2020": 38,

  39: "September 21 - September 27, 2020",
  "September 21 - September 27, 2020": 39,

  40: "September 28 - October 4, 2020",
  "September 28 - October 4, 2020": 40,

  41: "October 5, 2020 - October 11, 2020",
  "October 5, 2020 - October 11, 2020": 41,

  42: "October 12, 2020 - October 18, 2020",
  "October 12, 2020 - October 18, 2020": 42,

  43: "October 19, 2020 - October 25, 2020",
  "October 19, 2020 - October 25, 2020": 43,

  44: "October 26, 2020 - November 1, 2020",
  "October 26, 2020 - November 1, 2020": 44,

  45: "November 2, 2020 - November 8, 2020",
  "November 2, 2020 - November 8, 2020": 45,

  46: "November 9, 2020 - November 15, 2020",
  "November 9, 2020 - November 15, 2020": 46,

  47: "November 16, 2020 - November 22, 2020",
  "November 16, 2020 - November 22, 2020": 47,

  48: "November 23, 2020 - November 29, 2020",
  "November 23, 2020 - November 29, 2020": 48,

  49: "November 30, 2020 - December 6, 2020",
  "November 30, 2020 - December 6, 2020": 49,

  50: "December 7, 2020 - December 13, 2020",
  "December 7, 2020 - December 13, 2020": 50,

  51: "December 14, 2020 - December 20, 2020",
  "December 14, 2020 - December 20, 2020": 51,

  52: "December 21, 2020 - December 27, 2020",
  "December 21, 2020 - December 27, 2020": 52,

  53: "December 28, 2020 - January 3, 2021",
  "December 28, 2020 - January 3, 2021": 53,

  54: "January 4, 2021 - January 10, 2021",
  "January 4, 2021 - January 10, 2021": 54,

  55: "January 11, 2021 - January 17, 2021",
  "January 11, 2021 - January 17, 2021": 55,

  56: "January 18, 2021 - January 24, 2021",
  "January 18, 2021 - January 24, 2021": 56,

  57: "January 25, 2021 - January 31, 2021",
  "January 25, 2021 - January 31, 2021": 57,

  58: "February 1, 2021 - February 7, 2021",
  "February 1, 2021 - February 7, 2021": 58,

  59: "February 8, 2021 - February 14, 2021",
  "February 8, 2021 - February 14, 2021": 59,

  60: "February 15, 2021 - February 21, 2021",
  "February 15, 2021 - February 21, 2021": 60,

  61: "February 22, 2021 - February 28, 2021",
  "February 22, 2021 - February 28, 2021": 61,

  62: "March 1, 2021 - March 7, 2021",
  "March 1, 2021 - March 7, 2021": 62,

  63: "March 8, 2021 - March 14, 2021",
  "March 8, 2021 - March 14, 2021": 63,

  64: "March 15, 2020 - March 21, 2021",
  "March 15, 2020 - March 21, 2021": 64,

  65: "March 22, 2021 - March 28, 2021",
  "March 22, 2021 - March 28, 2021": 65,
}

export const getDateRangeStringAsArray = () => {
  var keys = Object.keys(weekNumDateRangeBiDirectionalMap).filter(key => {
    return !Number.isInteger(parseInt(key)) && key !== "default"
  })
  return keys
}
