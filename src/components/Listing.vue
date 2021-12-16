<template>
    <div :class="['listing', $cookies.get('itemOpen').split(',').map(x => x === 'true')[idnum] ? 'open' : 'closed']">
        <h4>{{ info.title }}</h4>
        <p>{{ info.desc }}</p>
        <center>
            <button>Chat</button>
            <a @click="report(idnum)" class="pull-right fa-stack">
                <i class="fas fa-flag fa-stack-1x"></i>
                <i v-if="info.reported" class="fas fa-check fa-stack-1x" data-fa-transform="shrink-4 right-6 down-6" color="red"></i>
            </a>
        </center>
    </div>
</template>

<script>
export default {
  name: 'Listing',
  props: ['info', 'idnum'],
  methods: {
      report(i) {
          this.$cookies.set('reporting', i)
          this.$modal.show("report")
      }
  }
}
</script>

<style>
.listing {
    background: #adecff;
    padding: 1em;
    border-radius: 0.5em;
    margin-bottom: 1em;
}

.listing h4 {margin: 0; color: #376696;}

.listing p {
    background: #e2f8ff;
    color: #5788b8;
    padding: 0.5em;
    border-radius: .25em;
}

.listing.closed {
    max-height: 1.5em;
    overflow: hidden;
}

.listing a {
    margin: 0.5em 0 0.5em -2em;

    color: #5dc8e9;
    cursor: pointer;
    transition: color 0.2s;
}

.listing a:hover {
    color: #f00;
}

.listing a .fa-check {
    color: #f00;
}
</style>
