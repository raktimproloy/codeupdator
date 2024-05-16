import React from 'react'
import CategoryPage from "@/components/pages/Category"

interface PropsData{
  params: {
      slug: string
  }
}

function page({params}:PropsData) {
  const slug = params.slug
  console.log(slug)
  return (
    <CategoryPage slug={slug}/>
  )
}

export default page