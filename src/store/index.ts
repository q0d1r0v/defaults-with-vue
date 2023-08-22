// imports
import {defineStore} from 'pinia'

// export index store
export const useIndexStore = defineStore('index-store', {
    state: () => ({
        store_title: 'Index store'
    })
})