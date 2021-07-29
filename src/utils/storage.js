export const getStorage = (key) => {
    try {
        let value = localStorage.getItem(key);
        return value?JSON.parse(value):{}
        // if (value) {
        //     return JSON.parse(value)
        // }else{
        //     return {}
        // }
    } catch (error) {
        console.log("getError", error);
        return {}
    }
}

export const setStorage = (key,data={})=>{
    localStorage.setItem(key, JSON.stringify(data));
}