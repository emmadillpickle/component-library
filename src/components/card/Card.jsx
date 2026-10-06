import React from "react"
import { IoCloudUploadOutline } from "react-icons/io5";
import './Card.css'

export default function Card({
    icon = <IoCloudUploadOutline />, 
    title = "Easy Deployment", 
    iconColor = "#3F75FE",
    children = "Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
}) {

    const [hover, setHover] = React.useState(false)

    function toggleHoverOn() {
        setHover(true)
    }

    function toggleHoverOff() {
        setHover(false)
    }

    const cardClassName = hover ? "card-text hover" : "card-text"

    return (
        <section className="card">
            <div 
                className="card-icon"
                style={{"background-color": iconColor}}
            >
                {icon}
            </div>
            <div 
                className={cardClassName}
                onMouseEnter={toggleHoverOn}
                onMouseLeave={toggleHoverOff}
            >
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
        </section>
    )
}