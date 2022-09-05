const toggle = document.querySelector('.toggle__theme')
const card = document.querySelector('.app')
toggle.addEventListener('click', () => {
  let theme = toggle.querySelector('.fas')
  if (theme.classList.contains('fa-moon')) {
    theme.classList.remove('fa-moon')
    theme.classList.add('fa-sun')
    card.classList.add('dark')
  } else {
    theme.classList.remove('fa-sun')
    theme.classList.add('fa-moon')
    card.classList.remove('dark')
  }
})

//Chống copy
function killCopy(e) {
  return false
}

function reEnable() {
  return true
}

document.onselectstart = new Function('return false')

if (window.sidebar) {
  document.onmousedown = killCopy
  document.onclick = reEnable
}

function noteOut() {
  var note = document.querySelector('.note')
  note.style.display = 'none'
}

setInterval(noteOut, 3000)

//Chống chuột phải
window.onload = function () {
  document.addEventListener(
    'contextmenu',
    function (e) {
      e.preventDefault()
    },
    false,
  )
  document.addEventListener(
    'keydown',
    function (e) {
      //document.onkeydown = function(e) {
      // "I" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        disabledEvent(e)
      }
      // "J" key
      if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
        disabledEvent(e)
      }
      // "S" key + macOS
      if (e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
        disabledEvent(e)
      }
      // "U" key
      if (e.ctrlKey && e.keyCode == 85) {
        disabledEvent(e)
      }
      // "F12" key
      if (event.keyCode == 123) {
        disabledEvent(e)
      }
    },
    false,
  )

  function disabledEvent(e) {
    if (e.stopPropagation) {
      e.stopPropagation()
    } else if (window.event) {
      window.event.cancelBubble = true
    }
    e.preventDefault()
    return false
  }
}

//Chống Ctrl + U
document.onkeydown = function (e) {
  if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {
    return false
  } else {
    return true
  }
}
$(document).keypress('u', function (e) {
  if (e.ctrlKey) return false
  else return true
})

// toast thông tin
// toast function
function toast({ title = '', message = '', type = '', duration = '' }) {
  const main = document.getElementById('toast')
  if (main) {
    const toast = document.createElement('div')

    // auto remove toast
    const autoRemoveId = setTimeout(function () {
      main.removeChild(toast)
    }, duration + 1000)

    // click remove toast
    toast.onclick = function (e) {
      if (e.target.closest('.toast__close')) {
        main.removeChild(toast)
        clearTimeout(autoRemoveId)
      }
    }

    const icons = {
      success: 'fa-solid fa-circle-check',
      info: 'fa-solid fa-circle-info',
      warning: 'fa-solid fa-circle-exclamation',
      error: 'fa-solid fa-circle-exclamation',
    }

    const icon = icons[type]
    const delay = (duration / 1000).toFixed(2)

    toast.classList.add('toast', `toast--${type}`)
    toast.style.animation = `slideInLeft ease 0.5s, fadeOut linear 1s ${delay}s forwards`

    toast.innerHTML = `
                <div class="toast__icon">
                  <i class="${icon}"></i>
                </div>
                <div class="toast__body">
                  <h3 class="toast__title">${title}</h3>
                  <p class="toast__msg">${message}</p>
                </div>
                <div class="toast__close">
                  <i class="fas fa-xmark"></i>
                </div>
          `
    main.appendChild(toast)
  }
}

function showSuccessToast() {
  toast({
    title: 'enjoy today',
    message: 'đây là website info của tiên!',
    type: 'success',
    duration: 5000,
  })
}
