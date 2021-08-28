import React from 'react'

const ThemeSwitch = ({ changeTheme, theme }) => {
  const styles = {
    container: 'dark:text-white select-none flex flex-row items-center gap-4',
    icon: 'material-icons-round',
    switchBackground:
      'dark:bg-indigo-800 h-6 w-12 cursor-pointer bg-blue-600 rounded-full',
    switchContainer: `h-6 w-6 flex justify-center items-center transform ${
      theme === 'dark' ? '' : 'translate-x-full'
    }`,
    switchCircle: 'w-8/12 h-4/6 bg-white rounded-full'
  }

  return (
    <div className={styles.container}>
      <span className={styles.icon}>dark_mode</span>

      <div className={styles.switchBackground} onClick={changeTheme}>
        <div className={styles.switchContainer}>
          <div className={styles.switchCircle} />
        </div>
      </div>

      <span className={styles.icon}>light_mode</span>
    </div>
  )
}

export default ThemeSwitch
