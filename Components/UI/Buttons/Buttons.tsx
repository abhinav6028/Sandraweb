import { TERNARY_COLOUR, SECONDATY_FONT_COLOUR } from '@/utils/colours';
import { Box } from '@mui/material'
import React from 'react'
import { H5 } from '../Typography';

export default function SectionButtons(props: any) {

    const { onClick } = props

    return (
        <Box
            
            sx={{
                bgcolor: TERNARY_COLOUR,
                py: 1,
                px: { xs: 3, lg: 6 }
            }}>
            <H5 fontWeight="550" color="#fffff">{props.children}</H5>
        </Box>
    )
}
