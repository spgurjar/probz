/** @type {import('next').NextConfig} */
const nextConfig = {

    async rewrites() {
        return [
          {
            source: "/",
            destination: "/pages/home/home",
          },

          {
            source: "/signUp",
            destination: "/pages/signUp/signUp",
          },

          {
            source: "/working",
            destination: "/pages/working/working",
          },

          {
            source: "/static/media/:path*",
            destination: "/static/media/:path*",
          },

        ];
      },

      webpack(config, options) {
        config.module.rules.push({
            test: /\.(png|jpg|gif|mp4|svg)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/media',
                        name: '[name].[ext]',
                    },
                },
            ],
        });

        return config;
    },

    devServer: {
      host: '0.0.0.0',
  },
}
   
module.exports = nextConfig;