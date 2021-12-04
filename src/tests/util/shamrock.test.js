const shamrock = require('../../util/shamrock');

describe('shamrock', () => {
  it('converts number clover to shamrock', () => {
    const result = shamrock.clover_to_shamrock(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string clover to shamrock', () => {
    const result = shamrock.clover_to_shamrock('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number clover to shamrock string', () => {
    const result = shamrock.clover_to_shamrock_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string clover to shamrock string', () => {
    const result = shamrock.clover_to_shamrock_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number shamrock to clover', () => {
    const result = shamrock.shamrock_to_clover(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string shamrock to clover', () => {
    const result = shamrock.shamrock_to_clover('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number clover to colouredcoin', () => {
    const result = shamrock.clover_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string clover to colouredcoin', () => {
    const result = shamrock.clover_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number clover to colouredcoin string', () => {
    const result = shamrock.clover_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string clover to colouredcoin string', () => {
    const result = shamrock.clover_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to clover', () => {
    const result = shamrock.colouredcoin_to_clover(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to clover', () => {
    const result = shamrock.colouredcoin_to_clover('1000');

    expect(result).toBe(1000000);
  });
});
