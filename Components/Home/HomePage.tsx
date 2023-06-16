import { Grid } from '@mui/material'
import React from 'react'
import Banner from './Banner'
import Section2 from './Section2'
import { Footer } from '../UI/Footer/Footer'

export default function HomePage() {
    return (
        <Grid container>

            <Banner />

            <Section2 />

            <Footer />

        </Grid >
    )
}
