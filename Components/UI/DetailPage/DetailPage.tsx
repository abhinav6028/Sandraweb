import { Box, Grid, ImageList, ImageListItem } from '@mui/material'
import React, { useState } from 'react'
import { H3, H5 } from '../Typography';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useRouter } from 'next/navigation';
import { isNullishCoalesce } from 'typescript';
import PopUpScreen from '../PopUpScreen/PopUpScreen';

export default function DetailPage(props: any) {

    const { heading, description, limit, filename } = props;

    const images: any = [];

    const router = useRouter();

    const [PopUp, setPopUp] = useState(false);

    const [imageIndex, setImageIndex] = useState();

    console.log("llllllllllllllllllllll", PopUp);


    const loopImages = () => {

        for (let index = 1; index < limit; index++) {

            images.push(

                <ImageListItem onClick={() => { setImageIndex(index), setPopUp(!PopUp) }}>

                    <img
                        src={`/Assets/innerImages/${filename}/img-${index}.jpg`}
                        alt={`image`}
                        loading="lazy"
                    />

                </ImageListItem >
            )

        }

    }

    const data = loopImages();


    return (
        <Grid container justifyContent="center" >

            {PopUp ? <PopUpScreen filename={filename} index={imageIndex} setPopUp={setPopUp} /> : isNullishCoalesce}

            <Grid item container >

                <ArrowBackIosIcon
                    onClick={() => { router.push('/') }}
                    sx={{
                        fontSize: { sm: 30, md: 30, lg: 38 },
                        ml: { xs: 3, sm: 3, md: 5, lg: 7 },
                        mt: 3, cursor: 'pointer'
                    }} />
            </Grid>


            <Grid item container sx={{
                py: { xs: 2, sm: 3, md: 4, lg: 4 }
            }}>
                <H3 textAlign="center" fontWeight="bold" color="#A9A4DD">{heading}</H3>
            </Grid>

            <Grid item sx={{ textAlign: 'justify' }} container xs={10} sm={10} md={10} lg={10}   >
                <H5 fontWeight="550">{description}</H5>
            </Grid>

            <Grid item container justifyContent="center" sx={{
                mt: { xs: 2, sm: 3, md: 4, lg: 6 }
            }}>

                <Grid container xs={11.5} sm={11.5} md={11.7} lg={11}>

                    <ImageList variant="masonry" gap={8} sx={{
                        columnCount: {
                            xs: '2 !important',
                            sm: '2 !important',
                            md: '3 !important',
                            lg: '4 !important',
                        },
                    }}>

                        {images}

                    </ImageList>


                </Grid >

            </Grid>

        </Grid >
    )
}
