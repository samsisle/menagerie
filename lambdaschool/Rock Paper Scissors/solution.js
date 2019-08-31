/**
 * Source : https://github.com/LambdaSchool/Whiteboard-Pairing/tree/master/RockPaperScissors
 * Author : samsisle
 * Date   : 2019-08-31
 *
 * Time Complexity  : ??
 * Space Complexity : ??
 */

function rps(n) {
  const outcomes = [];
  const plays = ['rock', 'paper', 'scissors'];

  function findOutcome(roundsLeft, result) {
    if (roundsLeft === 0) {
      outcomes.push(result);
      return;
    }

    for (let play of plays) {
      debugger;
      findOutcome(roundsLeft - 1, result.concat(play));
    }
  }

  findOutcome(n, []);
  return outcomes;
}

console.log(rps(2));
