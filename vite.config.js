const dotenv = require("dotenv");
const path = require("path");
// vite.config.js # or vite.config.ts
dotenv.config({ path: path.join(__dirname, ".env") });
// console.log(222, path.resolve(__dirname, "./src"));
console.log(process.env.PORT);
console.log(process.env.VITE_SOME_KEY);
const env = process.env;
const config = {
  // 引入第三方的配置
  optimizeDeps: {
    include: ["axios"],
  },
  alias: {
    // 键必须以斜线开始和结束, 直接使用@/会被解析成引用modules
    "/@/": path.resolve(__dirname, "./src"),
    // '/@components/': path.resolve(__dirname, './src/components')
  },
  // port: 8089,
  proxy: {
    // 如果是 /lsbdb 打头，则访问地址如下
    "/lsbdb": "http://10.192.195.96:8087",
    // 如果是 /lsbdb 打头，则访问地址如下
    // '/lsbdb': {
    //   target: 'http://10.192.195.96:8087/',
    //   changeOrigin: true,
    //   // rewrite: path => path.replace(/^\/lsbdb/, '')
    // }
  },
  env: {a:1},
};

module.exports = config;
