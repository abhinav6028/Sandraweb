'use client'
import HomePage from '@/Components/Home/HomePage'
import Footer from '@/Components/UI/Footer/Footer'
import { MAIN_COLOUR } from '@/utils/colours'
import { Grid } from '@mui/material'
import Head from 'next/head'
import Router from 'next/router'
import React from 'react'
import { createContext } from 'react'



function page() {
  const Context = createContext({})
  return (
   
      <Grid >

        <HomePage />

        {/* <Footer /> */}

      </Grid>
   

  )
}

export default page