/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    reactStrictMode:true,
    images: {
        domains: [
            'dcvsju577z9ue.cloudfront.net',
            'd2sjmgdw2mf86p.cloudfront.net',
            'bd-media-community-stg.s3.ap-southeast-1.amazonaws.com',
            '103.232.123.57',
            'graph.facebook.com',
            'lh4.googleusercontent.com',
            'bidu.com.vn',
            's240-ava-talk.zadn.vn',
            'commerce.bidu.com.vn',
            "lh3.googleusercontent.com"
          ],
        //   remotePatterns: [
        //     'https://dcvsju577z9ue.cloudfront.net/*',
        //     'https://d2sjmgdw2mf86p.cloudfront.net/*',
        //     'https://bd-media-community-stg.s3.ap-southeast-1.amazonaws.com/*',
        //     'https://103.232.123.57/*',
        //     'https://graph.facebook.com/*',
        //     'https://lh4.googleusercontent.com/*',
        //     'https://bidu.com.vn/*',
        //     'https://s240-ava-talk.zadn.vn/*',
        //     'https://commerce.bidu.com.vn/*',
        //   ],
      },

    env:{
        BASE_URL: process.env.NEXT_PUBLIC_BASE_API_URL
    },
    

}

module.exports = nextConfig
