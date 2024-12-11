<template>
    <div>
        <button class="text-[#CEEDDB] bg-[#455561] rounded-lg px-2 py-2 text-lg mx-2 my-2" @click="$emit('clicked')">{{ label }}</button>
    </div>
</template>
<script>
export default {
    name: "basebutton",
    props: ['label']

}

</script>