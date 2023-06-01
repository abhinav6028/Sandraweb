import { Box, Grid } from '@mui/material'
import React from 'react'

export default function Footer() {

    const playSound = () => {

        alert('jjjjjjjjjjjjjjjjjjjjjjjjj')
        
    }

    return (
        <Grid container justifyContent="center" sx={{ mt: 4 }}>

            <Box onClick={playSound}>

                Footer

            </Box>


        </Grid>
    )
}
