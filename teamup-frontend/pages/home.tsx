// export function HomePage() {
//   return <h1>Home Page</h1>
// }

import { Navbar } from '@mantine/core'

export function HomePage() {
  return (
    <Navbar height={600} p='xs' width={{ base: 300 }}>
      <Navbar.Section>{/* Header with logo */}</Navbar.Section>
      <Navbar.Section grow mt='md'>
        {/* Links sections */}
      </Navbar.Section>
      <Navbar.Section>{/* Footer with user */}</Navbar.Section>
    </Navbar>
  )
}

export default HomePage
