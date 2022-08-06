import React from 'react'

const ContactUs = () => {
  return (
    <section className="container mx-auto p-4 md:p-10 lg:p-16 lg:py-24 font-campton">
        <div className="bg-[#F9F9F9] p-8">
        <p className="text-3xl md:text-5xl font-semibold leading-10 text-gray-900">Reach out to us</p>

<form action="" className="my-6 flex flex-wrap gap-8">
    <input type="text" placeholder="Name" name="name" className="w-full md:w-4.5/10 p-4 text-gray-400"/>
    <input type="email" placeholder="Email" name="email" className="w-full md:w-4.5/10 p-4 text-gray-400"/>
   
    <textarea id="message" name="message" rows="4"  className="w-full p-4 text-gray-400">
Message
</textarea>
<button type="submit" className="p-4 text-white bg-[#0075B3] font-normal">
    Send Message
</button>
</form> 

        </div>

    </section>
  )
}

export default ContactUs