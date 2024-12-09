<script>
import newsorting from "@/components/AppNewSorting.vue"
export default {
  name: "app",
  data() {
    return {
      test: "hallo"
    }
  },
  components: {
    newsorting
  }
}

</script>
<template>
  <div>
    <newsorting></newsorting>
    
  </div>


</template>