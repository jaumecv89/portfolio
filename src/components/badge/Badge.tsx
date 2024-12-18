import React from "react"
import "./Badge.scss"

type BadgeProps = {
  children: React.ReactNode
}

const Badge = ({ children }: BadgeProps) => {
  return <div className="badge">{children}</div>
}

export default Badge
