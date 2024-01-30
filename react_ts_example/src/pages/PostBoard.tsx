import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { PostResponse, usePostList } from '../api/GetPost';

const PostBoard: React.FC = () => {

    // useQuery를 이용해 서버로부터 게시글 목록을 받아온다.
    const { data, isLoading } = usePostList();

    return (
        <div>
            <h1>게시판</h1>
            <p>게시판 페이지입니다.</p>
            <div>
                {isLoading ? (
                    <div>로딩중...</div>
                ) : (
                    <div>
                        {data?.map((post: PostResponse) => (
                            <div key={post.userId}>
                                <div>{post.title}</div>
                                <div>{post.body}</div>
                                <br />
                                <br />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}

export default PostBoard