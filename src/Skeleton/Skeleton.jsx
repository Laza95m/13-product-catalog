import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
  <ContentLoader
    speed={1.2}
    width={200}
    height={262}
    viewBox="0 0 200 262"
    backgroundColor="#0055ff"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="209" rx="5" ry="5" width="200" height="21" />
    <rect x="0" y="239" rx="5" ry="5" width="200" height="21" />
    <rect x="0" y="0" rx="10" ry="10" width="200" height="200" />
  </ContentLoader>
)

export default Skeleton
