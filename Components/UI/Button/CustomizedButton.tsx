import { Button } from '@mui/material';
import React from 'react'




export const PrimaryButton = (props: any) => {

    const { children, onClick, bgcolor, mt: mt, m: m, type, my, className } = props;

    return (
        <Button className={className} type={type} sx={{
            mt: mt,
            textTransform: "initial", borderRadius: "10px",
            color: bgcolor === "white" ? "green" : "white",
            width: props.width, px: 4, py: 1, my: my,
            boxShadow: "none", m: m, bgcolor: bgcolor, border: `1px solid ${bgcolor}`, "&:hover": {
                bgcolor: "transparent", boxShadow: "none",
                color: bgcolor, border: `1px solid ${bgcolor}`,

            },
        }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </Button >
    )
}


export const OutlinedButton = (props: any) => {

    const { children, onClick, bgcolor, m: m, type, my, className } = props;

    return (
        <Button className={className} type={type} sx={{
            textTransform: "initial", borderRadius: "10px",
            color: bgcolor,
            width: props.width, px: 4, py: 1, my: my,
            boxShadow: "none", m: m, bgcolor: "transparent", border: `1px solid ${bgcolor}`, "&:hover": {
                bgcolor: "transparent", boxShadow: "none",
                color: bgcolor, border: `1px solid ${bgcolor}`,

            },
        }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </Button >
    )
}



export const ButtonText = (props: any) => {


    const AllProperties = {
        width: props.width,
        padding: props.padding,
        margin: props.margin,
        position: props.position,
        top: props.top,
        left: props.left,
        bottom: props.bottom,
        borderRadius: props.borderRadius,
    }


    return (
        <h4

            style={AllProperties}

            onClick={props.onClick} className={`button ${props.color}`}>{props.children}

        </h4>
    )
}