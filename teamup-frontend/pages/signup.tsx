import { Anchor, Button, Container, createStyles, Group, PasswordInput, Select, TextInput, Title, Text, Paper } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useState } from 'react';


const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 18,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  },

  button: {
    position: 'absolute',
    align: 'center',
    marginTop: 20,
  }
}));

function Signup() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();
  const [focused, setFocused] = useState(false);
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [username, setUserName] = useState('');

  return (
    <Container size={420} my={40}>
      <Title
        align='center'
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        Sign Up
      </Title>
      <Text color='dimmed' size='sm' align='center' mt={5}>
        Already have an account? {' '}
        <Anchor<'a'>
          href='/login'
          size='sm'
        >
          Login
        </Anchor>
      </Text>
      
      <Paper withBorder shadow='md' p={30} mt={30} radius='md'>
      <TextInput
        label="First Name"
        placeholder="John"
        required
        classNames={classes}
        value={firstname}
        onChange={(event) => setFirstName(event.currentTarget.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        autoComplete="nope"
      />

      <TextInput
        label="Last Name"
        placeholder="Doe"
        required
        classNames={classes}
        value={lastname}
        onChange={(event) => setLastName(event.currentTarget.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        mt={30}
        autoComplete="nope"
      />

      <TextInput
        label="User Name"
        placeholder="john_doe"
        required
        classNames={classes}
        value={username}
        onChange={(event) => setUserName(event.currentTarget.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        mt={30}
        autoComplete="nope"
      />

      <PasswordInput mt={20} label="Password" placeholder="Your password" id="your-password"/>
      
      <Button fullWidth mt="xl">
          Register
        </Button>
      </Paper>
    </Container>
  );
}

export default Signup