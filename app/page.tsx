'use client'
import HomePage from '@/Components/Home/HomePage'
import Footer from '@/Components/UI/Footer/Footer'
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

      <Footer />

    </Grid>


  )
}

export default page