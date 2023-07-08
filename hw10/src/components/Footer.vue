<template>
    <footer>
      Posts count: {{ postsCount }} Users count: {{ usersCount }}
      <div>
        <a href="/">Codeforces</a> &copy; 2022 by Mike Mirzayanov
      </div>
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props: ["usersCount", "postsCount"]
}
</script>

<style scoped>

</style>