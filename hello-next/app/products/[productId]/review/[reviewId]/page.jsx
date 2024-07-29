import { notFound } from 'next/navigation'
import React from 'react'
import NotFound from './not-found'

const ReviewDetail = ({params}) => {
    if (parseInt(params.reviewId) > 100) {
        notFound(NotFound)
    }
  return (
    <div>
        리뷰 번호 : {params.reviewId}`
    </div>
  )
}

export default ReviewDetail