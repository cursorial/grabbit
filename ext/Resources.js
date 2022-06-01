import React from 'react'
import Resource from './components/Resource.js'
import { useQuery } from '@wasp/queries'
import getResources from '@wasp/queries/getResources'

const Resources = () => {
  const { data: resources, isFetching, error } = useQuery(getResources)
  if (error) return <div>Error... {error}</div>
  if (isFetching) return <div>Loading...</div>
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>grabbit</h1>
      <div style={styles.container}>
        {resources.map(resource => (
          <Resource
            key={resource.id}
            id={resource.id}
            name={resource.name}
            reason={resource.reason}
            claimedBy={resource.claimedBy}
          />
        ))}
        <Resource
          key='new-resource'
          newResource
        />
      </div>
    </div>
  )
}

const styles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  container: {
    maxWidth: '1200px',
    display: 'flex',
    flexWrap: 'wrap',
    margin: '0 auto'
  },
  title: {
    textAlign: 'center'
  }
}

export default Resources
