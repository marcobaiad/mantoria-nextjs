import styles from './stylesPreCode.module.css'
const PreCode = ({
  element,
  direction = 'row',
  value,
  attributes,
  closingTag = true,
  stylesPre = {},
  comment,
}) => {
  return (
    <pre className={styles.preContainer} style={{ ...stylesPre }}>
      <code className={styles.codeContainer} style={{ flexFlow: direction }}>
        {element && (
          <span>
            &lt;{element}
            {attributes && ' ' + attributes}&gt;
          </span>
        )}
        {comment && (
          <div style={{ display: 'block' }}>{`<!-- ${comment} -->`}</div>
        )}
        {value}
        {closingTag && element && <span>&lt;/{element}&gt;</span>}
      </code>
    </pre>
  )
}

export default PreCode
