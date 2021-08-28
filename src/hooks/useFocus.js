import { useState } from 'react'

export const useFocus = () => {
  const [focus, setFocus] = useState('start')

  const changeFocus = (newFocus) => {
    try {
      if (!newFocus) throw 'Literal expected.'
      if (
        newFocus === 'start' ||
        newFocus === 'create' ||
        newFocus === 'note' ||
        newFocus === 'edit'
      ) {
        setFocus(newFocus)
      } else {
        throw 'Invalid literal.'
      }
    } catch (err) {
      console.error(err)
    }
  }

  return [focus, changeFocus]
}
