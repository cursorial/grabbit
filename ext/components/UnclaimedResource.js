import React from 'react'
import claimResource from '@wasp/actions/claimResource'
import styles from '../styles/Resource.js'

const UnclaimedResource = ({ id, name, }) => {
  const [reason, setReason] = React.useState('')
  const [claimedBy, setClaimedBy] = React.useState('')

  const handleReasonChange = (e) => {
    setReason(e.target.value)
  }

  const handleClaimedByChange = (e) => {
    setClaimedBy(e.target.value)
  }

  const handleClaim = () => {
    claimResource({ id, reason, claimedBy })
  }

  return (
    <div style={styles.container}>
      <div style={styles.field}>
        <p>{name}</p>
      </div>
      <div style={styles.field}>
        <input placeholder='reason' onChange={handleReasonChange} value={reason}></input>
      </div>
      <div style={styles.field}>
        <input placeholder='claimed by' onChange={handleClaimedByChange} value={claimedBy}></input>
      </div>
      <div style={styles.field}>
        <button onClick={handleClaim}>claim</button>
      </div>
    </div>
  )
}

export default UnclaimedResource
