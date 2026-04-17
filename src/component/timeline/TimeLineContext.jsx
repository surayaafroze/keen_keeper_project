'use client'
import React, { createContext, useState } from 'react';

export const timeLineProvider =createContext()
const TimeLineContext = ({children}) => {
  const [timeLine,setTimeLine] =useState([])
  const [selectedType,setSelectedType] =useState('All')

  const value ={
    timeLine,
    setTimeLine,
    selectedType,
    setSelectedType
  }
 
  return <timeLineProvider.Provider value={value}>{children}</timeLineProvider.Provider>
   
  
};

export default TimeLineContext;