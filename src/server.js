const express = require("express");
const app = express();
const path = require("path");
const App = require('./entry-server')

const vueServerRender = require('vue-server-renderer').createRenderer({
    template: require('fs').readFileSync(path.join(__dirname, './index.html'), 'utf-8')
  })

app.get("*", async (request, response)=>{
    const { url } = request;
    const context = {url};
    const vm = await App(context);
    vueServerRender.renderToString(vm).then(html => {
        response.end(html);
    }).catch(console.log)
})

app.listen(3001,()=>{
    console.log("listern at 3001");
})