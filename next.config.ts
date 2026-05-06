import type { NextConfig } from "next"
import type { Configuration } from "webpack"

const nextConfig: NextConfig = {
  webpack(config: Configuration) {
    config.module?.rules?.push(
      {
        test: /\.svg$/i,
        use: ["@svgr/webpack"]
      },
      {
        test: /\.md$/,
        loader: "raw-loader"
      }
    )

    return config
  }
}

export default nextConfig
