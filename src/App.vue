<template>
  <div id="app">
    <HelloWorld />
    <User v-for="item in username" :key="item.id" v-bind:user="item" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import User from "./components/User";
// import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  mounted: function() {
    this.updateName("");
  },
  data() {
    return {
      users: []
    };
  },
  components: {
    HelloWorld,
    User
  },
  computed: {
    ...mapState(["username", "message"]),
    ...mapGetters(["welcomeMessage"])
  },
  methods: {
    ...mapActions(["updateUsername"]),
    updateName: function() {
      this.updateUsername(this.name);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
