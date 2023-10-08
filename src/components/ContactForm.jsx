import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Message from '../components/Message'
import Translation from '../Home.json'
import { useStateContext } from '../context/StateContext'
import axios from 'axios'

const ContactForm = ({ language, setShowContact }) => {
  const { botsCount, setBotsCount } = useStateContext()
  const [content, setContent] = useState({})

  useEffect(() => {
    if (language === 'slovak') {
      setContent(Translation.slovak)
    } else if (language === 'english') {
      setContent(Translation.english)
    } else if (language === 'czech') {
      setContent(Translation.czech)
    }
  }, [language])

  const [message, setMessage] = useState(null)
  const [messageSuccess, setMessageSuccess] = useState(null)
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [mailMessage, setMailMessage] = useState('')
  const [checkBox, setCheckBox] = useState(false)

  const handleCheckBox = () => {
    setCheckBox((current) => !current)
  }

  const form = useRef()
  const x = import.meta.env.VITE_EMAIL_EXTRA_ONE
  const y = import.meta.env.VITE_EMAIL_EXTRA_TWO
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseBots = async () => {
    const { data } = await axios.put(
      `https://pictusweb.online/api/bots/increase`,
      // `http://localhost:2000/api/bots/increase`,

      config
    )
    setBotsCount(data)
    console.log('ctc:', data)
  }

  const sendEmail = (e) => {
    e.preventDefault()

    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      setMessage(content.contactError)
      // setName('')
      // setSubject('')
      setEmail('')
      // setPhone('')
      setMailMessage('')
      // increaseBots()

      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE,
          form.current,
          import.meta.env.VITE_EMAILJS_USER
        )
        .then(
          (result) => {
            console.log(result.text)
            setMessageSuccess(content.contactSuccess)

            console.log('message sent')
          },
          (error) => {
            console.log(error.text)
            setMessageSuccess(content.contactError2)
          }
        )

      // setName('')
      // setSubject('')
      setEmail('')
      // setPhone('')
      setMailMessage('')
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className='pt-5 lg:pt-10 pb-10 h-[100vh] '>
      <button className='ml-auto' onClick={() => setShowContact(false)}>
        X
      </button>
      {/* <h1
        id='contact'
        className='text-[25px] lg:text-[35px] text-white text-center lg:pt-[5%] pt-[55px]'
      >
        {content.contactTitle}
      </h1> */}
      <div className='mx-4 md:mx-6 lg:mx-0 flex lg:flex-row flex-col lg:justify-center text-white lg:py-[50px] '>
        <div className='pt-[50px] lg:pt-0'>
          {messageSuccess && (
            <Message variant='success'>{messageSuccess}</Message>
          )}
          {message && <Message variant='danger'>{message}</Message>}
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className='flex flex-col gap-[2.5px] text-[25px]'
            >
              <div className='flex flex-col justify-center '>
                <label className='form-label mt-[2.5%]'>
                  {content.contactEmail} <sup>*</sup>
                </label>
                <input
                  className='form-control  rounded-xl'
                  type='email'
                  name='user_email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required='required'
                />
                <label className='form-label mt-[2.5%]'>
                  {content.contactMessage} <sup>*</sup>
                </label>
                <textarea
                  className='form-control rounded-xl'
                  rows='5'
                  name='message'
                  value={mailMessage}
                  onChange={(e) => setMailMessage(e.target.value)}
                  required='required'
                ></textarea>
              </div>
              <div className='flex flex-col'>
                <div className='flex flex-row items-center form-check mt-8'>
                  <input
                    id='flexCheckDefault'
                    type='checkbox'
                    defaultChecked={false}
                    value={checkBox}
                    onChange={handleCheckBox}
                    required='required'
                    className='rounded-xl w-[25px] h-[25px] lg:h-[30px]'
                  />

                  <label
                    className='form-check-label lg:text-[30px] text-[25px] ml-[15px]'
                    htmlFor='flexCheckDefault'
                  >
                    {content.contactAgree}
                  </label>
                </div>
              </div>
              <input
                className='form-control hidden'
                type='text'
                defaultValue={passwordGroupOne}
                onChange={(e) => setPasswordGroupOne(e.target.value)}
              />
              <input
                className='form-control hidden'
                type='text'
                defaultValue={passwordGroupTwo}
                onChange={(e) => setPasswordGroupTwo(e.target.value)}
              />
              <button
                className='text-[25px] lg:mt-20 mt-10 rounded-xl border border-white hover:text-[#000000] hover:bg-white'
                type='submit'
                value='Send'
              >
                {content.contactSend}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
