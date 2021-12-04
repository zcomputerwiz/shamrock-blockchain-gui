const Big = require('big.js');
const units = require('./units');

// TODO: use bigint instead of float
const convert = (amount, from, to) => {
  if (Number.isNaN(Number.parseFloat(amount)) || !Number.isFinite(amount)) {
    return 0;
  }

  const amountInFromUnit = Big(amount).times(units.getUnit(from));

  return Number.parseFloat(amountInFromUnit.div(units.getUnit(to)));
};

class shamrock {
  constructor(value, unit) {
    this._value = value;
    this._unit = unit;
  }

  to(newUnit) {
    this._value = convert(this._value, this._unit, newUnit);
    this._unit = newUnit;

    return this;
  }

  value() {
    return this._value;
  }

  format() {
    const displayUnit = units.getDisplay(this._unit);

    const { format, fractionDigits, trailing } = displayUnit;

    let options = { maximumFractionDigits: fractionDigits };

    if (trailing) {
      options = { minimumFractionDigits: fractionDigits };
    }

    let value;

    if (fractionDigits !== undefined) {
      const fractionPower = Big(10).pow(fractionDigits);
      value = Number.parseFloat(
        Big(Math.floor(Big(this._value).times(fractionPower))).div(
          fractionPower,
        ),
      );
    } else {
      value = this._value;
    }

    let formatted = format.replace(
      '{amount}',
      Number.parseFloat(value).toLocaleString(undefined, options),
    );

    if (displayUnit.pluralize && this._value !== 1) {
      formatted += 's';
    }

    return formatted;
  }

  toString() {
    const displayUnit = units.getDisplay(this._unit);
    const { fractionDigits } = displayUnit;
    const options = { maximumFractionDigits: fractionDigits };
    return Number.parseFloat(this._value).toLocaleString(undefined, options);
  }
}

export const shamrock_formatter = (value, unit) => new shamrock(value, unit);

shamrock_formatter.convert = convert;
shamrock_formatter.setDisplay = units.setDisplay;
shamrock_formatter.setUnit = units.setUnit;
shamrock_formatter.getUnit = units.getUnit;
shamrock_formatter.setFiat = (currency, rate, display = null) => {
  units.setUnit(currency, 1 / rate, display);
};

export const clover_to_shamrock = (clover) => {
  return shamrock_formatter(Number.parseInt(clover), 'clover').to('shamrock').value();
};

export const shamrock_to_clover = (shamrock) => {
  return shamrock_formatter(Number.parseFloat(Number(shamrock)), 'shamrock')
    .to('clover')
    .value();
};

export const clover_to_shamrock_string = (clover) => {
  return shamrock_formatter(Number(clover), 'clover').to('shamrock').toString();
};

export const clover_to_colouredcoin = (clover) => {
  return shamrock_formatter(Number.parseInt(clover), 'clover')
    .to('colouredcoin')
    .value();
};

export const colouredcoin_to_clover = (colouredcoin) => {
  return shamrock_formatter(Number.parseFloat(Number(colouredcoin)), 'colouredcoin')
    .to('clover')
    .value();
};

export const clover_to_colouredcoin_string = (clover) => {
  return shamrock_formatter(Number(clover), 'clover').to('colouredcoin').toString();
};
