<template>
  <div class="tab-container">
      <div>1</div>
      <div>2</div>
      <div>3</div>
  </div>
</template>
<script>
export default {
  name: 'Tab'
}
</script>

<style lang="scss" scoped>
    .tab-container {
        width: 100%;
        height: 50px;
        background:fuchsia;
        display: flex;
        position: fixed;
        bottom: 0;
        z-index: 9999;
        div {
            flex: 1;
        }
    }
</style>

