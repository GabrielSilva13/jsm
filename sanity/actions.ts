import { buildQuery } from './utils'
import { groq } from 'next-sanity'
import { readClient } from './lib/client'

interface GetResourcesParams {
  query: string
  category: string
  page: string
}

export const getResourcesPlaylist = async () => {
  try {
    const resources =
      await readClient.fetch(groq`*[_type == "resourcePlaylist"]{
        title,
        _id,
        resources[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }
    `)

    return resources
  } catch (err) {
    console.log(err)
    return err
  }
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params

  try {
    const resources = await readClient.fetch(groq`
      ${buildQuery({
        type: 'resource',
        query,
        category,
        page: parseInt(page),
      })}{
        title,
        _id,
        downloadLink,
        "image": poster.asset->url,
        views,
        slug,
        category
      }
    `)

    return resources
  } catch (err) {
    console.log(err)
    return err
  }
}
