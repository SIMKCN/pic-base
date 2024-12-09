<template>
    <div class="bg-[#3A435E] mt-5 w-96 h-72 rounded-xl">
        <h1 class="text-center pt-2 text-lg text-[#CEEDDB] mb-10">Start sorting by uploading your pictures!</h1>
        <filepick></filepick>
    </div>

</template>
<script>
import filepick from "@/components/AppFilePick.vue"
export default {
    name: "newsorting",
    components: {
        filepick
    }
}

</script>