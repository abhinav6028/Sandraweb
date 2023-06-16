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

    <Grid container justifyContent="center">


      <Grid md={10} sx={{ py: 10 }}>


        <H5 m={1}>Hey,  it's me Sandra... How y'all doing?
          I'll start from a bit about myself, those who don't know me. I was born
          and brought up in Kozhikode...the place where my heart is. I had a very happy
          and fulfilling childhood growing up, I was always surrounded by love and support
          from my parents. They encouraged me to pursue my passions and try new things,
          whether it was playing sports, taking dance lessons, or joining the school band,
          or may it be anything that I like.
        </H5>

        <H5 m={1}>I was a fine student in school, and I enjoyed learning new things and challenging myself academically.
          During my school days,
          I had a great group of friends who I loved to spend time with, whether
          it was hanging out, going on rides, or having sleepovers. I know you people are missing me a lot.
          I too miss those days where I was much happier!
          Childhood is the most pleasing of all life’s seasons. So was mine. My childhood memories are
          very special and I would like to treasure them. Those days were the best.</H5>

      </Grid>

      {
        sectionItems.map(data =>

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

        )
      }



    </Grid >

  )
}

export default Section2