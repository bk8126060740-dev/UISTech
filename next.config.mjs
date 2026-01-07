// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: false,

//   env: {
//     DB_HOST: process.env.DB_HOST,
//     DB_USER: process.env.DB_USER,
//     DB_PASSWORD: process.env.DB_PASSWORD,
//     DB_NAME: process.env.DB_NAME,
//     DB_PORT: process.env.DB_PORT,
//   },

//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
//       type: "asset/resource",
//     });

//     return config;
//   },
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  turbopack: {}, // ✅ ADD THIS LINE (MOST IMPORTANT)

  env: {
    DB_HOST: process.env.DB_HOST,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_NAME: process.env.DB_NAME,
    DB_PORT: process.env.DB_PORT,
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)$/i,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
