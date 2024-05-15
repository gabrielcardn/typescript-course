import fs from "fs";

// load and parse data
const macthes = fs
  .readFileSync("football.csv", {
    encoding: "utf-8",
  })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });

// enum - enumeration
enum MatchResult {
  HomeWin = "H",
  AwayWin = "a",
  Draw = "D",
}

let manUnitedWins: number = 0;

for (let match of macthes) {
  if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  }
  if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
