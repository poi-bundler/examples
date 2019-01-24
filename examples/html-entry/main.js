import styles from './style.module.css'

export default () => {
  const el = document.createElement('div')
  el.className = styles.title
  el.textContent = 'Hello Poi!'

  document.body.appendChild(el)
}
