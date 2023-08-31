import "./TitleElement.scss"

interface TitleElementProps {
    title: string
    subtitle: string
}

const TitleElement: React.FC<TitleElementProps> = ({ title, subtitle }) => {
    return (
        <div className="title-element">
            <h2>{subtitle}</h2>
            <h3>{title}</h3>
        </div>
    )
}

export default TitleElement
