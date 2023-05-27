import { Grid } from '@mui/material'
import React from 'react'
import DetailPage from '../UI/DetailPage/DetailPage'

function College() {
    return (
        <Grid container>

            <DetailPage

                heading="COLLEGITE DAYS"

                description=""

                limit="10"

                filename="CollageDays"
            />

        </Grid>
    )
}

export default College