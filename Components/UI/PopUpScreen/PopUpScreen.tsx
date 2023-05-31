import { Grid } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function PopUp(props: any) {

    const { filename, index, setPopUp } = props;

    const URL = `/Assets/innerImages/${filename}/img-${index}.jpg`



    return (

        <Grid container sx={{
            position: 'fixed',
            top: "50%",
            left: "50%",
            transform: 'translate(-50%,-50%)',
            zIndex: 100, bgcolor: "",
            backgroundColor: 'rgba(100, 100, 100, 0.9)'
        }}>

            <CloseIcon onClick={() => setPopUp(false)} sx={{
                mt: 7,
                mr: 2,
                ml: 'auto',
                cursor: 'pointer'
            }} />

            <Grid container justifyContent="center" alignItems="center" height="100vh"
                sx={{ bgcolor: "", p: 4 }}>

                <img style={{ objectFit: "fill" }} width="100%" src={URL} alt="" />



                {/* <Image width="800" height="800"  src={URL}/> */}

            </Grid>




        </Grid>




    )
}
