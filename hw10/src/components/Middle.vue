<template>
    <div class="middle">
        <Sidebar :posts="viewPosts"/>
        <main>
            <Index v-if="page === 'Index'" :posts="viewAllPosts" :users="users" :commentsPerPost="commentsPerPost"/>
            <Enter v-if="page === 'Enter'"/>
            <Register v-if="page === 'Register'"/>
            <WritePost v-if="page === 'WritePost'"/>
            <EditPost v-if="page === 'EditPost'"/>
            <Users v-if="page === 'Users'" :users="viewUsers"/>
        </main>
    </div>
</template>

<script>
import Sidebar from "./sidebar/Sidebar";
import Index from "./page/Index";
import Enter from "./page/Enter";
import WritePost from "./page/WritePost";
import EditPost from "./page/EditPost";
import Users from "./page/Users";
import Register from "./page/Register";

export default {
    name: "Middle",
    data: function () {
        return {
            page: "Index"
        }
    },
    components: {
      Register,
        Users,
        WritePost,
        Enter,
        Index,
        Sidebar,
        EditPost
    },
    props: ["posts", "users", "comments"],
    computed: {
        viewPosts: function () {
            return Object.values(this.posts).sort((a, b) => b.id - a.id).slice(0, 2);
        },
        viewAllPosts: function () {
          return Object.values(this.posts).sort((a, b) => b.id - a.id)
        },
        viewUsers: function () {
          return Object.values(this.users).sort((a, b) => b.id - a.id);
        },
        commentsPerPost: function () {
          const commentsPerPosts = new Map();
          for (const post of Object.values(this.posts)) {
            let postComments = Object.values(this.comments).filter(c => parseInt(c.postId) === parseInt(post.id));
            commentsPerPosts.set(parseInt(post.id), postComments.length);
          }

          return commentsPerPosts;
        }
    }, beforeCreate() {
        this.$root.$on("onChangePage", (page) => this.page = page)
    }
}
</script>

<style scoped>

</style>
