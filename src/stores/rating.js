import { defineStore } from "pinia";

export const useRatingStore = defineStore("ratings", {
  state: () => ({
    ratings: [],
  }),
  actions: {

    pushRating(rating, filename) {
      this.ratings.push(rating, filename)

    }
  }
});
