<script>
import newsorting from "@/components/AppNewSorting.vue"
import basebutton from "./components/BaseButton.vue";
import appheader from "@/components/AppHeader.vue"
export default {
  name: "app",
  data() {
    return {
      new_sorting_session: false
    }
  },
  components: {
    newsorting,
    basebutton,
    appheader

  }
}

</script>
<template>
  <div>
    <appheader @changeSorting="new_sorting_session = !new_sorting_session"></appheader>
  </div>
  <div class="flex items-center justify-center h-screen">
    <newsorting v-if="new_sorting_session" @done="new_sorting_session = false"></newsorting>
    
  </div>


</template>