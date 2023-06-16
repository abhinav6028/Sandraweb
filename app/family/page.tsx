"use client"


import DetailPage from '@/Components/UI/DetailPage/DetailPage'
import { Grid } from '@mui/material'
import React from 'react'

function page() {
  return (
    <Grid container>

      <DetailPage

        heading="LOVE BLOSSOMS ME AND MY FAMILY"

        description=""

        limit="49"

        video_limit="7"

        filename="Family"
      />

    </Grid>
  )
}

export default page