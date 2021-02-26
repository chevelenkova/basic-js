

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(a) {
 
 if(typeof(a)=='string' && a<MODERN_ACTIVITY && a>0){
  
  return Math.ceil(Math.log(MODERN_ACTIVITY / a) * HALF_LIFE_PERIOD / Math.log(2).toFixed(3))
 }
 else return false
};
