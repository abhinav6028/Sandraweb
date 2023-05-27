import { Box, Grid, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { H3, H5 } from '../Typography'

export default function DetailPage(props: any) {

    const { heading, description, limit, filename } = props;

    const images: any = []


    const loopImages = () => {

        for (let index = 1; index < limit; index++) {

            images.push(

                <ImageListItem>
                    <img
                        src={`/Assets/innerImages/${filename}/img-${index}.jpg`}
                        alt={`image`}
                        loading="lazy"
                    />
                </ImageListItem>
            )

        }

    }

    const data = loopImages();


    return (
        <Grid container justifyContent="center">

            <Grid container sx={{
                py: { xs: 2, sm: 3, md: 4, lg: 4 }
            }}>
                <H3 textAlign="center" fontWeight="bold" color="#A9A4DD">{heading}</H3>
            </Grid>

            <Grid sx={{ textAlign: 'justify' }} container xs={10} sm={10} md={10} lg={10}   >
                <H5 fontWeight="550">{description}</H5>
            </Grid>

            <Grid container justifyContent="center" sx={{
                mt: { xs: 2, sm: 3, md: 4, lg: 6 }
            }}>

                <Grid xs={9} sm={9} md={9} lg={9}>

                    <ImageList variant="masonry"
                        sx={{
                            columnCount: {
                                xs: '2 !important',
                                sm: '2 !important',
                                md: '3 !important',
                                lg: '4 !important',
                            },
                        }}
                        
                        gap={10}>

                        {images}

                    </ImageList>

                </Grid >

            </Grid>



        </Grid >
    )
}
