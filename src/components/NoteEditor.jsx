import React, { useState } from 'react'

import ErrorMessage from './messages/ErrorMessage'
import CreatedMessage from './messages/CreatedMessage'

const NoteEditor = ({ currentID, storedNotes, changeFocus, setNotes }) => {
  const { title, description, id, day, time } = storedNotes.filter(
    (note) => note.id === currentID
  )[0]

  const [editedTitle, setEditedTitle] = useState(title)
  const [editedDescription, setEditedDescription] = useState(description)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const cancelAndReturn = () => {
    changeFocus('note')
  }

  const updateNote = () => {
    try {
      if (editedTitle === '' && editedDescription === '') throw 'Empty fields.'
      if (editedTitle === '') throw 'Empty Title.'
      if (editedDescription === '') throw 'Empty Description.'

      setSuccess('Note edited.')

      const newNote = {
        id,
        title: editedTitle,
        description: editedDescription,
        day,
        time
      }

      const notes = storedNotes.filter((note) => note.id !== id)
      setNotes([...notes, newNote])
    } catch (err) {
      setError(err)
    }
  }

  const styles = {
    container:
      'dark:text-white relative text-black min-h-full flex flex-col justify-center items-center select-none gap-5',
    icon: 'material-icons-round',
    titleContainer: 'flex justify-center items-center text-4xl lg:text-6xl',
    titleIcon: 'lg:text-6xl material-icons-round text-4xl',
    titleText: 'uppercase font-bold',
    inputTitleContainer:
      'dark:bg-gray-800 lg:w-2/4 rounded-xl bg-gray-100 p-2 w-11/12 flex flex-row items-center',
    inputTitle: 'outline-none bg-transparent w-full',
    textareaContainer:
      'dark:bg-gray-800 lg:w-2/4 rounded-xl bg-gray-100 p-2 h-60 w-11/12 flex flex-row items-center',
    inputTextarea:
      'resize-none w-full h-full outline-none border-0 bg-transparent',
    controls:
      'sm:grid-rows-2 md:grid-rows-none md:grid-cols-2 lg:w-2/4 w-11/12 grid grid-rows-3 gap-3',
    blueButton:
      'hover:bg-blue-700 dark:bg-indigo-800 bg-blue-600 text-white uppercase font-semibold py-2 w-full rounded-xl dark:hover:bg-indigo-700 select-none',
    redButton:
      'dark:hover:bg-red-500 hover:bg-red-700 bg-red-600 text-white uppercase font-semibold py-2 w-full rounded-xl select-none'
  }

  const errorMessageProps = {
    error,
    setError
  }

  const createdMessageProps = {
    setSuccess,
    success
  }

  return (
    <div className={styles.container}>
      {error.length !== 0 ? <ErrorMessage {...errorMessageProps} /> : null}
      {success.length !== 0 ? (
        <CreatedMessage {...createdMessageProps} />
      ) : null}

      <div className={styles.titleContainer}>
        <span className={styles.titleIcon}>edit</span>
        <span className={styles.titleText}>edit note</span>
      </div>
      <div className={styles.inputTitleContainer}>
        <span className={styles.icon}>title</span>
        <input
          type='text'
          placeholder='Enter title here...'
          className={styles.inputTitle}
          value={editedTitle}
          onChange={(e) => setEditedTitle(e.target.value)}
        />
      </div>
      <div className={styles.textareaContainer}>
        <textarea
          placeholder='Enter description here...'
          className={styles.inputTextarea}
          value={editedDescription}
          onChange={(e) => setEditedDescription(e.target.value)}
        />
      </div>
      <div className={styles.controls}>
        <button onClick={updateNote} className={styles.blueButton}>
          update
        </button>

        <button onClick={cancelAndReturn} className={styles.redButton}>
          cancel
        </button>
      </div>
    </div>
  )
}

export default NoteEditor
