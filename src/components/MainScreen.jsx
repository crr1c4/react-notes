import React from 'react'

import NoteCreator from './NoteCreator'
import StartMenu from './StartMenu'
import NoteFocus from './NoteFocus'
import NoteEditor from './NoteEditor'

const MainScreen = ({
  theme,
  focus,
  changeFocus,
  setNotes,
  storedNotes,
  currentID,
  setCurrentID
}) => {
  const styles = {
    container: `sm:block sm:col-span-2 md:col-span-3 lg:col-span-2 lg:col-span-3 dark:bg-gray-900 col-span-full max-h-screen ${
      focus === 'create' || focus === 'note' || focus === 'edit' ? '' : 'hidden'
    }`
  }

  const noteCreatorProps = {
    changeFocus,
    setNotes,
    storedNotes
  }

  const noteFocusProps = {
    currentID,
    storedNotes,
    changeFocus,
    setCurrentID,
    setNotes
  }

  const noteEditorFocus = {
    currentID,
    storedNotes,
    changeFocus,
    // setCurrentID,
    setNotes
  }

  return (
    <div className={styles.container}>
      {focus === 'start' ? (
        <StartMenu theme={theme} />
      ) : focus === 'create' ? (
        <NoteCreator {...noteCreatorProps} />
      ) : focus === 'edit' ? (
        <NoteEditor {...noteEditorFocus} />
      ) : (
        <NoteFocus {...noteFocusProps} />
      )}
    </div>
  )
}

export default MainScreen
