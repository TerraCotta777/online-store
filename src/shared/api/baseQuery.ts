import { fetchBaseQuery } from "@reduxjs/toolkit/dist/query"
// import store from "store"

export const customFetchQuery = () => {
    return fetchBaseQuery({
        baseUrl: import.meta.env.VITE_APP_BASE_URL,
        prepareHeaders: (headers) => {
            headers.set('Authorization', `Bearer ${store.getState()?.user?.access}`)
            return headers
        }
    })
}
