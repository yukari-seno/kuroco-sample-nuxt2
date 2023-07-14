<template>
  <h1>エラーが発生しました。</h1>
</template>
<script>
export default {
  mounted() {
    window.onload = () => {
      document.location.href = process.env.ERROR_URL
    }
  }
}
</script>
