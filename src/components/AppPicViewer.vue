<template>
<div>
    <div v-if="images.length" class="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 grid-flow-row">
      <div 
        v-for="(image, index) in images" 
        :key="index" 
        class="relative group"
      >
        <img 
          :src="image.preview" 
          :alt="image.file.name" 
          
        />
        <div>
          <p class="text-white text-xs">{{ image.file.name }}</p>
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