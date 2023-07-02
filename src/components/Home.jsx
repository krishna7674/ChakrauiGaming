import React from 'react'
import { Box,  Image, Heading, Container, Stack,Text } from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'

import img6 from '../assets/6.jpg'

const headingOptions={
    pos: 'absolute',
    left: '45%',
    top: '20%',
    transform: 'translate(-50%,-50%)',
    textTransform: 'uppercase',
    p: '4',
    size: '4xl',
}



const Home = () => {
  return <Box>
<MyCarousel/>
<Container maxWidth={'container.xl'} minH={'100vh'} p='16'>
    <Heading textTransform={'uppercase'} py='2' w={'fit-content'} borderBottom={'2px solid'} m='auto' > Services</Heading>

    <Stack h={'full'} p={'4'} alignItems={'center'} direction={['column','row']}>
        <Image src={img6} h={['40','400']} filter={'hue-rotate(-130deg)'} />

<Text letterSpacing={'widest'} lineHeight={"190%"} p={["4","16"]} textAlign={'center'} >
Welcome to our gaming video section, where the world of gaming comes to life! Immerse yourself in a captivating collection of video content dedicated to all things gaming. Whether you're a passionate gamer, a casual player, or simply someone fascinated by the gaming industry, this is the place for you.

Join us as we explore the thrilling realm of video games, offering a diverse range of content to satisfy your gaming cravings. Discover in-depth game reviews that delve into the intricate details of the latest releases, providing you with valuable insights and helping you make informed choices.

Looking to enhance your gaming skills? Our gameplay tutorials and tips and tricks videos will guide you through different games, offering valuable strategies and techniques to level up your gameplay. Learn from experienced gamers and take your gaming abilities to new heights.

</Text>


    </Stack>
    
</Container>

  </Box>
};

const MyCarousel =()=>(
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showThumbs={false} showArrows={false}>
<Box w={'full'} h={'100vh'} >
<Image src={img1}/>
<Heading bgColor={'blackAlpha.600'} color={'white'} {...headingOptions}>Watch the Future</Heading>
</Box>

<Box w={'full'} h={'100vh'} >
<Image src={img2}/>
<Heading bgColor={'whiteAlpha.900'} color={'black'} {...headingOptions}> Future is Gaming</Heading>
</Box>

<Box w={'full'} h={'100vh'} >
<Image src={img3}/>
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}>  Gaming on Console</Heading>
</Box>

<Box w={'full'} h={'100vh'} >
<Image src={img4}/>
<Heading bgColor={'whiteAlpha.600'} color={'black'} {...headingOptions}> Night life is cool</Heading>
</Box>
    </Carousel>



);

export default Home
