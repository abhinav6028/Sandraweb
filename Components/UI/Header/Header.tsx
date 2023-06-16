import { Grid } from '@mui/material'
import React from 'react'
import { H3 } from '../Typography/Typography'

export default function Header() {


    return (

        <Grid container sx={{
            position: 'fixed',
            top: 0,
            right: 0,
            left: 0,
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            bgcolor: '#ffff',
            zIndex: 100
            // bgcolor: 'red'
        }} >


            <H3 p={2} className="container"
                fontWeight="570"
                fontFamily="'Sacramento', cursive"
                cursor="pointer"
            >Sandhra Manoj</H3>


        </Grid>

    )
}