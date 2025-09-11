import type { NextConfig } from "next"

const nextConfig: NextConfig = {
    webpack(config: NextConfig) {
        config.module.rules.push({
            test: /\.svg$/i,
            use: ["@svgr/webpack"]
        })

        return config
    }
}

export default nextConfig
