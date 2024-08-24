import React from 'react'

const Blog = async () => {
  
  await new Promise((resolve) => {
    setTimeout(resolve, 1000)
  })
  
  return (
    <div>Blog</div>
  )
}

export default Blog