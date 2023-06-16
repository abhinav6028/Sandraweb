import { Typography } from '@mui/material';
import React from 'react'

export const H1 = (props: any) => {

    const { width, mx, my, mb, mt, m, px, py, pb, pt, p, fontFamily, fontWeight, color, bgcolor, textAlign } = props;

    return (

        <Typography sx={{
            textAlign: textAlign,
            width: width,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '1.8rem', sm: '2.6rem', md: '2.7rem', lg: '3.3rem' }
        }}>{props.children}</Typography>

    )
}


export const H2 = (props: any) => {

    const { width, mx, my, mb, mt, m, px, py, pb, pt, p, fontFamily, fontWeight, color, bgcolor, textAlign } = props;

    return (

        <Typography sx={{
            textAlign: textAlign,
            width: width,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '1.8rem', sm: '2rem', md: '2.3rem', lg: '2.8rem' }
        }}>{props.children}</Typography>

    )
}


export const H3 = (props: any) => {

    const { width, mx, my, mb, mt, m, px, py, pb, pt, p, fontFamily, fontWeight, color, bgcolor, textAlign } = props;

    return (

        <Typography sx={{
            textAlign: textAlign,
            width: width,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '1.5rem', sm: '1.7rem', md: '2rem', lg: '2.5rem' }
        }}>{props.children}</Typography>

    )
}


export const H4 = (props: any) => {

    const { width, mx, my, mb, mt, m, px, py, pb, pt, p,
        fontFamily, fontWeight, color, bgcolor, textAlign } = props;

    return (

        <Typography sx={{
            textAlign: textAlign,
            width: width,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '1.1rem', sm: '1.3rem', md: '1.5rem', lg: '1.8rem' }
        }}>{props.children}</Typography>

    )
}


export const H5 = (props: any) => {

    const { width, mx, my, mb, mt, m, px, py, pb, pt, p, fontFamily, fontWeight, color, bgcolor, textAlign } = props;

    return (

        <Typography sx={{
            textAlign: textAlign,
            width: width,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '0.9rem', sm: '1rem', md: '1.18rem', lg: '1.25rem' }
        }}>{props.children}</Typography>

    )
}




export const H6 = (props: any) => {

    const { width, mx, my, mb, mt, m, px, py, pb, pt, p,
        fontFamily, fontWeight, color, bgcolor, textAlign } = props;

    return (

        <Typography sx={{
            textAlign: textAlign,
            width: width,
            mx: mx, my: my, mb: mb, mt: mt, m: m,
            px: px, py: py, pb: pb, pt: pt, p: p,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            color: color,
            bgcolor: bgcolor,
            fontSize: { xs: '0.8rem', sm: '0.9rem', md: '1rem', lg: '1.1rem' }
        }}>{props.children}</Typography>

    )
}



