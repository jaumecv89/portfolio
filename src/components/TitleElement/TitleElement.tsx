import "./TitleElement.scss"

interface TitleElementProps {
    title: string
    subtitle: string
}

const TitleElement: React.FC<TitleElementProps> = ({ title, subtitle }) => {
    return (
        <div className="title-element">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    )
}

export default TitleElement
