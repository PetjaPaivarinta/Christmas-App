const { getCurrentWindow } = require('@electron/remote')

document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.getElementById('closeBtn')
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      const window = getCurrentWindow()
      window.close()
    })
  } else {
    console.error('Button with ID "closeBtn" not found.')
  }
})