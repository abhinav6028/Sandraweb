import React from 'react'
import { Grid } from '@mui/material'

export const Footer = () => {

    return (

        <Grid container>

            <video width="100%" controls>

                <source src={`/Assets/innerImages/${"CollageDays"}/footer-vid.mp4`} type="video/mp4" />

                Your browser does not support the video tag.
            </video>

        </Grid >

    )
}
