import React from 'react'

const footerLinks = [
    {
        title: "Quick Links",
        sublinks: [
            {
                url: '/',
                text: 'Join Our Team'
            },
            {
                url: '/',
                text: 'Our Locations'
            },
            {
                url: '/',
                text: 'About Us'
            },
            {
                url: '/',
                text: 'Contact Us'
            },
        ]
    },
    {
        title: "Menu",
        sublinks: [
            {
                url: '/',
                text: 'Auto Insurance'
            },
            {
                url: '/',
                text: 'Home Insurance'
            },
            {
                url: '/',
                text: 'Bundle Insurance'
            },
            {
                url: '/',
                text: 'Business Insurance'
            },
            {
                url: '/',
                text: 'Life & Financial'
            },
        ]
    },
    {
        title: "Resources",
        sublinks: [
            {
                url: '/',
                text: 'Blog'
            },
            {
                url: '/',
                text: 'Get A Quote'
            },
            {
                url: '/',
                text: 'Claim'
            },
            {
                url: '/',
                text: 'Policy Payments'
            },
            {
                url: '/',
                text: 'Regulation'
            },
            {
                url: '/',
                text: 'How we Conduct'
            },
            {
                url: '/',
                text: 'Business?'
            },
            {
                url: '/',
                text: 'Term of Use'
            },
            {
                url: '/',
                text: 'Privacy Policy'
            },
        ]
    },
]

const Footer = () => {
  return (
    <div className='bg-[#f7f7f7] px-6 pt-[30px] pb-[60px] w-full grid grid-cols-4'>
        <img src="/logo-footer.png" alt="" className='-translate-y-6' />
        {
            footerLinks.map((flinks, ind) => (
                <div key={ind} className="w-full px-6 border-l border-gray-500 flex flex-col gap-2">
                    <h4 className='text-lg font-extrabold'>{flinks.title}</h4>
                    <div className="flex flex-col gap-2">
                        {
                            flinks.sublinks.map((links) => (
                                <a href={links.url}>
                                    <p className='font-medium hover:text-[#4db2ec]'>
                                        {links.text}
                                    </p>
                                </a>
                            ))
                        }
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default Footer