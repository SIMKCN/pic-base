<template>
    <div class="grid grid-rows-1 grid-cols-2 bg-[#355166] w-screen">
        <p class="text-lg text-[#CEEDDB] mx-2 my-2 px-2 py-2">Pic Base</p>
        <div class="flex justify-self-end mr-5">
            <basebutton label="Start Sorting" @clicked="startSorting"></basebutton>
            <basebutton label="Add Pictures" @clicked="changeSorting"></basebutton>
        </div>

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
      },
    startSorting() {
        this.$emit("startSorting")
    }
    
    }
    
}
</script>