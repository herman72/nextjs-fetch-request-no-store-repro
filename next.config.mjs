/** @type {import("next").NextConfig} */
const nextConfig = {
  cacheComponents: true,
  // The error appears only with partial prefetching, which the next major turns on for every app.
  partialPrefetching: true,
};

export default nextConfig;
