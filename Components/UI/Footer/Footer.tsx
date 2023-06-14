import { Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import useSound from 'use-sound';
import Sound from '../Sound/Sound';
//import boopSfx from '../../../public/Assets/Sounds/bhoom.mp3';


export default function Footer() {

    const URL = '../../../public/Assets/Sounds/bhoom.mp3';

    const [sound, setSound] = useState(false)



    return (

        < Grid container justifyContent="center" sx={{ mt: 4 }}>

            {/* {sound ? <Sound /> : null} */}

            <Box onClick={() => setSound(!sound)}>

                <Box
                    component="img"
                    sx={{
                        height: 400,
                        width: 350,
                    }}
                    alt="The house from the offer."
                    src="/Assets/Footer/footerImage.png"
                />

                {/* <Sound /> */}


            </Box>

        </Grid >

    )

}
