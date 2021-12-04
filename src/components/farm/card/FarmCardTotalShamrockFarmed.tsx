import React, { useMemo } from 'react';
import { Trans } from '@lingui/macro';
import { useSelector } from 'react-redux';
import type { RootState } from '../../../modules/rootReducer';
import FarmCard from './FarmCard';
import { clover_to_shamrock } from '../../../util/shamrock';
import useCurrencyCode from '../../../hooks/useCurrencyCode';

export default function FarmCardTotalShamrockFarmed() {
  const currencyCode = useCurrencyCode();

  const loading = useSelector(
    (state: RootState) => !state.wallet_state.farmed_amount,
  );

  const farmedAmount = useSelector(
    (state: RootState) => state.wallet_state.farmed_amount?.farmed_amount,
  );

  const totalShamrockFarmed = useMemo(() => {
    if (farmedAmount !== undefined) {
      const val = BigInt(farmedAmount.toString());
      return clover_to_shamrock(val);
    }
  }, [farmedAmount]);

  return (
    <FarmCard
      title={<Trans>{currencyCode} Total shamrock Farmed</Trans>}
      value={totalShamrockFarmed}
      loading={loading}
    />
  );
}
