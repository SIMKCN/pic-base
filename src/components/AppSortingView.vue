<template>
    <div>
        <div class="grid grid-cols-1 bg-[#2E3A59] rounded-xl shadow-lg px-2 py-2">
            <h1 class="text-lg text-[#CEEDDB] text-center pb-5">
                Start sorting your pictures
            </h1>
            <div class="flex justify-center items-center">
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

                <basebutton @clicked="doneSorting" label="Done"></basebutton>
            </div>
        </div>
    </div>
</template>

<script>
import { useUploadStore } from "@/stores/uploads";
import basebutton from "@/components/BaseButton.vue"
export default {
    name: "sorting",
    components: {
        basebutton
    },
    data() {
        return {
            currentpic: 0
        }
    },
    computed: {
        images() {
            const uploadStore = useUploadStore()
            return uploadStore.images
        }
    },
    methods: {
        checkLength() {
            const uploadStore = useUploadStore()
            if (this.currentpic == uploadStore.getArrayLength) {
                return false
            } else {
                return true
            }
        },
        nextPicture() {
            if (this.checkLength() == true) {
                this.currentpic += 1
            } else {
                this.currentpic = 0
            }
        },
        lastPicture() {
            if(this.checkLength() == true) {
                this.currentpic -= 1
            } else {
                
            }
            

        },
        doneSorting() {
            this.$emit("doneSorting")
        }
    }
}
</script>
