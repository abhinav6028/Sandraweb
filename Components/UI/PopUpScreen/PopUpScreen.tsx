import { Grid } from '@mui/material'
import React from 'react'

export default function PopUp(props: any) {

    const { filename, index, setPopUp } = props;

    const URL = `/Assets/innerImages/${filename}/img-${index}.jpg`

    return (

        <Grid container>

            <Grid
                component="img"
                sx={{
                    position: 'fixed',
                    top: "50%",
                    left: "50%",
                    transform: 'translate(-50%,-50%)',
                    zIndex: 100,
                    backgroundImage: `url(/Assets/innerImages/${filename}/img-${index}.jpg)`,
                    height: { xs: 200, lg: 600 },
                    width: { xs: 200, lg: 600 },
                }}
                alt="The house from the offer."
                src={URL}
            />
            
        </Grid>



    )
}
