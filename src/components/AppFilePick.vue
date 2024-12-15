<template>
  <div 
    class="border-2 border-dashed bg-[#455561] border-gray-300 rounded-lg p-6 text-center cursor-pointer transition hover:border-blue-500 mx-2 my-2 h-48"
    @dragover.prevent="onDragOver"
    @drop.prevent="onDrop"
    @dragleave="onDragLeave"
    :class="{ 'border-blue-500 bg-blue-50': isDragging }"
    @click="triggerFileInput"
  >
    <p v-if="!files.length" class="text-[#CEEDDB] mt-14">Drag & drop files here, or click to upload</p>
    <ul v-if="files.length" class="mt-4 text-left max-h-[120px] overflow-hidden">
      <li 
        v-for="(file, index) in files" 
        :key="index" 
        class="text-sm text-[#B4CDED] mt-2 flex justify-between items-center "
      >
        {{ file.name }} 
        <span class="text-[#B4CDED] text-xs">
          ({{ (file.size / 1024).toFixed(2) }} KB)
        </span>
      </li>
    </ul>
    <input 
      type="file" 
      ref="fileInput" 
      @change="onFileSelect" 
      multiple 
      accept="image/*"
      class="hidden"
    />
  </div>
</template>



<script>
import { useUploadStore } from '@/stores/uploads';

export default {
  name: "filepick",
  data() {
    return {
      files: [], // lokale Dateien (optional)
      isDragging: false,
    };
  },
  methods: {
    onDragOver() {
      this.isDragging = true;
    },
    onDragLeave() {
      this.isDragging = false;
    },
    onDrop(event) {
      this.isDragging = false;
      if (event.dataTransfer && event.dataTransfer.files) {
        this.handleFiles(event.dataTransfer.files);
      }
    },
    onFileSelect(event) {
      if (event.target.files) {
        this.handleFiles(event.target.files);
      }
    },
    handleFiles(fileList) {
      const filesArray = Array.from(fileList).filter((file) =>
        file.type.startsWith("image/")
      );

      // Dateien in den Pinia-Store speichern
      const fileStore = useUploadStore();
      filesArray.forEach((file) => {
        const preview = URL.createObjectURL(file); // Vorschau-URL
        fileStore.addFile({ file, preview }); // Datei und Vorschau speichern
      });

      // Optional: Lokale Dateien für die Komponente speichern
      this.files.push(...filesArray);
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
  },
};
</script>
