import {useEffect, useState} from "react"

const useLocalStorage = (key, defaultValue=null) => {
    const initialValue = localStorage.getItem(key) || defaultValue;
    const [item, setItem] = useState(initialValue)

    useEffect(function setKeyInLocalStorage() {
        if(item === null) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, item)
        }
    }, [key, item])

    return [item, setItem]
}


export default useLocalStorage

// function useLocalStorage(key, firstValue = null) {
//     const initialValue = localStorage.getItem(key) || firstValue;
  
//     const [item, setItem] = useState(initialValue);
  
//     useEffect(function setKeyInLocalStorage() {
//       console.debug("hooks useLocalStorage useEffect", "item=", item);
  
//       if (item === null) {
//         localStorage.removeItem(key);
//       } else {
//         localStorage.setItem(key, item);
//       }
//     }, [key, item]);
  
//     return [item, setItem];
//   }
  
//   export default useLocalStorage;