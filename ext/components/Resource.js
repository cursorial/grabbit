import React from 'react'
import NewResource from './NewResource.js'
import ClaimedResource from './ClaimedResource.js'
import UnclaimedResource from './UnclaimedResource.js'

const Resource = ({ id, name, reason, claimedBy, newResource }) => {
  if (newResource) return <NewResource />
  if (claimedBy === '') return <UnclaimedResource id={id} name={name} />
  return <ClaimedResource id={id} name={name} reason={reason} claimedBy={claimedBy} />
}

export default Resource
