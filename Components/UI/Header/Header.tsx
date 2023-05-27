import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { H3 } from '../Typography'

export default function Header() {

    const router = useRouter()

    return (

        <Grid container sx={{
            position: 'fixed',
            bgcolor: 'rgba(0, 0, 0, 0.4)'
        }} >

            <Box sx={{
                py: { xs: 0.5, sm: 0.5, md: 1, lg: 1.5 },
                ml: { xs: 0.5, sm: 0.5, md: 1, lg: 1.5 }
            }}>

                <H3 fontWeight="570" fontFamily="'Sacramento', cursive"
                    cursor="pointer"
                    onClick={() => router.push('/')}>Sandhra Manoj</H3>

            </Box>


        </Grid>

    )
}