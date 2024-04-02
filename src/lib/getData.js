export const getData =  async () => {
    const res = await fetch('https://example-data.draftbit.com/books')
    const data = await res.json()
    return data;
}  
