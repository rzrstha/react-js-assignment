const fs = require("fs");

var output = fs
  .readFileSync("input.txt", "utf8")
  .split("\r\n")
  .map((line) => line.split(" "))
  .reduce((dates, line) => {
    let warning = 0,
      error = 0;

    dates[line[0]] = [];

    line[7] == "[warning]" ? warning++ : error++;

    dates[line[0]].push({
      warning: warning,
      error: error,
    });

    return dates;
  }, {});
console.log("output", output);
