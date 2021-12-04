import Big from 'big.js';

const clover_PER_shamrock = Big(1000000000000);
const BLOCKS_PER_YEAR = 1681920;

export function calculatePoolReward(height: number): Big {
  if (height === 0) {
    return clover_PER_shamrock.times(0).times(7 / 8);
  }
  return clover_PER_shamrock.times(2).times(7 / 8);
}

export function calculateBaseFarmerReward(height: number): Big {
  if (height === 0) {
    return clover_PER_shamrock.times(0).times(1 / 8);
  }
  return clover_PER_shamrock.times(2).times(1 / 8);
}
