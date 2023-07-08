<template>
  <div>
    <IndexPost v-for="post in posts" :post="post" :users="users" :key="post.id" :commentsCount="commentsPerPost.get(parseInt(post.id))"/>
  </div>
</template>

<script>
import IndexPost from "./IndexPost";

export default {
    name: "Index",
    components: {
      IndexPost
    },
    props: ["posts", "commentsPerPost", "users"]
}
</script>

<style scoped>

</style>
