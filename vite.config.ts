import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/sassConfig.sass";`,
      },
    },
  },
  server: {
    port: 8081,
    host: "0.0.0.0",
    open: true,
    //https://github.com/http-party/node-http-proxy#options
    proxy: {
      "/api": {
        target: "https://some-domain.com", //代理服务器的地址
        changeOrigin: true, // 允许跨域请求
        rewrite: (path) => path.replace(/^\/api/, ""), // 重写路径，移除 '/api' 前缀
      },
    },
  },
});
