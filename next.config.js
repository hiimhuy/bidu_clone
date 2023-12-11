/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images: {
        domains: ['dcvsju577z9ue.cloudfront.net','d2sjmgdw2mf86p.cloudfront.net'],
       
      },
    env:{
        BASE_URL: process.env.NEXT_PUBLIC_BASE_API_URL
    }
}

module.exports = nextConfig
