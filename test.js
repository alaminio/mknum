const mknum = require("./index");
const showConsole = false;

const values = [
  "string",
  false,
  true,
  1,
  0,
  72,
  -103,
  "",
  undefined,
  NaN,
  null
];

const isNumber = value => {
  const num = mknum(value);
  showConsole && console.log(`for ${value}, the returned value is ${num}`);
  try {
    if (typeof num === "number") {
      console.log("passed");
      return;
    }
    throw new Error(
      `test failed! ${value} is not a number. it's a ${typeof num}.`
    );
  } catch (e) {
    console.log(e.message);
  }
};

values.map(isNumber);
