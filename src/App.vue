<script>
import newsorting from "@/components/AppNewSorting.vue"
import basebutton from "./components/BaseButton.vue";
import appheader from "@/components/AppHeader.vue"
import viewer from "@/components/AppPicViewer.vue"
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
    appheader,
    viewer

  }
}

</script>
<template>
  <div>

    <appheader @changeSorting="new_sorting_session = !new_sorting_session"></appheader>
    

    <div 
      v-if="new_sorting_session" 
      class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
    >
      <newsorting @done="new_sorting_session = false"></newsorting>
    </div>
  
    <div class="relative">
      <viewer></viewer>
    </div>
  </div>
</template>
