<template>
  <article>
    <div class="title">{{ post.title }}</div>
    <div class="information">By {{ users[post.userId].login }}</div>
    <div class="body">{{ post.text }}</div>
    <ul class="attachment">
      <li>Announcement of <a href="#">Codeforces Round #510 (Div. 1)</a></li>
      <li>Announcement of <a href="#">Codeforces Round #510 (Div. 2)</a></li>
    </ul>
    <div class="footer">
      <div class="left">
        <img src="@/assets/img/voteup.png" title="Vote Up" alt="Vote Up"/>
        <span class="positive-score">+173</span>
        <img src="@/assets/img/votedown.png" title="Vote Down" alt="Vote Down"/>
      </div>
      <div class="right">
        <img src="@/assets/img/date_16x16.png" title="Publish Time" alt="Publish Time"/>
        22.12.22
        <img src="@/assets/img/comments_16x16.png" title="Comments" alt="Comments"/>
        <a href="#" class="comments">{{ commentsCount }}</a>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "IndexPost",
  props: ["post", "users", "commentsCount"],
}
</script>

<style scoped>
  .comments {
    margin-left: 0.3rem;
  }
</style>