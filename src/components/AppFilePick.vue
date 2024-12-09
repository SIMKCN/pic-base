<template>

        <div 
        class="border-2 border-dashed bg-[#455561] border-gray-300 rounded-lg p-6 text-center cursor-pointer transition hover:border-blue-500 mx-2 my-2 h-48"
        @dragover.prevent="onDragOver"
        @drop.prevent="onDrop"
        @dragleave="onDragLeave"
        :class="{ 'border-blue-500 bg-blue-50': isDragging }"
        @click="triggerFileInput"
        >
        <p v-if="!files.length" class="text-[#CEEDDB] mt-14 ">Drag & drop files here, or click to upload</p>
        <ul v-if="files.length" class="mt-4 text-left">
            <li 
            v-for="(file, index) in files" 
            :key="index" 
            class="text-sm text-gray-700 mt-2 flex justify-between items-center"
            >
            {{ file.name }} 
            <span class="text-gray-500 text-xs">
                ({{ (file.size / 1024).toFixed(2) }} KB)
            </span>
            </li>
        </ul>
        <input 
            type="file" 
            ref="fileInput" 
            @change="onFileSelect" 
            multiple 
            class="hidden"
        />
        </div>

  </template>
  
  <script>
  export default {
    name: "filepick",
    data() {
      return {
        files: [],
        isDragging: false
      };
    },
    methods: {
      onDragOver(event) {
        this.isDragging = true;
      },
      onDragLeave(event) {
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
        const filesArray = Array.from(fileList);
        this.files.push(...filesArray);
      },
      triggerFileInput() {
        this.$refs.fileInput.click();
      }
    }
  };
  </script>
  
  <style>
  /* Keine zusätzlichen Stile nötig, alles wird durch Tailwind abgedeckt */
  </style>
  