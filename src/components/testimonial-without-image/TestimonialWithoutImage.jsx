import defaultLogo from '../../assets/logo.png'
import divider from '../../assets/divider.png'
import './TestimonialWithoutImage.css'

export default function TestimonialWithoutImage({
    companyName="Workcation",
    companyLogo=<img src={defaultLogo}/>,
    personName="May Andersons",
    personRole="CTO",
    layout="desktop",
    children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
}) {

    const personDetails = `${companyName}, ${personRole}`

    if (layout === "mobile") {
        return (
            <section className="testimonial-without-image-mobile">
                {companyLogo}
                <h1>{`\"${children}\"`}</h1>
                <div>
                    <h2>{personName}</h2>
                    <p>{personDetails}</p>
                </div>
            </section>
        )
    }

    else {
        return (
            <section className="testimonial-without-image-desktop">
                {companyLogo}
                <h1>{`\"${children}\"`}</h1>
                <div>
                    <h2>{personName}</h2>
                    <img src={divider}/>
                    <p>{personDetails}</p>
                </div>
            </section>
        )
    }
}