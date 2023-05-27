import { Typography } from "@mui/material";
import React from "react";

export const H1 = (props: any) => {
    const { width, m, ml, mr, mt, mb, mx, my, p, pl, pr, pt, pb, px, py, textAlign, color, fontWeight } = props;

    return (
        <Typography sx={{
            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            m: m, ml: ml, mr: mr, mt: mt, mb: mb, mx: mx, my: my,
            p: p, pl: pl, pr: pr, pt: pt, pb: pb, px: px, py: py,
            color: color,
            fontSize: { xs: '1.5rem', sm: '2.8rem', md: '3.5rem', lg: '4rem' },
            fontWeight: fontWeight
        }}>
            {props.children}
        </Typography>
    )
}

export const H2 = (props: any) => {

    const { width, m, ml, mr, mt, mb, mx, my, p, pl, pr, pt, pb, px, py, textAlign, color, lineHeight, fontWeight,fontFamily } = props;


    return (
        <Typography sx={{
            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            m: m, ml: ml, mr: mr, mt: mt, mb: mb, mx: mx, my: my,
            p: p, pl: pl, pr: pr, pt: pt, pb: pb, px: px, py: py,
            bgColor: 'red',
            color: color,
            fontSize: { xs: '1.3rem', sm: '2.2rem', md: '2.8rem', lg: '3rem' },
            lineHeight: lineHeight,
            fontWeight: fontWeight, fontFamily:fontFamily
        }}>
            {props.children}
        </Typography>
    )
}

export const H3 = (props: any) => {
    const { width, m, ml, mr, mt, mb, mx, my, p, pl, pr, pt, pb, px, py, textAlign, color, fontWeight, lineHeight } = props;

    return (
        <Typography sx={{
            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            m: m, ml: ml, mr: mr, mt: mt, mb: mb, mx: mx, my: my,
            p: p, pl: pl, pr: pr, pt: pt, pb: pb, px: px, py: py,
            bgColor: 'red',
            color: color,
            fontWeight: fontWeight,
            fontSize: { xs: '1.1rem', sm: '1.6rem', md: '1.8rem', lg: '2rem' },
            lineHeight: lineHeight
        }}>
            {props.children}
        </Typography>
    )
}

export const H4 = (props: any) => {
    const { width, m, ml, mr, mt, mb, mx, my, p, pl, pr, pt, pb, px, py, textAlign, color,fontWeight } = props;

    return (
        <Typography sx={{
            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            m: m, ml: ml, mr: mr, mt: mt, mb: mb, mx: mx, my: my,
            p: p, pl: pl, pr: pr, pt: pt, pb: pb, px: px, py: py,
            bgColor: 'red',
            color: color,
            fontSize: { xs: '1rem', sm: '1.3rem', md: '1.5rem', lg: '1.5rem' },
            fontWeight:fontWeight
        }}>
            {props.children}
        </Typography>
    )
}

export const H5 = (props: any) => {




    const { width, m, ml, mr, mt, mb, mx, my, p, pl, pr, pt, pb, px, py, textAlign, color, fontWeight, bgColor } = props;



    return (
        <Typography sx={{
            width: !width ? '100%' : width,
            textAlign: !textAlign ? 'start' : textAlign,
            m: m, ml: ml, mr: mr, mt: mt, mb: mb, mx: mx, my: my,
            p: p, pl: pl, pr: pr, pt: pt, pb: pb, px: px, py: py,
            color: color,
            fontSize: { xs: '.8rem', sm: '1.2rem', md: '1.4rem', lg: '1.4rem' },
            fontWeight: fontWeight,
            bgColor: bgColor
        }}>
            {props.children}
        </Typography>
    )
}