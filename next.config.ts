import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Lets the dev server be opened via 127.0.0.1 and on a phone over the local network.
  allowedDevOrigins: ["127.0.0.1", "192.168.*.*"],
};

export default nextConfig;
