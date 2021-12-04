import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { ReactComponent as shamrockIcon } from './images/shamrock.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={shamrockIcon} viewBox="0 0 150 58" {...props} />;
}
