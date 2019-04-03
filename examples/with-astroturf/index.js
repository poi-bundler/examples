import React from 'react'
import { render } from 'react-dom'
import { css, styled } from 'astroturf'

/** You can use the class names directly */
const styles = css`
  .title {
    color: red;
  }
`

/** Or create a higer-order React component instead */
const Button = styled('button')`
  border: none;
  background: tomato;
  padding: 5px 10px;
  width: 140px;
  color: white;
`

const App = () => {
  const [count, setCount] = React.useState(0)
  return (
    <>
      <h1 className={styles.title}>Hello Astroturf!</h1>
      <Button onClick={() => setCount(count + 1)}>{count}</Button>
    </>
  )
}

render(<App />, document.getElementById('app'))
