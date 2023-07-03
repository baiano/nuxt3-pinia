export const useStore = defineStore('indexStore', {
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount() {
            return this.count * 2
        },
        doubleCountPlusOne() {
            return this.doubleCount * 2 + 1
        },
    },
    actions: {
        increment() {
            this.count++
        },
    },
})