import createImageUrlBuilder from '@sanity/image-url'

import { dataset, projectId } from './env'

const builder = createImageUrlBuilder({ projectId, dataset })

export function image(source) {
  return builder.image(source).auto('format')
}
