/**
 * Pass the executing function as a callback from wherever
 * to test the performance accurately in seconds (converted
 * from milliseconds).
 * 
 * I could just be using console.time('loop') & console.timeEnd('loop').
 */

const { performance } = require('perf_hooks');

exports.test = function(cb) {
  const t0 = performance.now();
  console.log(cb()); // execute callback
  const t1 = performance.now();
  // log the time for executing the callback
  console.log(`Executed in ${(t1 - t0) / 1000} seconds.\n`);
};
