export const updateState = (oldObject, newObject)=> {
    return {
        ...oldObject,
        ...newObject
    }
}
