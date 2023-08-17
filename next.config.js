/** @type {import('next').NextConfig} */
const nextConfig = {
    // experimental:{
    //     serverActions : true,
    // },
    env:{
        NEXTAUTH_SECRET : 'helloworld',
        GOOGLE_CLIENT_ID : "88696146329-2u6u2es658u0fo0ud1hgp8t4os8kh6r5.apps.googleusercontent.com",
        GOOGLE_CLIENT_SECRET : "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"  
    }
}

module.exports = nextConfig

