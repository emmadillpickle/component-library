import './App.css'
import Badge from './components/badge/Badge.jsx'
import Banner from './components/banner/Banner.jsx'
import Card from './components/card/Card.jsx'
import TestimonialWithoutImage from './components/testimonial-without-image/TestimonialWithoutImage.jsx'

export default function App() {
  return (
    <main>
      <TestimonialWithoutImage layout="mobile" />
      <TestimonialWithoutImage />
    </main>
  )
}