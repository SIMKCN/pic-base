<script>
import newsorting from "@/components/AppNewSorting.vue"
import basebutton from "./components/BaseButton.vue";
export default {
  name: "app",
  data() {
    return {
      new_sorting_session: false
    }
  },
  components: {
    newsorting,
    basebutton

  }
}

</script>
<template>
  <div class="flex items-center justify-center h-screen">
    <newsorting v-if="new_sorting_session"></newsorting>
    <basebutton v-if="new_sorting_session == false" @clicked="new_sorting_session = !new_sorting_session"></basebutton>
  </div>


</template>