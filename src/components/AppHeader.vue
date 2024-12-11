<template>
    <div class="grid grid-rows-1 grid-cols-2 bg-[#355166] w-screen">
        <p class="text-lg text-[#CEEDDB] mx-2 my-2 px-2 py-2">Pic Base</p>
        <basebutton label="Add Pictures" class="flex justify-self-end mr-5" @clicked="changeSorting"></basebutton>
    </div>

</template>
<script>
import basebutton from "@/components/BaseButton.vue"
export default {
    name: "appheader",
    components: {
        basebutton
    },
    methods: {      
        
    changeSorting() {
        this.$emit("changeSorting")
      }
    
    }
    
}
</script>