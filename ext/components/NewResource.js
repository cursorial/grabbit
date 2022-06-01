import React from 'react'
import createResource from '@wasp/actions/createResource'
import styles from '../styles/Resource.js'

const NewResource = () => {
  const [name, setName] = React.useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
  }

  const handleCreate = () => {
    createResource({ name })
  }

  return (
    <div style={styles.container}>
      <div style={styles.field}>
        <input placeholder='resource name' onChange={handleNameChange} value={name}></input>
      </div>
      <div style={styles.field}>
        <button onClick={handleCreate}>create</button>
      </div>
    </div>
  )
}

export default NewResource
