import { Box, Grid } from '@mui/material'
import React from 'react'
import { H3, H5 } from '../Typography'

export default function DetailPage(props: any) {

    const { heading, description } = props

    return (
        <Grid container justifyContent="center">

            <Grid container sx={{
                py: { xs: 2, sm: 3, md: 4, lg: 4 }
            }}>
                <H3 textAlign="center" fontWeight="bold" color="#A9A4DD">{heading}</H3>
            </Grid>

            <Grid sx={{ textAlign: 'justify' }} container xs={10} sm={10} md={10} lg={10}   >
                <H5 fontWeight="550">{description}</H5>
            </Grid>



        </Grid >
    )
}