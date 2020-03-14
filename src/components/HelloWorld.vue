<template>
  <div class="hello">
    <h1>{{ username }}</h1>
    <h1>{{ welcomeMessage }}</h1>
    <h1>{{ username }}</h1>
    <input v-model="name" type="text" />
    <button @click="updateName"> Update Name</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  computed: {
    ...mapState([
      'username',
      'message'
    ]),
    ...mapGetters([
      'welcomeMessage'
    ]),
  },
  data () {
    return {
      name: 'Oğuzhan ATASEVER'
    }
  },
  methods: {
    ...mapActions([
      'updateUsername'
    ]),
    updateName: function() {
      this.updateUsername(this.name)
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
