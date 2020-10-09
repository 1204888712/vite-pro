<!--
 * @LastEditors: liguobiao
 * @LastEditTime: 2020-10-09 10:37:26
-->
<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      count: 0,
    };
  },
};
</script>
<style lang="less">
p {
  color: yellow;
  code {
    color: blue;
  }
}
</style>
