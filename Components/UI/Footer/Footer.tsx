import { MAIN_COLOUR } from '@/utils/colours'
import { Box, Grid } from '@mui/material'
import React from 'react'
import { H5 } from '../Typography'

export default function Footer() {
    return (
        <Grid container bgcolor={MAIN_COLOUR} sx={{
            mt: { xs: 3, sm: 3, md: 5, lg: 7 },
        }}>

            <Grid container sx={{
                py: 2
                // py: { xs: 2, sm: 1, md: 1, lg: 2 }
            }}>

                <H5 textAlign="center" fontWeight="600"  >THATS ALL ABOUT ME</H5>

            </Grid>



        </Grid>
    )
}
