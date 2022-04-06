const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: 'http://localhost:3000',
    //disableHostCheck: true
  },
});

// module.exports = {
//   devServer: {
//     proxy: 'http://localhost:3000',
//     disableHostCheck: true
//   }
// }