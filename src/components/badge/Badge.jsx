import './Badge.css'

export default function Badge({children, style, color}) {
    return (
        <p className={`badge ${style} ${color}`}>{children}</p>
    )
}