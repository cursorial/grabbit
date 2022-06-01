import React from 'react'
import releaseResource from '@wasp/actions/releaseResource'
import deleteResource from '@wasp/actions/deleteResource'
import styles from '../styles/Resource.js'

const ClaimedResource = ({ id, name, reason, claimedBy }) => {
  return (
    <div style={styles.container}>
      <div style={styles.field}>
        <p>{name}</p>
      </div>
      <div style={styles.field}>
        <p>{reason}</p>
      </div>
      <div style={styles.field}>
        <p>{claimedBy}</p>
      </div>
      <div style={styles.field}>
        <button onClick={() => { releaseResource({ id })}}>release</button>
      </div>
      <div style={styles.field}>
        <button onClick={() => deleteResource({ id })}>delete</button>
      </div>
    </div>
  )
}

export default ClaimedResource
