<template>
  <h1>エラーが発生しました。</h1>
</template>
<script>
export default {
  mounted() {
    // fetch({ redirect }) {
    //   redirect(302, process.env.ERROR_URL)
    // }
    document.location.href = process.env.ERROR_URL
  }
}
</script>
