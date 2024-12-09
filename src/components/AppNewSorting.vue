<template>
    <div class="">
      <div class="bg-[#2E3A59] h-72 rounded-xl shadow-lg px-2 py-2">
        <h1 class="text-lg text-[#CEEDDB] text-center pb-5">
          Start sorting by uploading your pictures!
        </h1>
        <filepick></filepick>
      </div>
    </div>
  </template>
  
  <script>
  import filepick from "@/components/AppFilePick.vue";
  
  export default {
    name: "newsorting",
    components: {
      filepick,
    },
  };
  </script>
  