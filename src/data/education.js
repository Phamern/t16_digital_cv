import { writable } from 'svelte/store'

// export let educations = writable({
//   "interaction": {
//     'id': 1,
//     'year': 'Aug 2018 - Jun 2020',
//     'school': 'Fagskolen Kristiania',
//   },
//   "graphic": {
//     'id': 2,
//     'year': 'Aug 2015 - Jun 2017',
//     'school': 'Fagskolen Kristiania',
//   }
// })


export const educations = writable({
    id: 1,
    year: 'Aug 2018 - Jun 2020',
    school: 'Fagskolen Kristiania, Norway'
})

