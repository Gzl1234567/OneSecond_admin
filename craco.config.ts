import path from "path";


module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: "http://192.168.121.66:8090/",
        pathRewrite: { "^/api": "" },
      },
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    module: {
      rules: [
        {
          test: /\.svg$/,
          use: [
            {
              loader: "@svgr/webpack",
              options: {
                icon: true,
              },
            },
            {
              loader: "file-loader",
              options: {
                name: "[name].[hash].[ext]",
                outputPath: "assets/svg",
              },
            },
          ],
        },
      ],
    },
    plugins: {
      add: [
        /* ... */
      ],
      remove: [
        /* ... */
      ],
    },
  },
};
