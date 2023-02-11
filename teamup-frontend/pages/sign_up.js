import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  
  export function AuthenticationTitle() {
    return (
        <>
        <Container size={420} my={40}>
            <Title
            align="center"
            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
            >
            Start Teaming Up!
            </Title>
            <Text color="dimmed" size="sm" align="center" mt={5}>
                <a href="https://google.com">Do not have an account yet?{' '}</a>
            </Text>
    
            <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="you@mantine.dev" required />
            <PasswordInput label="Password" placeholder="Your password" required mt="md" />
            <Group position="apart" mt="lg">
                <Checkbox label="Remember me" sx={{ lineHeight: 1 }} />
            </Group>
            <Button fullWidth mt="xl">
                Sign in
            </Button>
            </Paper>
        </Container>
      </>
    );
  }