import { IOTweek1 } from "./IOT/IOTweek1";
import { IOTweek2 } from "./IOT/IOTweek2";
import { IOTweek3 } from "./IOT/IOTweek3";
import { IOTweek4 } from "./IOT/IOTweek4";
import { IOTweek5 } from "./IOT/IOTweek5";
import { IOTweek6 } from "./IOT/IOTweek6";

// Combine the two arrays using the .concat() method
export const iotArray = IOTweek1.concat(IOTweek2, IOTweek3, IOTweek4, IOTweek5, IOTweek6);
// export const iotArray = week3;

// Alternatively, you can use the spread operator
// const iotArray = [...week1, ...week2];

// console.log("iotArray length is ", iotArray.length);
