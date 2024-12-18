import emailjs from "@emailjs/browser"
import { FormEvent } from "react"
import { BiSolidErrorCircle } from "react-icons/bi"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import "./ContactForm.scss"

const ContactForm = () => {
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
        () =>
          toast.success("Message sent successfully!", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          }),
        () =>
          toast.error("There was an error sending the message.", {
            position: "bottom-right",
            autoClose: 4000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          })
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
      <ToastContainer />
    </form>
  )
}

export default ContactForm
