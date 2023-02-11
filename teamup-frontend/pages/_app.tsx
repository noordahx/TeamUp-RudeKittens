import Link from 'next/link'
import { Demo } from './home'

function Home() {
  return (
    <ul>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/about'>About Us</Link>
      </li>
      <li>
        <Link href='/blog/hello-world'>Blog Post</Link>
      </li>
    </ul>
  )
}

export default Home
