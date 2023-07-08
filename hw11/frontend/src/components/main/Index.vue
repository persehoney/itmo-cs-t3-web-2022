<template>
  <div>
    <IndexPost v-for="post in posts" :post="post" :user="author(post.user)" :key="post.id"/>
  </div>
</template>

<script>
import IndexPost from "./IndexPost";
export default {
  name: "Index",
  components: {
    IndexPost
  },
  props: ["posts", "users"],
  methods: {
    author(user) {
      const authors = Object.values(this.users).filter(u => u.id === user.id);
      return authors[0];
    }
  }
}
</script>

<style scoped>

</style>