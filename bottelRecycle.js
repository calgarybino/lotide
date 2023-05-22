function calculateBottles(investmentAmount, costPerBottle) {
  let totalBottles = Math.floor(investmentAmount / costPerBottle);
  let remainingBottles = totalBottles;
  let remainingCaps = totalBottles;
  let redeemedBottles = 0;
  let redeemedCaps = 0;

  while (remainingBottles >= costPerBottle || remainingCaps >= 4) {
    if (remainingCaps >= 4) {
      const bottlesFromCaps = Math.floor(remainingCaps / 4);
      redeemedBottles += bottlesFromCaps;
      remainingCaps %= 4;
      remainingBottles += bottlesFromCaps;
    }

    if (remainingBottles >= costPerBottle) {
      const bottlesFromBottles = Math.floor(remainingBottles / costPerBottle);
      redeemedCaps += bottlesFromBottles * costPerBottle;
      remainingBottles %= costPerBottle;
      remainingCaps += bottlesFromBottles * costPerBottle;
    }
  }

  return {
    totalBottles,
    remainingBottles,
    remainingCaps,
    redeemedBottles,
    redeemedCaps,
  };
}

const investmentAmount = 20;
const costPerBottle = 2;

const result = calculateBottles(investmentAmount, costPerBottle);

console.log("Total bottles purchased:", result.totalBottles);
console.log("Remaining bottles for recycling:", result.remainingBottles);
console.log("Remaining caps for recycling:", result.remainingCaps);
console.log("Bottles obtained from recycling caps:", result.redeemedBottles);
console.log("Bottles obtained from recycling bottles:", result.redeemedCaps);
