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
            source: "/project",
            destination: "/pages/project/project",
          },

          {
            source: "/step1",
            destination: "/pages/step1/step1",
          },

          {
            source: "/step2",
            destination: "/pages/step2/step2",
          },

          {
            source: "/step3",
            destination: "/pages/step3/step3",
          },

          {
            source: "/dropdown",
            destination: "/pages/dropdown/dropdown",
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