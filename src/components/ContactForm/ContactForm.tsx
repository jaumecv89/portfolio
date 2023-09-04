import emailjs from "@emailjs/browser"
import { FormEvent, useRef, useState } from "react"
import { BiSolidErrorCircle } from "react-icons/bi"
import "./ContactForm.scss"

const ContactForm = () => {
    const resultMessage = useRef<HTMLSpanElement>(null)

    const [error, setError] = useState(false)
    const [alert, setAlert] = useState(false)

    const handleAlerts = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
        }, 5000)
    }

    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                e.currentTarget,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                () => {
                    setError(false)
                    handleAlerts()
                },
                () => {
                    setError(true)
                    handleAlerts()
                }
            )
        e.currentTarget.reset()
    }

    return (
        <form onSubmit={sendEmail} className="form">
            <div className="form__input-block">
                <input
                    type="text"
                    name="user_name"
                    className="form__input"
                    placeholder="Name"
                    pattern="^[A-Za-z0-9]{2,16}$"
                    required
                />
                <div className="form__error">
                    <BiSolidErrorCircle />
                    Invalid name
                </div>
            </div>
            <div className="form__input-block">
                <input
                    type="email"
                    name="user_email"
                    className="form__input"
                    placeholder="Email"
                    required
                />
                <div className="form__error">
                    <BiSolidErrorCircle />
                    Invalid email
                </div>
            </div>
            <div className="form__input-block">
                <textarea
                    rows={4}
                    name="message"
                    placeholder="Message"
                    className="form__input"
                    required
                />
                <div className="form__error">
                    <BiSolidErrorCircle />
                    Message cannot be empty
                </div>
            </div>
            <button type="submit" className="form__button">
                Say hello!
            </button>
            {alert && (
                <span
                    ref={resultMessage}
                    style={{ color: error ? "rgb(255 46 91/1)" : "#428959" }}
                >
                    {error
                        ? "There was an error sending the message."
                        : "Message sent successfully!"}
                </span>
            )}
        </form>
    )
}

export default ContactForm
