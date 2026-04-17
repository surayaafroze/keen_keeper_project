'use client'

import TimeLineContext from '@/component/timeline/TimeLineContext';
import React from 'react';

const Providers = ({children}) => {
  return <TimeLineContext>{children}</TimeLineContext>
};

export default Providers;