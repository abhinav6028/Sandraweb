'use client'
import HomePage from '@/Components/Home/HomePage'
import Header from '@/Components/UI/Header/Header'
import Sound from '@/Components/UI/Sound/Sound'
import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

function page() {

  return (

    <Grid container >

      <Header />

      <HomePage />

    </Grid>


  )
}

export default page