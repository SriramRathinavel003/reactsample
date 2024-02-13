import React from 'react'
import { BsFillGrid1X2Fill } from 'react-icons/bs'
import Features from './Features'
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { FaUserGroup } from "react-icons/fa6";
import { BsFillSendFill } from "react-icons/bs";
import {IoMdAperture  } from "react-icons/io";
import {IoIosBody} from "react-icons/io";
function Gridcomp() {
  return (
    <div className='w-full bg-#ffff'>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 sm:grid-col-1 mt-14 mb-14 gap-10">

<Features Icon={<FaUserGroup className="w-12 h-12 fill-icon p-3 bg-icon-background rounded-sm" />} title={'User Friendly'} para={'Our user-friendly web template is designed with simplicity and intuitive navigation in mind, ensuring a seamless browsing experience. With its clean and modern layout, users can easily find the information '}/>

<Features Icon={<HiOutlineEmojiHappy className="w-12 h-12 fill-icon p-3 bg-icon-background rounded-sm" />} title={'Responsive'} para={' Responsive and Mobile-Friendly: Ensuring that the template is responsive and adapts to various screen sizes is crucial to cater to users accessing the website from different devices, such as smartphones, tablets, and desktops.'
}/>

<Features Icon={<BsFillSendFill className="w-12 h-12 fill-icon p-3 bg-icon-background rounded-sm" />} title={'Navigation'} para={'Intuitive Navigation: An easy-to-navigate menu and clear call-to-action buttons help users find what they are looking for quickly and effortlessly, enhancing user satisfaction and reducing bounce rates'
} />

<Features Icon={<BsFillGrid1X2Fill className="w-12 h-12 fill-icon p-3 bg-icon-background rounded-sm" />} title={'Speed Optimized'} para={'Optimized for Speed: Optimizing the templates code and assets such as images and scripts  will improve page loading times  preventing users from experiencing long wait times and encouraging them to stay on the site'}/>

<Features Icon={<IoMdAperture className="w-12 h-12 fill-icon p-3 bg-icon-background rounded-sm" />} title={'Fully Customizable'} para={' SEO-friendly Structure: Incorporating proper heading tags, descriptive meta tags, and clean URLs can contribute to better search engine rankings and increased organic traffic to the website'}/>

<Features Icon={<IoIosBody className="w-12 h-12 fill-icon p-3 bg-icon-background rounded-sm" />} title={'Accessibility'}para={'Accessibility Considerations: Implementing accessibility features like semantic HTML, alt text for images, and keyboard-friendly navigation ensures that people with disabilities can access and use the website effectively, promoting inclusivity and adherence to web accessibility standards'}/>

</div>
    </div>
  )
}

export default Gridcomp