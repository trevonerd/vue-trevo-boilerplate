<template lang="pug">
.hello
  h1 {{ msg }}
  p
    | For guide and recipes on how to configure / customize this project,
    br
    |       check out the
    a(href='https://cli.vuejs.org', target='_blank') vue-cli documentation
    | .
  h3 Installed CLI Plugins
  ul
    li
      a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel', target='_blank') babel
    li
      a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa', target='_blank') pwa
    li
      a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint', target='_blank') eslint
    li
      a(href='https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest', target='_blank') unit-jest
  h3 Essential Links
  ul
    li
      a(href='https://vuejs.org', target='_blank') Core Docs
    li
      a(href='https://forum.vuejs.org', target='_blank') Forum
    li
      a(href='https://chat.vuejs.org', target='_blank') Community Chat
    li
      a(href='https://twitter.com/vuejs', target='_blank') Twitter
  h3 Ecosystem
  ul
    li
      a(href='https://router.vuejs.org', target='_blank') vue-router
    li
      a(href='https://vuex.vuejs.org', target='_blank') vuex
    li
      a(href='https://github.com/vuejs/vue-devtools#vue-devtools', target='_blank') vue-devtools
    li
      a(href='https://vue-loader.vuejs.org', target='_blank') vue-loader
    li
      a(href='https://github.com/vuejs/awesome-vue', target='_blank') awesome-vue

</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
