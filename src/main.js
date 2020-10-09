/*
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-10-09 15:51:08
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import Mock from 'mockjs'

var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|1-10': [{
        // 属性 id 是一个自增数，起始值为 1，每次增 1
        'id|+1': 1
    }]
})
// 输出结果
console.log(JSON.stringify(data, null, 4))
console.log(import.meta.env.VITE_SOME_KEY);
console.log('mian said', import.meta.env.PORT, process.env.PORT);
console.log(process.env.PORT);
console.log(process.env.VITE_SOME_KEY);
createApp(App).mount('#app')
