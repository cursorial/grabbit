export const getResources = async (args, context) => {
  return context.entities.Resource.findMany({})
}

