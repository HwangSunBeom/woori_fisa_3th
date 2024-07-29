import React from 'react'

const commentDetail = ({params}) => {
  return <div>게시글 번호 : {params.postId} & 댓글 번호 : {params.commentId}</div>;
}

export default commentDetail