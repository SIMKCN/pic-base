<template>
    <div>
        <div class="grid grid-cols-1 bg-[#2E3A59] rounded-xl shadow-lg px-2 py-2">
            <h1 class="text-lg text-[#CEEDDB] text-center pb-5">
                Start sorting your pictures
            </h1>
            <div class="flex justify-between mx-4">
                <p class="text-[#CEEDDB]">{{ images[currentpic].file.name }}</p>
                <p class="text-[#CEEDDB]">Picture: {{ currentpic }}</p>
            </div>

            <div class="flex justify-center items-center mt-5 mb-5">
                <img 
                    :src="images[currentpic].preview" 
                    :alt="images[currentpic].file.name" 
                    class="object-contain max-w-full max-h-[70vh] rounded-lg shadow"
                />
            </div>
            <div class="flex justify-between">
                <div class="grid grid-rows-1 grid-cols-2">
                    <basebutton @clicked="lastPicture" label="<-"></basebutton>
                    <basebutton @clicked="nextPicture" label="->"></basebutton>
                </div>
                <div class="grid grid-rows-1 grid-cols-2">
                    <input type="range" min="0" max="10" steps="1" v-model="rating" @change="saveRating">

                    <baselabel :label=rating class="ml-2 mt-4 text-lg"></baselabel>

                </div>

                <basebutton @clicked="doneSorting" label="Done"></basebutton>
                    
                
            </div>
        </div>
    </div>
</template>

<script>
import baselabel from "@/components/BaseLabel.vue"
import { useUploadStore } from "@/stores/uploads";
import basebutton from "@/components/BaseButton.vue"
import { useRatingStore } from "@/stores/rating";
export default {
    name: "sorting",
    components: {
        basebutton,
        baselabel
    },
    data() {
        return {
            currentpic: 1,
            rating: 0
        }
    },
    computed: {
        images() {
            const uploadStore = useUploadStore()
            return uploadStore.images
        }
    },
    methods: {
        saveRating() {
            const uploadStore = useUploadStore()
            const RatingStore = useRatingStore()
            RatingStore.pushRating(this.rating, uploadStore.images[this.currentpic].file.name)
            console.log(RatingStore.ratings)
        },
        nextPicture() {
            const uploadStore = useUploadStore()
            if (this.currentpic == uploadStore.getArrayLength) {
                this.currentpic = 0
            } else {
                this.currentpic += 1
            }
        },
        lastPicture() {
            const uploadStore = useUploadStore()
            if(this.currentpic == 0) {
                this.currentpic = uploadStore.getArrayLength - 1
            } else {
                this.currentpic -= 1
            }
            

        },
        doneSorting() {
            this.$emit("doneSorting")
        }
    }
}
</script>
