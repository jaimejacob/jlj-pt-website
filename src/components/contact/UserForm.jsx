import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const UserForm = () => {
    const [state, handleSubmit] = useForm('xgebwqay');
  if (state.succeeded) {
    return <p>Thank you contacting me. I'll be reaching out to you as soon as possible!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
        <input id='name' type="text" name='name' placeholder='Your name' required />
        <ValidationError prefix='Name' field='name' errors={state.errors} />
        <input id='email' type="email" name='email' placeholder='Your email' required />
        <ValidationError prefix='Email' field='email' errors={state.errors} />
        <textarea id='message' name="message" rows="5" placeholder='Your message' required></textarea>
        <ValidationError prefix='Message' field='message' errors={state.errors} />
        <button type='submit' className='btn btn-primary' disabled={state.submitting}>Submit</button>
    </form>
  )
}

export default UserForm