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
            bgcolor: "Red",
            transform: 'translate(-50%,-50%)',
            zIndex: 100,
            backgroundColor: 'rgba(100, 100, 100, 0.9)'
        }}>

            <CloseIcon onClick={() => setPopUp(false)} sx={{
                position: 'absolute',
                top: 0, right: 0, m: 1,
                cursor: "pointer", fontSize: "2.5rem", zindex: 130,
            }} />


            <Grid sx={{ bgcolor: "", p: 2, display: { xs: "flex", sm: "none" } }} container justifyContent="center"
                alignItems="center" height="100vh">


                <img style={{ position: "absolute", objectFit: "fill", padding: "10px" }}
                    // style={{ objectFit: "fill" }}
                    width="100%"
                    // height="100%"
                    src={URL} alt="" />


            </Grid>

            <Grid sx={{ bgcolor: "", p: 2, display: { xs: "none", sm: "flex" } }} container justifyContent="center"
                alignItems="center" height="100vh">


                <img style={{ position: "absolute", objectFit: "fill", padding: "10px" }}
                    // style={{ objectFit: "fill" }}
                    // width="100%"
                    height="100%"
                    src={URL} alt="" />


            </Grid>




        </Grid >




    )
}
