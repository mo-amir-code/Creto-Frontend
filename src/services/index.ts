
export const replaceString = (str:string, item:string, replaceItem:string) => {
    return str.replace(item, replaceItem);
}

export const firstLetterCap = (str:string) => {
    return str.charAt(0).toUpperCase() + str.slice(1, str.length)
}