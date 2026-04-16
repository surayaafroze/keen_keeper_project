'use client'
import React, { createContext, useState } from 'react';

export const timeLineProvider =createContext()
const TimeLineContext = ({children}) => {
  const [timeLine,setTimeLine] =useState([])

  const value ={
    timeLine,
    setTimeLine
  }
 
  return <timeLineProvider.Provider value={value}>{children}</timeLineProvider.Provider>
   
  
};

export default TimeLineContext;