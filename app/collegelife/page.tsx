"use client"


import DetailPage from '@/Components/UI/DetailPage/DetailPage'
import { Grid } from '@mui/material'
import React from 'react'

function page() {
  return (
    <Grid container>

      <DetailPage

        heading="COLLEGITE DAYS"

        description=""

        limit="31"

        video_limit="3"

        filename="CollageDays"
      />


    </Grid>
  )
}

export default page