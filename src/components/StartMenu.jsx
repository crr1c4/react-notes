import React from 'react'

import LightImage1 from '../assets/light_image1.svg'
import DarkImage1 from '../assets/dark_image1.svg'
import LightImage2 from '../assets/light_image2.svg'
import DarkImage2 from '../assets/dark_image2.svg'
import LightImage3 from '../assets/light_image3.svg'
import DarkImage3 from '../assets/dark_image3.svg'

const StartMenu = ({ theme }) => {
  const styles = {
    container:
      'lg:grid-cols-2 dark:text-white h-full grid grid-rows-3 gap-3 p-2 select-none max-h-full',
    instructionContainer:
      'hover:bg-gray-100 dark:hover:bg-gray-800 flex flex-col justify-center items-center gap-3 rounded-xl',
    instructionTitle: 'font-serif uppercase text-2xl md:text-4xl font-semibold',
    instructionDescription: 'md:text-md text-sm',
    imageContainer: 'lg:flex hidden justify-center items-center',
    img: 'w-2/4',
    link: 'underline inline'
  }

  return (
    <div className={styles.container}>
      <div className={styles.instructionContainer}>
        <div className={styles.instructionTitle}>how works?</div>
        <div className={styles.instructionDescription}>
          Create, read, edit and delete notes...
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={theme === 'dark' ? DarkImage1 : LightImage1}
          alt='Instruction Image'
          className={styles.img}
        />
      </div>

      <div className={styles.imageContainer}>
        <img
          src={theme === 'dark' ? DarkImage2 : LightImage2}
          alt='Storage Image'
          className={styles.img}
        />
      </div>

      <div className={styles.instructionContainer}>
        <div className={styles.instructionTitle}>local storage</div>
        <div className={styles.instructionDescription}>
          This app use localStorage API for save your notes
        </div>
      </div>

      <div className={styles.instructionContainer}>
        <div className={styles.instructionTitle}>about</div>
        <div className={styles.instructionDescription}>
          Made by cr1c4 using{' '}
          <a className={styles.link} href='https://es.reactjs.org/'>
            react.js
          </a>{' '}
          and{' '}
          <a className={styles.link} href='https://tailwindcss.com/'>
            tailwindcss
          </a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <img
          src={theme === 'dark' ? DarkImage3 : LightImage3}
          alt='React Image'
          className={styles.img}
        />
      </div>
    </div>
  )
}

export default StartMenu
