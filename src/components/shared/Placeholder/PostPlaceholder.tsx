import { CommentBox, HeartEmpty, SavePost, ShareBtn } from '@/store/icons/Icons'
import React from 'react'
import DropDown from '../PostCard/Card1/DropDown'

function PostPlaceholder() {
  return (
    <div className={`w-full h-fit shadow rounded p-3 home_news_feed_card`}>
        <div className="flex justify-between items-center space-x-5">
            <div className="flex items-center space-x-2">
              <div className="skeleton w-9 h-9 rounded-full shrink-0"></div>
              <div className="font-semibold flex flex-col  justify-center">
                <div className="skeleton h-5 w-32 mb-1"></div>
                <div className="skeleton h-4 w-24 mb-1"></div>
              </div>
            </div>
        </div>
        <div className="flex flex-col">
          <div className="py-2">
            <div className="skeleton h-4 w-full mb-3"></div>
            <div className="skeleton h-4 w-full mb-3"></div>
            <div className="skeleton h-4 w-full mb-3"></div>
            <div className="skeleton h-4 w-1/2 mb-3"></div>
          </div>
          <div className="my-1">
          <div className="skeleton w-full h-96"></div>
          </div>
        </div>
      </div>
  )
}

export default PostPlaceholder