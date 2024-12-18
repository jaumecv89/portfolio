import Badge from "../badge/Badge"
import "./TitleElement.scss"

type TitleElementProps = {
  title: string
  subtitle: string
}

const TitleElement = ({ title, subtitle }: TitleElementProps) => {
  return (
    <div className="title-element">
      <Badge>{subtitle}</Badge>
      <h3>{title}</h3>
    </div>
  )
}

export default TitleElement
