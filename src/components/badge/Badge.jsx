import './Badge.css'

export default function Badge({children, style, color}) {
    return (
        <p className={`${style} ${color}`}>{children}</p>
    )
}