import { Box, Grid } from '@mui/material'
import React from 'react';
import { H1, H2 } from '../UI/Typography/Typography';


export default function Banner() {

  return (
    <Grid container bgcolor="" justifyContent="center" sx={{
      backgroundImage: 'url("Assets/Banner/Flowers.jpg")',
      backgroundSize: 'cover',
    }} >

      <Grid md={11} lg={11} container sx={{
        py: { xs: 10, sm: 11, md: 13, lg: 20 }
      }}>

        <Grid container md={6} lg={6} bgcolor="" sx={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>

          <Grid bgcolor="#1E1E1E" sx={{
            width: { xs: 200, sm: 340, md: 350, lg: 445 },
            height: { xs: 250, sm: 500, md: 540, lg: 610 },
            pt: { xs: 1, sm: 1, md: 2, lg: 2 },
            pl: { xs: 1, sm: 1, md: 2, lg: 2 },
          }} >


            <Box sx={{
              width: { xs: 200, sm: 340, md: 350, lg: 445 },
              height: { xs: 250, sm: 500, md: 540, lg: 610 },
            }} >

              <img src="Assets/ Banner/banner.jpg" alt="" width="100%" />

            </Box>



          </Grid>

        </Grid>


        <Grid container md={6} lg={6} bgcolor="" alignItems="center" >

          <Box sx={{
            mt: { xs: 5, lg: 0 },
            ml: { xs: 4, lg: 0 }
          }}>

            <H2 fontWeight="bold" fontFamily="'Shadows Into Light', cursive">Hey It's Me </H2>
            <H1 fontWeight="bold" fontFamily="">SANDRA MANOJ</H1>

          </Box>

        </Grid>

      </Grid>

    </Grid >
  )
}
