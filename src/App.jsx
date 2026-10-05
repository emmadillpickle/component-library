import './App.css'
import Badge from './components/badge/Badge.jsx'
import Banner from './components/banner/Banner.jsx'

export default function App() {
  return (
    <main>
      <Banner />
      <Banner type="warning">There is a warning somewhere!</Banner>
      <Banner type="error" />
      <Banner type="success" />
    </main>
  )
}