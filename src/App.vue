<!--
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-10-09 15:19:11
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <p>{{ name }}</p>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { name } from "/@/a.js";


export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      name,
    };
  },
  created() {
    console.log(process.env, process.env.MODE, process.env.a);
    console.log(process.env.PORT);
    console.log(import.meta.env.VITE_SOME_KEY);
  },
};
</script>
