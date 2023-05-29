import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/navigation'
import React from 'react'
import { H3 } from '../Typography'

export default function Header() {

    const router = useRouter()

    const scrollingTop = () => {
        alert('zkjdnbfh')
    }

    return (

        <Grid container sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            bgcolor: '#ffff'
            // bgcolor: 'red'
        }} >

            <Box sx={{
                py: { xs: 0.5, sm: 0.5, md: 1, lg: 1.5 },
                ml: { xs: 0.5, sm: 0.5, md: 1, lg: 1.5 }
            }}>

                <H3 fontWeight="570" fontFamily="'Sacramento', cursive"
                    cursor="pointer"
                    onClick={() => { console.log('dskmv jdfnvjdfjv')
                    }}>Sandhra Manoj</H3>

            </Box>


        </Grid>

    )
}