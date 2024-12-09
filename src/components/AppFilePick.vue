<template>
    <input type="file" multiple>
    <p>{{ file }}</p>
</template>

<script>
export default {
    name: "filepick",
    data() {
        return {
            file: null
        }
    }

}

</script>