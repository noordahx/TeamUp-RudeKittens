// function HomePage() {
//   return <h1>Home Page</h1>
// }

// export default HomePage
import { Carousel } from '@mantine/carousel'
import { Text, Container, useMantineTheme, Title } from '@mantine/core'
// import Header from './components/Header'
import FindEvents from './components/FindEvents'

// import { Text, Container, Anchor, MediaQuery, Button } from '@mantine/core'
// import { MdOutlineArrowDownward } from 'react-icons/md'
const HomePage = () => {
  const theme = useMantineTheme()

  // const theme = useMantineTheme()

  const carouselContent = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
    backgroundColor: theme.colors.teal[2],
    // backgroundimage: url('http://placehold.it/300?text=placehold'),
    //  style={{
    //         backgroundImage: `url("https://via.placeholder.com/500")`,
    //       }}
    borderRadius: 15,
    gap: 15,
  }

  return (
    <section id='about'>
      {/* <Header></Header> */}

      <FindEvents></FindEvents>
      <Container style={{ marginBottom: 40 }}>
        <Text color='black' align='center' mb='15px'>
          <Title order={1} style={{ marginTop: 30 }}>
            Biggest Events
          </Title>
        </Text>

        <Text color='black' align='center' mb='25px'>
          Some of the best events happening this month
        </Text>

        <Carousel
          withIndicators
          height={200}
          slideSize='33.333333%'
          slideGap='md'
          breakpoints={[
            { maxWidth: 'md', slideSize: '50%' },
            { maxWidth: 'sm', slideSize: '100%', slideGap: 15 },
          ]}
          loop
          align='start'
          pr='10px'
          pl='10px'
        >
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={3}>🏃‍♀️42km Marathon</Title>
              <Text>Join Annual Hk marathon</Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={3}>🏊🏼‍♂️Ironman Competition</Title>
              <Text>Try yourself in multiple sports</Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={3}>🧗Hike a new Trail</Title>
              <Text>Kowloon Peak</Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={3}>🥊Boxing</Title>
              <Text>A Workshop on Boxing</Text>
            </div>
          </Carousel.Slide>
        </Carousel>
      </Container>
    </section>
  )
}

export default HomePage
