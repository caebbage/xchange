<template>
    <div class="page">
        <h2>Here's some questions<br />that others have.</h2>
        <h3>Perhaps you have a perspective to share?</h3>
        Click a topic to expand.
        <listing v-for="(e, i) in $cookies.get('itemCnt')" :key="'item' + i" :ref="'item' + i" :info="$cookies.get('item' + i)" :idnum="i"
        @click.native="openItem(i)" />
    </div>
</template>

<script>
import Listing from './Listing.vue'

export default {
  components: { Listing },
  name: 'TopicList',
  methods: {
      openItem(i) {
          let arr = new Array(this.$cookies.get('itemCnt')).fill(false);
          arr[i] = true;
          this.$cookies.set('itemOpen', arr)
      }
  }
}
</script>

<style>
</style>
