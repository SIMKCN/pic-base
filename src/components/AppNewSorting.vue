<template>
    <div class="grid grid-cols-1 bg-[#2E3A59] rounded-xl shadow-lg px-2 py-2">
        <h1 class="text-lg text-[#CEEDDB] text-center pb-5">
          Start sorting by uploading your pictures!
        </h1>
        <filepick></filepick>
        <basebutton label="Done" @clicked="closeUploadWindow"></basebutton>
    </div>
  </template>
  
  <script>
  import filepick from "@/components/AppFilePick.vue";
  import basebutton from './BaseButton.vue';
  export default {
    name: "newsorting",
    components: {
      filepick,
      basebutton
    },
    methods: {
      closeUploadWindow() {
        this.$emit("done")
      }
    }
  };
  </script>
  