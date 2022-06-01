export const createResource = async (args, context) => {
  return context.entities.Resource.create({
    data: {
      name: args.name,
      reason: '',
      claimedBy: '',
    }
  })
}

export const deleteResource = async (args, context) => {
  return context.entities.Resource.delete({
    where: {
      id: args.id
    }
  })
}

export const claimResource = async (args, context) => {
  return context.entities.Resource.update({
    where: {
      id: args.id
    },
    data: {
      reason: args.reason || '',
      claimedBy: args.claimedBy
    }
  })
}

export const releaseResource = async (args, context) => {
  return context.entities.Resource.update({
    where: {
      id: args.id
    },
    data: {
      claimedBy: '',
      reason: ''
    }
  })
}

