// const observer = require('../helper/observer');
const observer = new IntersectionObserver(
  (entries) => {
    if (entries[0].intersectionRatio >= 0.25) {
      document.querySelector('.navbar').classList.add('is-floating')
      document.querySelector('.navbar').classList.remove('not-floating')
    } else {
      document.querySelector('.navbar').classList.remove('is-floating')
      document.querySelector('.navbar').classList.add('not-floating')
    }
  },
  {
    threshold: 0.25
  }
)

module.exports = {
  mounted() {
    document.querySelector('.navbar').classList.remove('not-floating')
    document.querySelector('.navbar').classList.remove('is-floating')
    document.querySelector(
      'div.info-wrapper > div.personal-info-wrapper > div > div:nth-child(1) > h6'
    ).innerText = 'articals'
    document.querySelector(
      'div.info-wrapper > div.personal-info-wrapper > div > div:nth-child(2) > h6'
    ).innerText = 'tags'
    document.querySelector('h4:nth-child(2)').innerText = 'categories'
    document.querySelector('h4:nth-child(5)').innerText = 'tags'
  },
  updated() {
    observer.observe(document.querySelector('.abstract-wrapper'))
  }
}
