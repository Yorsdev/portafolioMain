const toggleDOM = document.getElementById('language-toggle')
const currentLang = window.location.href.includes('index-esp.html')
toggleDOM.checked = currentLang

function changeLanguage() {
  toggleDOM.addEventListener('change', () => {
    if (toggleDOM.checked) {
      window.location.href = 'index-esp.html'
    }else {
      window.location.href = 'index.html'
    }
  })
}

export default changeLanguage