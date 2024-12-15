<template>
  <div>
    <div 
      v-if="images.length" 
      class="grid grid-cols-2 gap-4 md:grid-cols-4 my-5 mx-5"
    >
      <div 
        v-for="(image, index) in images" 
        :key="index" 
        class="grid gap-4"
      >

        <div class="aspect-w-1 aspect-h-1 bg-gray-800 rounded-lg overflow-hidden">
          <img 
            :src="image.preview" 
            :alt="image.file.name" 
            class="w-full h-full object-cover transition-transform transform hover:scale-125"
          />
        </div>

        <div>
          <p class="text-white text-xs mt-2 truncate">{{ image.file.name }}</p>
        </div>
      </div>
    </div>
  </div>
  </template>

<script>
import { useUploadStore } from "@/stores/uploads";
export default {
    name: "viewer",
    computed: {
        images() {
        const uploadStore = useUploadStore()
        return uploadStore.images
        }
  },
}
</script>