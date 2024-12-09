<script>
import filepick from "@/components/AppFilePick.vue"
export default {
  name: "app",
  data() {
    return {
      test: "hallo"
    }
  },
  components: {
    filepick
  }
}

</script>
<template>
  <div>
    <filepick></filepick>
    
  </div>


</template>