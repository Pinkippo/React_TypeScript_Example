import React from 'react'
import { useQuery } from 'react-query';

// Post 응답 데이터 타입 정의
export interface PostResponse{
    userId: number;
    id: number;
    title: string;
    body: string;
}

// Post 리스트 응답 데이터 타입 정의
export type PostListResponse = PostResponse[];

export function usePostList() {
  const query = useQuery({
    queryKey: ['https://jsonplaceholder.typicode.com/posts'],
    queryFn: () => {
      return fetch('https://jsonplaceholder.typicode.com/posts').
        then(res => res.json());
    },
  });

  return query;
}

