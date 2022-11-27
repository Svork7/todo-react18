import styles from './Button.module.css'

function Button({ onClick, children, title, disabled = false }) {
  return (
    <Button
      className={styles.button}
      onClick={onClick}
      title={title}
      disabled={disabled}
    >
      {children}
    </Button>
  )
}

export default Button
