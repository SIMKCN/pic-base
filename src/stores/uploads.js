import { defineStore } from "pinia";

export const useUploadStore = defineStore("uploads", {
  state: () => ({
    images: [], // Enthält Objekte mit { file, preview }
  }),
  actions: {
    addFile(fileObj) {
      this.images.push(fileObj); // Datei und Vorschau hinzufügen
    },
    changeRating(currentpic, rating) {
      this.images[currentpic].preview = rating
      console.log(this.images[currentpic])
    },
    clearFiles() {
      this.images.forEach((image) => URL.revokeObjectURL(image.preview)); // Vorschau-URLs freigeben
      this.images = [];
    },

  },
  getters: {
    getArrayLength() {
      return this.images.length 
    }
  }
});
