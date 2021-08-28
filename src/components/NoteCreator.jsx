import React, { useState } from 'react'
import { v4 as generateID } from 'uuid'

import ErrorMessage from './messages/ErrorMessage'
import CreatedMessage from './messages/CreatedMessage'

const NoteCreator = ({ changeFocus, setNotes, storedNotes }) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const clearInputs = () => {
    setTitle('')
    setDescription('')
  }

  const createNote = () => {
    try {
      const date = new Date()

      if (title === '' && description === '') throw 'Empty fields.'
      if (title === '') throw 'Empty Title.'
      if (description === '') throw 'Empty Description.'

      const newNote = {
        id: generateID(),
        title,
        description,
        day: date.toLocaleDateString(),
        time: date.toLocaleTimeString()
      }

      setNotes([...storedNotes, newNote])
      setSuccess('Note created')
      clearInputs()
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
      'sm:grid-rows-2 lg:grid-rows-none lg:grid-cols-2 lg:w-2/4 w-11/12 grid grid-rows-3 gap-3',
    blueButton:
      'hover:bg-blue-700 dark:bg-indigo-800 bg-blue-600 text-white uppercase font-semibold py-2 w-full rounded-xl dark:hover:bg-indigo-700 select-none',
    redButton:
      'sm:hidden dark:hover:bg-red-500 hover:bg-red-700 bg-red-600 text-white uppercase font-semibold py-2 w-full rounded-xl select-none',
    returnLink: 'sm:block underline cursor-pointer text-xs hidden'
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
      {success.length !== 0 ? <CreatedMessage {...createdMessageProps} /> : null}
      <div className={styles.titleContainer}>
        <span className={styles.titleIcon}>note_add</span>
        <span className={styles.titleText}>new note</span>
      </div>
      <div className={styles.inputTitleContainer}>
        <span className={styles.icon}>title</span>
        <input
          type='text'
          placeholder='Enter title here...'
          className={styles.inputTitle}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className={styles.textareaContainer}>
        <textarea
          placeholder='Enter description here...'
          className={styles.inputTextarea}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className={styles.controls}>
        <button className={styles.blueButton} onClick={clearInputs}>
          clear
        </button>

        <button className={styles.blueButton} onClick={createNote}>
          create
        </button>

        <button
          onClick={() => changeFocus('start')}
          className={styles.redButton}
        >
          cancel
        </button>
      </div>
      <div className={styles.returnLink} onClick={() => changeFocus('start')}>
        Return to start page
      </div>
    </div>
  )
}

export default NoteCreator
