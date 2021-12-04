import React, { useMemo, ReactNode } from 'react';
import { Table } from '@shamrock/core';
import styled from 'styled-components';
import { Trans } from '@lingui/macro';
import { Box } from '@material-ui/core';
import { clover_to_shamrock_string } from '../../util/shamrock';

const Amount = styled(Box)`
  white-space: normal;
  overflow-wrap: break-word;
`;

const cols = [
  {
    field: 'side',
    title: <Trans>Side</Trans>,
  },
  {
    field: 'amount',
    title: <Trans>Amount</Trans>,
  },
  {
    field: 'name',
    title: <Trans>Colour</Trans>,
  },
];

type Trade = {
  amount: bigint;
  name: ReactNode;
};

type Props = {
  rows: Trade[];
};

export default function TradesTable(props: Props) {
  const { rows } = props;

  const tableRows = useMemo(
    () =>
      rows.map((row) => {
        const { amount, name } = row;
        const humanAmount = amount < 0 ? -amount : amount;

        return {
          side: amount < 0 ? <Trans>Sell</Trans> : <Trans>Buy</Trans>,
          name: <Amount>{name}</Amount>,
          amount: <Amount>{clover_to_shamrock_string(humanAmount)}</Amount>,
        };
      }),
    [rows],
  );

  return <Table cols={cols} rows={tableRows} />;
}
