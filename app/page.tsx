'use client'
import HomePage from '@/Components/Home/HomePage'
import Header from '@/Components/UI/Header/Header'
import { Grid } from '@mui/material'
import React, { useState } from 'react'
import { createContext } from 'react'

function page() {

  useState

  const Context = createContext({})
  return (

    <Grid container >

      <Header />

      <HomePage />

    </Grid>


  )
}

export default page