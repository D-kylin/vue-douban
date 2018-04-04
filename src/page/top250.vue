<template>
  <my-toplist :top250datas="top250list"/>
</template>
<script>
import { mapState } from 'vuex'
import MyToplist from 'src/components/TopListDetial'
export default {
  data() {
      return {}
  },
  components: {
      MyToplist
  },
  computed: mapState({
      top250list: state => state.top250List
  }),
  mounted: function() {
      
  }
}
</script>
