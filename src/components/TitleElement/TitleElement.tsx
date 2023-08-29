import "./TitleElement.scss"

interface TitleElementProps {
    title: string
    subtitle: string
}

const TitleElement: React.FC<TitleElementProps> = ({ title, subtitle }) => {
    return (
        <div className="title-element">
            <h3>{subtitle}</h3>
            <h2>{title}</h2>
        </div>
    )
}

export default TitleElement
