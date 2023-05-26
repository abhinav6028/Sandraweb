import { Box, Grid, ImageList, ImageListItem } from '@mui/material'
import React from 'react'
import { H3, H5 } from '../Typography'

export default function DetailPage(props: any) {

    const { heading, description } = props;

    const itemData = [
        {
            img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
            title: 'Bed',
        },
        {
            img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
            title: 'Books',
        },
        {
            img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
            title: 'Sink',
        },
        {
            img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
            title: 'Kitchen',
        },
        {
            img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
            title: 'Blinds',
        },
        {
            img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
            title: 'Chairs',
        },
        {
            img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
            title: 'Laptop',
        },
        {
            img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
            title: 'Doors',
        },
        {
            img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
            title: 'Coffee',
        },
        {
            img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
            title: 'Storage',
        },
        {
            img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
            title: 'Candle',
        },
        {
            img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
            title: 'Coffee table',
        },
    ];


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
                <Grid xs={9} sm={9} md={9} lg={9} sx={{
                    //width: 500, height: 450, overflowY: 'scroll'
                }}>
                    <ImageList variant="masonry" cols={4} gap={10}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Grid >
            </Grid>



        </Grid >
    )
}
