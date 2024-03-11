"use client";

import { useQuery } from "@tanstack/react-query";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import { getPostRecommends } from "../_lib/getPostRecommends";
// async function getPostRecommends() {
//   const res = await fetch(`http://localhost:9090/api/postRecommends`, {
//     next: {
//       tags: ["posts", "recommends"],
//     },
//     // cache: "no-store", // cache 안할때 넣어줌
//   });

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

export default function PostRecommends() {
  const { data } = useQuery<IPost[]>({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    staleTime: 60 * 1000, // fresh -> stale 시간 (1분)
    gcTime: 300 * 1000, // 기본 5분, inactive 를 봐야함
  });

  // console.log("Data", data);

  return data?.map((post) => (
    // console.log("post", post);
    <Post key={post.postId} post={post} />
  ));
}
