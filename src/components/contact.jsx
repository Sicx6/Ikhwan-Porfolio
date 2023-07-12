import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#1b2223] flex justify-center items-center p-4'>
        <form  method='POST' action='https://getform.io/f/76f30637-3526-49ca-9dd8-8019f1306693' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#0ef6cc]'>Contact</p>
                <p className='py-4'>let connect through email at Gmail.com - ikhwanj95@gmail.com</p>
            </div>
            <input className='p-2 bg-[#3a4f50]' type='text' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#3a4f50]' type="email" placeholder="Email" name="email" />
            <textarea className = 'bg-[#3a4f50] p-2' name='message' rows='10' placeholder='Message'/>
            <button className=' border-white border-2 hover:bg-[#0ef6cc] hover:border-[#0ef6cc] px-4 py3 my-8 mx-auto flex items-center'>Let's Connect</button>

        </form>
    </div>
  )
}

export default Contact