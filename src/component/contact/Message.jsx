import React from 'react'

function Message() {
  return (
    <div className='message'>
        <form action="https://formspree.io/f/xqknrvwe" method="POST">
            <div className="input__double">
                <label htmlFor="firstname">
                    <input type="text" name='firstname' placeholder='First Name' />
                </label>

                <label htmlFor="lastname">
                    <input type="text" name='lastname' placeholder='Last Name' />
                </label>
            </div>

            <div className="input__single">
               <label htmlFor="email">
                    <input type="email" name='lastname' placeholder='Email' />
                </label>
            </div>

            <div className="textarea">
                <textarea name="message me" id="" cols="30" rows="10" placeholder='write your message'></textarea>
            </div>
            <button type="submit">Send Message</button>
        </form>
    </div>
  )
}

export default Message