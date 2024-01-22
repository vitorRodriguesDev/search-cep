import useSWR from "swr";

export function UseFetch<Data = any, Error = any>(url: string) {
    const { data , error } = useSWR<Data , Error>(url, async url => {
        const response = await fetch(url)
        const data = response.json()
        return data
    }, {

    })

    return {data, error}
}