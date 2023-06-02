import { Grid } from '@mui/material'
import React from 'react'

export default function Sound(props: any) {

    const audioUrl = '/Assets/Sounds/bhoom.mp3';

    return (

        <Grid display="none">

            <audio controls autoPlay >
                <source src={audioUrl} type="audio/mp3" />
                {/* <source src="horse.mp3" type="audio/mpeg" /> */}
                Your browser does not support the audio tag.
            </audio>

        </Grid>
    )
}
