<template>
  <div id="app">
    <login v-if="!$cookies.get('LoggedIn')" />
    <template v-else>
      <navbar />
      <div id="content">
        <router-view />
      </div>
      <modal name="report" :adaptive="true" :width="'85%'" :max-width="420" :height="'auto'">
        <div class="modal">
          <h3>You are reporting the topic</h3>
          <h2>"{{ reporting ? reporting.title  : ''}}"</h2>
          <h4>Can we ask why?</h4>

          <report-deets />
          
        <button @click="sendReport()">Report</button> or <button @click="doneReport()">Close</button>
        </div>
    </modal>
    </template>
  </div>
</template>
<script>
import login from "@/views/Login.vue"
import navbar from "@/components/NavBar.vue"
import data from "@/assets/topics.json"
import ReportDeets from '@/components/reportDeets.vue';

export default {
  name: "App",
  components: {
    login,
    navbar,
    ReportDeets
  },
  created() {
    this.$cookies.set('itemCnt', data.topics.length)
    data.topics.forEach((item, i) => {
      this.$cookies.set("item" + i, item)
    })
    this.$cookies.set("itemOpen", new Array(data.topics.length).fill(false))
  },
  computed: {
    reporting () {
      return this.$cookies.isKey("reporting") ? this.$cookies.get("item" + this.$cookies.get('reporting')) : null
    }
  },
  methods: {
    doneReport() {
      this.$modal.hide('report')
      this.$cookies.remove("reporting")
    },
    sendReport() {
      this.$cookies.set(
        'item' + this.$cookies.get('reporting'),
        Object.assign({reported: true}, this.reporting)
      )
      this.doneReport()
    }
  }
};
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,400;0,700;1,400&family=Readex+Pro:wght@700&display=swap');

html,
body {
  background: #333;
  margin: 0;
}



#app {
  font: 12pt/150% 'Nunito', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1f2e3d;
  max-width: 450px;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  height: 100vh;
  overflow: auto;
  background: #fff;
  margin: 0 auto;
}

h1, h2 {color: #14c4fa;}
h4 {color: #76899b;}
h1, h2, h3 {font-family: 'Readex Pro', sans-serif;}
h1, h2, h3, h4, h5, h6 {margin: 0.5em 0;}

#content {
  padding: 3em 1em 1em;
}

.modal {
  padding: 2em;
}
</style>
