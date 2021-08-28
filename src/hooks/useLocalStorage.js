import { useState } from 'react'

/**
 * @author midudev
 */
export const useLocalStorage = (key, initialValue) => {
  const [currentID, setCurrentID] = useState('')
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (err) {
      console.error(err)
    }
  })

  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.error(err)
    }
  }

  return [storedValue, setValue, currentID, setCurrentID]
}
