import { Grid } from '@mui/material'
import React from 'react'
import Footer from '../UI/Footer/Footer'
import Banner from './Banner'
import Section2 from './Section2'

export default function HomePage() {
    return (
        <Grid container>

            <Banner />

            <Section2 />

            <Footer />

        </Grid >
    )
}
