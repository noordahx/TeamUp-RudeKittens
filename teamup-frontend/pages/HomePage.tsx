// function HomePage() {
//   return <h1>Home Page</h1>
// }

// export default HomePage
import { Carousel } from '@mantine/carousel'
import { Text, Container, useMantineTheme, Title } from '@mantine/core'
import Header from './components/Header'

// import { Text, Container, Anchor, MediaQuery, Button } from '@mantine/core'
// import { MdOutlineArrowDownward } from 'react-icons/md'
const HomePage = () => {
  //const theme = useMantineTheme();

  const theme = useMantineTheme()

  const carouselContent = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
    backgroundColor: theme.colors.teal[5],
    borderRadius: 15,
    gap: 15,
  }

  return (
    <section id='about'>
      <Header></Header>
      <Container>
        <Text color='black' align='center' mb='15px'>
          <Title order={1}>Biggest Events</Title>
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
              <Title order={2}>1. Join sports events</Title>
              <Text>
                Join the excitement where you want! Meet fellow sports
                enthusiasts and enjoy being active. Make new connections and
                have a great time. Find now!
              </Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2}>2</Title>
              <Text>New an Event.</Text>
            </div>
          </Carousel.Slide>
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={2}>3</Title>
              <Text>My Events</Text>
            </div>
          </Carousel.Slide>
        </Carousel>
      </Container>
    </section>
  )
}

export default HomePage
