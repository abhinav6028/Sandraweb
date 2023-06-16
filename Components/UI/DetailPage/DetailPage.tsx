import { Box, Grid, ImageList, ImageListItem } from '@mui/material'
import React, { useState } from 'react'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import PopUpScreen from '../PopUpScreen/PopUpScreen';
import { useRouter } from 'next/navigation';
import { H3, H5 } from '../Typography/Typography';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



export default function DetailPage(props: any) {

    const { heading, description, limit, video_limit, filename } = props;

    const images: any = [];

    const videos: any = [];


    const router = useRouter();

    const [PopUp, setPopUp] = useState(false);

    const [imageIndex, setImageIndex]: any = useState();



    // const loopImages = () => {

    //     for (let index = 1; index < limit; index++) {

    //         images.push(

    //             <ImageListItem onClick={() => { setImageIndex(index), setPopUp(!PopUp) }}>

    //                 <LazyLoadImage
    //                     loading='lazy'
    //                     width="100%"
    //                     alt={JSON.stringify(index)}
    //                     effect="blur"
    //                     src={`/Assets/innerImages/${filename}/img-${index}.jpg`} />

    //             </ImageListItem >
    //         )

    //     }

    // }

    // const loopVideos = () => {

    //     for (let index = 1; index < video_limit; index++) {

    //         videos.push(

    //             <Grid md={4} onClick={() => { setImageIndex(index), setPopUp(!PopUp) }}>

    //                 <video width="100%" height="240" controls>
    //                     <source src={`/Assets/innerImages/${filename}/vid-${index}.mp4`} type="video/mp4" />
    //                     {/* <source src="movie.ogg" type="video/ogg" /> */}
    //                     Your browser does not support the video tag.
    //                 </video>


    //             </Grid >


    //         )

    //     }

    // }



    // const data = loopImages();

    // const data2 = loopVideos();



    return (

        <Grid container justifyContent="center" >

            <Grid container>

                {PopUp ? <PopUpScreen filename={filename} index={imageIndex} setPopUp={setPopUp} /> : null}

            </Grid>

            <Grid item container >

                <ArrowBackIosIcon
                    onClick={() => { router.push('/') }}
                    sx={{
                        fontSize: { sm: 30, md: 30, lg: 38 },
                        ml: { xs: 3, sm: 3, md: 5, lg: 7 },
                        mt: 3, cursor: 'pointer'
                    }} />

            </Grid>


            <Grid justifyContent="center" item container sx={{
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

                {/* <Grid item container xs={11.5} sm={11.5} md={11.7} lg={11}>

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

                </Grid > */}


                {/* <Grid item container xs={11.5} sm={11.5} md={11.7} lg={11}>

                    {videos}

                </Grid> */}

            </Grid>

            <Grid>


                <img src={`/Assets/innerImages/${filename}/img-1.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-2.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-3.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-4.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-5.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-6.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-7.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-8.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-9.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-10.jpg`} loading='lazy' />


                <img src={`/Assets/innerImages/${filename}/img-11.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-12.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-13.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-14.jpg`} loading='lazy' />

                <img src={`/Assets/innerImages/${filename}/img-15.jpg`} loading='lazy' />




            </Grid>

        </Grid >

    )
}
