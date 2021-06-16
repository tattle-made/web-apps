export const weekNumDateRangeBiDirectionalMap = {
  default: {
    num: 76,
    string: "June 7, 2021 - June 13, 2021",
  },

  76: "June 7, 2021 - June 13, 2021",
  "June 13, 2021 - June 7, 2021": 76,

  75: "May 31, 2021 - June 6, 2021",
  "May 31, 2021 - June 6, 2021": 75,
  
  74: "May 24, 2021 - May 30, 2021",
  "May 24, 2021 - May 30, 2021": 74,
  
  73: "May 17, 2021 - May 23, 2021",
  "May 17, 2021 - May 23, 2021": 73,

  72: "May 10, 2021 - May 16, 2021",
  "May 10, 2021 - May 16, 2021": 72,
  
  71: "May 3, 2021 - May 9, 2021",
  "May 3, 2021 - May 9, 2021": 72,
  
  70: "April 26, 2021 - May 2, 2021",
  "April 26, 2021 - May 2, 2021": 70,
  
  69: "April 19, 2021 - April 25, 2021", 
  "April 19, 2021 - April 25, 2021": 69,
  
  68: "April 12, 2021- April 18, 2021",
  "April 12, 2021- April 18, 2021":68,

  67: "April 5, 2021 - April 11, 2021",
  "April 5, 2021 - April 11, 2021": 67,

  66: "March 29, 2021 - April 4, 2021",
  "March 29, 2021 - April 4, 2021": 66,

  65: "March 22, 2021 - March 28, 2021",
  "March 22, 2021 - March 28, 2021": 65,

  64: "March 15, 2020 - March 21, 2021",
  "March 15, 2020 - March 21, 2021": 64,

  63: "March 8, 2021 - March 14, 2021",
  "March 8, 2021 - March 14, 2021": 63,

  62: "March 1, 2021 - March 7, 2021",
  "March 1, 2021 - March 7, 2021": 62,

  61: "February 22, 2021 - February 28, 2021",
  "February 22, 2021 - February 28, 2021": 61,

  60: "February 15, 2021 - February 21, 2021",
  "February 15, 2021 - February 21, 2021": 60,

  59: "February 8, 2021 - February 14, 2021",
  "February 8, 2021 - February 14, 2021": 59,

  58: "February 1, 2021 - February 7, 2021",
  "February 1, 2021 - February 7, 2021": 58,

  57: "January 25, 2021 - January 31, 2021",
  "January 25, 2021 - January 31, 2021": 57,

  56: "January 18, 2021 - January 24, 2021",
  "January 18, 2021 - January 24, 2021": 56,

  55: "January 11, 2021 - January 17, 2021",
  "January 11, 2021 - January 17, 2021": 55,

  54: "January 4, 2021 - January 10, 2021",
  "January 4, 2021 - January 10, 2021": 54,

  53: "December 28, 2020 - January 3, 2021",
  "December 28, 2020 - January 3, 2021": 53,

  52: "December 21, 2020 - December 27, 2020",
  "December 21, 2020 - December 27, 2020": 52,

  51: "December 14, 2020 - December 20, 2020",
  "December 14, 2020 - December 20, 2020": 51,

  50: "December 7, 2020 - December 13, 2020",
  "December 7, 2020 - December 13, 2020": 50,

  49: "November 30, 2020 - December 6, 2020",
  "November 30, 2020 - December 6, 2020": 49,

  48: "November 23, 2020 - November 29, 2020",
  "November 23, 2020 - November 29, 2020": 48,

  47: "November 16, 2020 - November 22, 2020",
  "November 16, 2020 - November 22, 2020": 47,

  46: "November 9, 2020 - November 15, 2020",
  "November 9, 2020 - November 15, 2020": 46,

  45: "November 2, 2020 - November 8, 2020",
  "November 2, 2020 - November 8, 2020": 45,

  44: "October 26, 2020 - November 1, 2020",
  "October 26, 2020 - November 1, 2020": 44,  

  43: "October 19, 2020 - October 25, 2020",
  "October 19, 2020 - October 25, 2020": 43,

  42: "October 12, 2020 - October 18, 2020",
  "October 12, 2020 - October 18, 2020": 42,

  41: "October 5, 2020 - October 11, 2020",
  "October 5, 2020 - October 11, 2020": 41,

  40: "September 28 - October 4, 2020",
  "September 28 - October 4, 2020": 40,

  39: "September 21 - September 27, 2020",
  "September 21 - September 27, 2020": 39,

  38: "September 14 - September 20, 2020",
  "September 14 - September 20, 2020": 38,

  37: "September 7 - September 13, 2020",
  "September 7 - September 13, 2020": 37,

  36: "August 31 - September 6, 2020",
  "August 31 - September 6, 2020": 36,

  35: "August 24 - August 30, 2020",
  "August 24 - August 30, 2020": 35,

  34: "August 17 - August 23, 2020",
  "August 17 - August 23, 2020": 34,


}

export const getDateRangeStringAsArray = () => {
  var keys = Object.keys(weekNumDateRangeBiDirectionalMap).filter(key => {
    return !Number.isInteger(parseInt(key)) && key !== "default"
  })
  return keys
}
