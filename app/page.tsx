'use client'
import HomePage from '@/Components/Home/HomePage'
import Header from '@/Components/UI/Header/Header'
import { Grid } from '@mui/material'
import React, { useState } from 'react'

function page() {


  return (

    <Grid container >

      <Header />

      <HomePage />

    </Grid>


  )
}

export default page