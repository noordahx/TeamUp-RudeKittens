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
} from '@mantine/core'
import React, { useState, useEffect } from 'react';
import NavBar from '../src/components/NavBar';


function Login() {

  return (
    <Container size={420} my={40}>
      <Title
        align='center'
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Let's Team Up
      </Title>
      <Text color='dimmed' size='sm' align='center' mt={5}>
        Do not have an account yet?{' '}
        <Anchor<'a'>
          href='/signup'
          size='sm'
        >
          Create account
        </Anchor>
      </Text>

      <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
        <TextInput label='Username' placeholder='johndoe' required />
        <PasswordInput
          label='Password'
          placeholder='Your password'
          required
          mt='md'
        />
        <Group position='apart' mt='lg'>
          <Checkbox label='Remember me' sx={{ lineHeight: 1 }} />
          <Anchor<'a'>
            onClick={(event) => event.preventDefault()}
            href='#'
            size='sm'
          >
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt='xl'>
          Sign in
        </Button>
      </Paper>
    </Container>
  )
}

export default Login