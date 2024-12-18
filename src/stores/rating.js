import { defineStore } from "pinia";

export const useRatingStore = defineStore("ratings", {
  state: () => ({
    ratings: {},
  }),
});
