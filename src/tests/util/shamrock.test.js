const shamrock = require('../../util/shamrock');

describe('shamrock', () => {
  it('converts number mojo to shamrock', () => {
    const result = shamrock.mojo_to_shamrock(1000000);

    expect(result).toBe(0.000001);
  });
  it('converts string mojo to shamrock', () => {
    const result = shamrock.mojo_to_shamrock('1000000');

    expect(result).toBe(0.000001);
  });
  it('converts number mojo to shamrock string', () => {
    const result = shamrock.mojo_to_shamrock_string(1000000);

    expect(result).toBe('0.000001');
  });
  it('converts string mojo to shamrock string', () => {
    const result = shamrock.mojo_to_shamrock_string('1000000');

    expect(result).toBe('0.000001');
  });
  it('converts number shamrock to mojo', () => {
    const result = shamrock.shamrock_to_mojo(0.000001);

    expect(result).toBe(1000000);
  });
  it('converts string shamrock to mojo', () => {
    const result = shamrock.shamrock_to_mojo('0.000001');

    expect(result).toBe(1000000);
  });
  it('converts number mojo to colouredcoin', () => {
    const result = shamrock.mojo_to_colouredcoin(1000000);

    expect(result).toBe(1000);
  });
  it('converts string mojo to colouredcoin', () => {
    const result = shamrock.mojo_to_colouredcoin('1000000');

    expect(result).toBe(1000);
  });
  it('converts number mojo to colouredcoin string', () => {
    const result = shamrock.mojo_to_colouredcoin_string(1000000);

    expect(result).toBe('1,000');
  });
  it('converts string mojo to colouredcoin string', () => {
    const result = shamrock.mojo_to_colouredcoin_string('1000000');

    expect(result).toBe('1,000');
  });
  it('converts number colouredcoin to mojo', () => {
    const result = shamrock.colouredcoin_to_mojo(1000);

    expect(result).toBe(1000000);
  });
  it('converts string colouredcoin to mojo', () => {
    const result = shamrock.colouredcoin_to_mojo('1000');

    expect(result).toBe(1000000);
  });
});
