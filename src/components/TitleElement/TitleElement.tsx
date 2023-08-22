import "./TitleElement.scss"

interface TitleElementProps {
    title: string
    subtitle: string
}

const TitleElement: React.FC<TitleElementProps> = ({ title, subtitle }) => {
    return (
        <div className="title-element">
            <span className="title-element__title">{title}</span>
            <span className="title-element__subtitle">{subtitle}</span>
        </div>
    )
}

export default TitleElement
