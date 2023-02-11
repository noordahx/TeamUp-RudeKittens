// import '../styles/SectionFour.scss'

import {
  useMantineTheme,
  Container,
  Text,
  Title,
  Grid,
  Card,
  Image,
  Badge,
  Button,
  Group,
} from '@mantine/core'

import { BackgroundImage, Center, MantineProvider } from '@mantine/core'

const SectionFour = () => {
  const theme = useMantineTheme()

  return (
    <section id='section-four'>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
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
      </MantineProvider>
    </section>
  )
}

export default SectionFour
