













import { MAIN_COLOUR, TERNARY_COLOUR } from '@/utils/colours';
import { Box, Grid } from '@mui/material';
import { useRouter } from 'next/navigation';
import { H3, H4, H5 } from '../UI/Typography';


export default function Section2() {

  const router = useRouter()

  const sectionItems = [
    {
      heading: 'MY SELF ',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis pariatur provident ratione dolorem voluptate. Officiis, perferendis maxime temporibus fuga alias voluptates laborum eum cum quisquam quidem illo natus voluptatem saepe.',
      buttonText: 'More about my family',
      path: '/myself',
      img: 'Assets/sectionimages/myself.jpg'
    },
    {
      heading: 'MY CHILDHOOD WITH FAMILY',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis pariatur provident ratione dolorem voluptate. Officiis, perferendis maxime temporibus fuga alias voluptates laborum eum cum quisquam quidem illo natus voluptatem saepe.',
      buttonText: 'More about my childhood',
      path: '/childhood',
      img: 'Assets/sectionimages/chiledhoodwithfamily.jpg'
    },
    {
      heading: 'MY SCHOOL LIFE',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis pariatur provident ratione dolorem voluptate. Officiis, perferendis maxime temporibus fuga alias voluptates laborum eum cum quisquam quidem illo natus voluptatem saepe.',
      buttonText: 'More about my school life',
      path: '/schoollife',
      img: 'Assets/sectionimages/schoollife.jpg'
    },
    {
      heading: 'MY COLLAGE LIFE ',
      discription: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis pariatur provident ratione dolorem voluptate. Officiis, perferendis maxime temporibus fuga alias voluptates laborum eum cum quisquam quidem illo natus voluptatem saepe.',
      buttonText: 'More about my college life',
      path: '/collegelife',
      img: 'Assets/sectionimages/collgelife.jpg'
    },

  ]



  return (
    <Grid container justifyContent="center" >

      <Box sx={{
        width: '100%',
        py: { xs: 1, sm: 2, md: 3, lg: 3 }
      }}>
        <H3 textAlign="center" fontWeight="bold" color="#A9A4DD">MY JOURNEY</H3>
      </Box>

      <Grid container
        lg={10} md={9} sm={8} xs={10}
        sx={{
          justifyContent: 'center',
          bgColor: 'red'
        }}>

        <H5 bgColor="red" textAlign="center" fontWeight="550">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia sit accusantium nostrum quasi vel laborum asperiores hic consequatur aliquid ullam, voluptatum impedit explicabo corrupti magni earum repellat laudantium porro expedita.
        </H5>

      </Grid>


      {
        sectionItems.map((data: any, index: any) =>

          <Grid key={index} container lg={11} md={10} sm={9} xs={10} sx={{
            mt: { xs: 2, sm: 2, md: 3, lg: 4 },
            justifyContent: 'space-around'
          }}>

            <Grid container justifyContent="center" alignItems="center" lg={3} md={4} sm={4}
              bgcolor={MAIN_COLOUR}

            >

              <Grid container lg={10}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                  border: "10px solid #FFFFFF",
                  my: 3,
                  height: { xs: 250, lg: 300 },
                  width: { xs: 250, lg: 300 },
                }}>
                <img src={data.img} width="100%" height="100%" alt="" />
              </Grid>

            </Grid>



            <Grid lg={8} md={8} sm={8} bgcolor={MAIN_COLOUR} sx={{
              pb: { xs: 2, sm: 0, md: 0, lg: 0 }
            }} >

              <Grid container sx={{
                mt: { xs: 2, lg: 5 },
                ml: { xs: 2, lg: 4 }
              }}>
                <H4  fontWeight="600">{data.heading}</H4>
              </Grid>

              <Grid container xs={10} lg={8} fontWeight="600" sx={{
                mt: { xs: 1, lg: 3 },
                ml: { xs: 2, lg: 4 }
              }}>
                <H5 fontWeight="600">{data.discription}</H5>
              </Grid>

              <Grid container sx={{
                mt: { xs: 2, lg: 5 },
                ml: { xs: 2, lg: 4 }
              }}>

                <Box
                  onClick={() => router.push(`${data.path}`)}
                  sx={{
                    bgcolor: "#ffff",
                    py: 1,
                    px: { xs: 3, lg: 6 },
                    cursor: 'pointer'
                  }}>
                  <H5 fontWeight="550" >{data.buttonText}</H5>
                </Box>

              </Grid>

            </Grid>

          </Grid>

        )
      }

    </Grid >
  )
}















// import { Box, Grid } from '@mui/material'
// import React from 'react'

// export default function Section2() {
//   return (
//     <Grid container justifyContent="center" sx={{
//       bgcolor: { xs: 'blue', sm: 'yellow', md: 'green', lg: 'pink' }
//     }} >

//       <Grid xs={10} sm={10} md={10} lg={10} container justifyContent="space-around" bgcolor="red">

//         <Grid sm={3} md={3} lg={3} bgcolor="" container justifyContent="center" alignItems="center">

//           <Box sx={{
//             width: { xs: 200, sm: 250, md: 300, lg: 350 },
//             height: { xs: 200, sm: 250, md: 300, lg: 350 },
//             bgcolor: 'blue',
//             display: 'flex',
//             justifyContent: 'center',
//             alignItems: 'center'
//           }}>

//             <Box sx={{
//               width: { xs: 150, sm: 200, md: 250, lg: 330 },
//               height: { xs: 150, sm: 200, md: 250, lg: 300 },
//               bgcolor: 'green',
//               border:'5px solid red'


//             }}></Box>





//           </Box>

//         </Grid>











//         <Grid sm={8} md={8} lg={8} bgcolor="violet" container justifyContent="center" alignItems="center">b</Grid>

//       </Grid>

//     </Grid>
//   )
// }

