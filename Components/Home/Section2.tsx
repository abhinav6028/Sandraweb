import React from 'react'
import { Grid, Typography } from "@mui/material"
import { H4, H5 } from '../UI/Typography/Typography'
import { PRIMARY_SHADOW } from '@/utils/shadows'
import { PrimaryButton } from '../UI/Button/CustomizedButton'
import { useRouter } from 'next/navigation'

const Section2 = () => {

  const router = useRouter();

  const sectionItems = [
    {
      heading: 'ESSENCE OF MY LIFE',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis pariatur provident ratione dolorem voluptate. Officiis, perferendis maxime temporibus fuga alias voluptates laborum eum cum quisquam quidem illo natus voluptatem saepe.',
      buttonText: 'More about my family',
      path: '/mylife',
      img: 'Assets/sectionimages/myself.jpg'
    },
    {
      heading: 'LOVE BLOSSOMS ME AND MY FAMILY',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis pariatur provident ratione dolorem voluptate. Officiis, perferendis maxime temporibus fuga alias voluptates laborum eum cum quisquam quidem illo natus voluptatem saepe.',
      buttonText: 'More about my childhood',
      path: '/family',
      img: 'Assets/sectionimages/chiledhoodwithfamily.jpg'
    },
    {
      heading: 'SPRINGTIME OF LIFE',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis pariatur provident ratione dolorem voluptate. Officiis, perferendis maxime temporibus fuga alias voluptates laborum eum cum quisquam quidem illo natus voluptatem saepe.',
      buttonText: 'More about my school life',
      path: '/schoollife',
      img: 'Assets/sectionimages/schoollife.jpg'
    },
    {
      heading: 'COLLEGITE YEAR',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis pariatur provident ratione dolorem voluptate. Officiis, perferendis maxime temporibus fuga alias voluptates laborum eum cum quisquam quidem illo natus voluptatem saepe.',
      buttonText: 'More about my college life',
      path: '/collegelife',
      img: 'Assets/sectionimages/collgelife.jpg'
    },

  ]

  return (

    <Grid container>

      {sectionItems.map(data =>

        <Grid justifyContent="center" alignItems="center" container sx={{ boxShadow: PRIMARY_SHADOW, m: 1, bgcolor: "white", }}>

          <Grid md={4} sx={{ p: 2 }}>

            <img width="100%" src={`${data.img}`} alt="" />

          </Grid>

          <Grid md={8} sx={{ p: 1 }}>

            <H4 mb={3} fontWeight="bold">{data.heading}</H4>

            <H5 mb={3}>{data.discription}</H5>

            <PrimaryButton bgcolor="dodgerblue" onClick={() => router.push(`${data.path}`)}>Show More</PrimaryButton>

          </Grid>

        </Grid>

      )}

    </Grid >

  )
}

export default Section2