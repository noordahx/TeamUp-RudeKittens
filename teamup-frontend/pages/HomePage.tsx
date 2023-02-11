import { Carousel } from '@mantine/carousel'
import { Grid, Card, Image, Badge, Button, Group } from '@mantine/core'
import styles from '../styles/pages/HomePage.module.css';
import { BackgroundImage, Center, MantineProvider } from '@mantine/core'
import { Text, Container, useMantineTheme, Title } from '@mantine/core'
import { url } from 'inspector'

const HomePage = () => {
  const theme = useMantineTheme()

  const carouselContent = {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column' as 'column',
    backgroundColor: theme.colors.teal[2],
    borderRadius: 15,
    gap: 15,
  }

  return (
    <section id='about'>
      <Container>
        <Text color='black' align='center'>
          <Title order={1} mb='30px' style={{ paddingTop: 30 }}>
            Find an Event you want to join
          </Title>
        </Text>

        <Grid>
          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <BackgroundImage src='' radius='lg'>
              <Card
                shadow='sm'
                p='lg'
                style={{
                  height: '100%',
                  backgroundColor: theme.colors.teal[3],
                }}
              >
                <Card.Section>
                  {/* <Image src={pic1} alt={'sample1'} /> */}
                </Card.Section>

                <Group
                  position='apart'
                  style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
                >
                  <Text weight={500}>⛹🏻 Basketball at Kowloon Tsai Park</Text>
                  <Badge color='yellow' variant='light'>
                    Easy
                  </Badge>
                </Group>

                <Text size='sm' style={{ marginBottom: 5 }}>
                  10 people: 5 vs 5
                </Text>
                <Text size='sm'>𖡡 Shek Kip Mei</Text>

                <Button variant='light' color='yellow' fullWidth mt='14px'>
                  Find out
                </Button>
              </Card>
            </BackgroundImage>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card
              shadow='sm'
              p='lg'
              style={{
                height: '100%',
                backgroundColor: theme.colors.violet[1],
              }}
            >
              <Card.Section>
                {/* <Image
                  src={require('../Images/lime-canoeing.png')}
                  alt={'sample1'}
                /> */}
              </Card.Section>

              <Group
                position='apart'
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Text weight={500}>⚽ Football at Joint Sports Centre </Text>
                <Badge color='yellow' variant='light'>
                  Medium
                </Badge>
              </Group>

              <Text size='sm' style={{ marginBottom: 5 }}>
                24 people: university age
              </Text>
              <Text size='sm'>𖡡 Kowloon Tong</Text>

              <Button variant='light' color='yellow' fullWidth mt='14px'>
                Find out
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card
              shadow='sm'
              p='lg'
              style={{
                height: '100%',
                backgroundColor: theme.colors.teal[3],
              }}
            >
              <Card.Section>
                {/* <Image
                  src={require('../Images/lime-message-sent.png')}
                  alt={'sample1'}
                /> */}
              </Card.Section>

              <Group
                position='apart'
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Text weight={500}>🏃‍♀️ Running at Harbour</Text>
                <Badge color='yellow' variant='light'>
                  Medium
                </Badge>
              </Group>

              <Text size='sm' style={{ marginBottom: 5 }}>
                40minutes, average pace: 1km in 6.30,inutes
              </Text>
              <Text size='sm'>𖡡 Tsim Sha Tsui</Text>

              <Button variant='light' color='yellow' fullWidth mt='14px'>
                Find out
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card
              shadow='sm'
              p='lg'
              style={{
                height: '100%',
                backgroundColor: theme.colors.violet[1],
              }}
            >
              <Card.Section>
                {/* <Image src={pic1} alt={'sample1'} /> */}
              </Card.Section>

              <Group
                position='apart'
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Text weight={500}>🏉 Rugby at Kowloon Tsai Park</Text>
                <Badge color='yellow' variant='light'>
                  Easy
                </Badge>
              </Group>

              <Text size='sm' style={{ marginBottom: 5 }}>
                4 people needed, 25+ age
              </Text>
              <Text size='sm'>𖡡 Shek Kip Mei</Text>

              <Button variant='light' color='yellow' fullWidth mt='14px'>
                Find out
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col xs={12} sm={4} md={4} lg={4}>
            <Card
              shadow='sm'
              p='lg'
              style={{
                height: '100%',
                backgroundColor: theme.colors.teal[3],
              }}
            >
              <Card.Section>
                {/* <Image
                  src={require('../Images/lime-message-sent.png')}
                  alt={'sample1'}
                /> */}
              </Card.Section>

              <Group
                position='apart'
                style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
              >
                <Text weight={500}>🏃‍♀️ Running at Tamar Park</Text>
                <Badge color='yellow' variant='light'>
                  Expert
                </Badge>
              </Group>

              <Text size='sm'>
                2 people: 10km, average pace 1km in 6minutes
              </Text>
              <Text size='sm'>𖡡 Central</Text>

              <Button variant='light' color='yellow' fullWidth mt='14px'>
                Find out
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </Container>
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
            <div style={carouselContent} className={styles.carouselComp}>
              <Title order={3}>🏃‍♀️42km Marathon</Title>
              <Text>Join Annual HK marathon</Text>
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
          <Carousel.Slide>
            <div style={carouselContent}>
              <Title order={3}>🧗Hike a new Trail</Title>
              <Text>Lion Rock</Text>
            </div>
          </Carousel.Slide>
        </Carousel>
      </Container>
    </section>
  )
}

export default HomePage
