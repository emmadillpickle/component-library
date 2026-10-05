import './App.css'
import Badge from './components/badge/Badge.jsx'

export default function App() {
  return (
    <>
      <Badge style="square" color="purple">Error</Badge>
      <Badge style="pill" color="yellow">Warning</Badge>
    </>
  )
}