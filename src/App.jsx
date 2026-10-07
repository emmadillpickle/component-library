import './App.css'

import Badge from './components/badge/Badge'
import Banner from './components/banner/Banner'
import Card from './components/card/Card'
import TestimonialWithoutImage from './components/testimonial-without-image/TestimonialWithoutImage'
import TestimonialWithImage from './components/testimonial-with-image/TestimonialWithImage'

export default function App() {
    return (
        <main className="demo-page">
            <header>
                <h1>React Component Library</h1>
                <p>
                    A collection of reusable UI components built with React.
                </p>
            </header>

            <section>
                <h2>Badges</h2>

                <div className="component-showcase">
                    <Badge color="gray">Badge</Badge>
                    <Badge color="red">Badge</Badge>
                    <Badge color="yellow">Badge</Badge>
                    <Badge color="green">Badge</Badge>
                    <Badge color="blue">Badge</Badge>
                    <Badge color="indigo">Badge</Badge>
                    <Badge color="purple">Badge</Badge>
                    <Badge color="pink">Badge</Badge>
                </div>

                <div className="component-showcase">
                    <Badge color="green" shape="pill">
                        Success
                    </Badge>

                    <Badge color="red" shape="pill">
                        Error
                    </Badge>

                    <Badge color="blue" shape="pill">
                        New
                    </Badge>
                </div>
            </section>

            <section>
                <h2>Banners</h2>

                <div className="component-stack">
                    <Banner>
                        A new software update is available.
                    </Banner>

                    <Banner type="success">
                        Your profile has been updated successfully.
                    </Banner>

                    <Banner type="warning">
                        Your subscription will expire in 7 days.
                    </Banner>

                    <Banner type="error">
                        We were unable to process your request.
                    </Banner>
                </div>
            </section>

            <section>
                <h2>Cards</h2>

                <div className="component-showcase">
                    <Card
                        title="Easy Deployment"
                    >
                        Ac tincidunt sapien vehicula erat auctor
                        pellentesque rhoncus.
                    </Card>

                    <Card
                        title="Flexible Configuration"
                    >
                        Configure components through simple,
                        reusable props.
                    </Card>

                    <Card
                        title="Reusable Design"
                    >
                        Build consistent interfaces across
                        applications.
                    </Card>
                </div>
            </section>

            <section>
                <h2>Testimonials</h2>

                <div className="component-stack">
                    <TestimonialWithoutImage
                        companyName="Workcation"
                        personName="May Anderson"
                        personRole="CTO"
                    >
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nemo expedita voluptas
                        culpa sapiente alias molestiae.
                    </TestimonialWithoutImage>

                    <TestimonialWithImage
                        companyName="Workcation"
                        personName="May Anderson"
                        personRole="CTO"
                    >
                        Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Nemo expedita voluptas
                        culpa sapiente alias molestiae.
                    </TestimonialWithImage>

                    <div className="component-showcase">
                      <TestimonialWithoutImage
                          companyName="Workcation"
                          personName="May Anderson"
                          personRole="CTO"
                          layout="mobile"
                      >
                          Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nemo expedita voluptas
                          culpa sapiente alias molestiae.
                      </TestimonialWithoutImage>

                      <TestimonialWithImage
                          companyName="Workcation"
                          personName="May Anderson"
                          personRole="CTO"
                          layout="mobile"
                      >
                          Lorem ipsum dolor sit amet consectetur
                          adipisicing elit. Nemo expedita voluptas
                          culpa sapiente alias molestiae.
                      </TestimonialWithImage>
                    </div>
                </div>
            </section>
        </main>
    )
}