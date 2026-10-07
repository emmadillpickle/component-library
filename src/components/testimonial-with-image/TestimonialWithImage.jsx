import headshot from '../../assets/image.jpg'
import quotationMarks from '../../assets/quotation-marks.png'
import './TestimonialWithImage.css'

export default function TestimonialWithImage({
        companyName="Workcation",
        personName="May Andersons",
        personRole="CTO",
        layout="desktop",
        photo=<img src={headshot}/>,
        children="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis."
}) {

    const personDetails = `${companyName}, ${personRole}`

    if (layout === "mobile") {
        return (
            <section className="testimonial-with-image-mobile">
                <div className="block"></div>
                <div className="crop"> 
                    {photo}
                </div>
                <div className="info">
                    <img src={quotationMarks}/>
                    <h1>{children}</h1>
                    <div className="person-info">
                        <h2>{personName}</h2>
                        <p>{personDetails}</p>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className="testimonial-with-image-desktop">
            <div className="crop">
                {photo}
            </div>
            <div className="info">
                <img src={quotationMarks}/>
                <h1>{children}</h1>
                <div className="person-info">
                    <h2>{personName}</h2>
                    <p>{personDetails}</p>
                </div>
            </div>
        </section>
    )
}