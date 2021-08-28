import React from 'react'

const ErrorMessage = ({ error, setError }) => {
  const styles = {
    container:
      'sm:w-5/6 lg:w-3/6 absolute top-0 w-full bg-red-600 text-white py-2 px-4 rounded-b-xl select-none flex justify-between',
    textContainer: 'flex items-center justify-center gap-1',
    icon: 'material-icons-round',
    textDescription: 'capitalize font-bold',
    closeButton:
      'hover:bg-red-700 dark:hover:bg-red-500 cursor-pointer flex justify-center items-center rounded-full p-1'
  }

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <span className={styles.icon}>error</span>
        <span className={styles.textDescription}>Error:</span>{' '}
        <span>{error}</span>
      </div>

      <button onClick={() => setError('')} className={styles.closeButton}>
        <span className={styles.icon}>close</span>
      </button>
    </div>
  )
}

export default ErrorMessage
