export const useStore = defineStore('indexStore', {
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount(): number {
            return this.count * 2
        },
        doubleCountPlusOne(): number {
            return this.doubleCount * 2 + 1
        },
    },
    actions: {
        increment() {
            this.count++
        },
    },
    persist: {
        paths: ['count'],
    }
})