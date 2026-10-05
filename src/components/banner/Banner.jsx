import './Banner.css'
import errorIcon from '../../assets/error-icon.png'
import neutralIcon from '../../assets/neutral-icon.png'
import successIcon from '../../assets/success-icon.png'
import warningIcon from '../../assets/warning-icon.png'

export default function Banner({children, type = 'neutral'}) {
    var header = 'Update available'
    var imgSrc = neutralIcon

    switch (type) {
        case 'success':
            header = 'Congratulations!'
            imgSrc = successIcon
            break
        case 'warning':
            header = 'Attention'
            imgSrc = warningIcon
            break
        case 'error':
            header = 'There is a problem with your application'
            imgSrc = errorIcon
            break
    }

    return (
        <section className={`banner ${type}`}>
            <img src={imgSrc} />
            <div>
                <h2>{header}</h2>
                {children && <p>{children}</p>}
            </div>
        </section>
    )
}