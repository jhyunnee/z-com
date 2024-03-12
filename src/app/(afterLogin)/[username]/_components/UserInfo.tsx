"use client";
import style from "@/app/(afterLogin)/[username]/profile.module.css";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import { User } from "@/model/User";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../_lib/getUser";

type Props = {
  username: string;
};

export default function UserInfo({ username }: Props) {
  const {
    data: user,
    error,
    isLoading,
  } = useQuery<User, Object, User, [_1: string, _2: string]>({
    queryKey: ["users", username],
    queryFn: getUser,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  //   console.log("error");
  //   console.dir(error);

  if (error) {
    return (
      <>
        <div className={style.header}>
          <BackButton />
          <h3 style={{ color: "black" }} className={style.headerTitle}>
            프로필
          </h3>
        </div>
        <div className={style.userZone}>
          <div className={style.userImage}></div>
          <div className={style.userName}>
            <div style={{ color: "black" }}>{username}</div>
            <div style={{ color: "black" }}>@{username}</div>
          </div>
        </div>
        <div
          style={{
            height: 100,
            alignItems: "center",
            fontSize: 31,
            fontWeight: "bold",
            justifyContent: "center",
            display: "flex",
            color: "black",
          }}
        >
          계정이 존재하지 않음
        </div>
      </>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <>
      <div className={style.header}>
        <BackButton />
        <h3 style={{ color: "black" }} className={style.headerTitle}>
          {user.nickname}
        </h3>
      </div>
      <div className={style.userZone}>
        <div className={style.userImage}>
          <img src={user.image} alt={user.id} />
        </div>
        <div className={style.userName}>
          <div style={{ color: "black" }}>{user.nickname}</div>
          <div style={{ color: "black" }}>@{user.id}</div>
        </div>
        <button className={style.followButton}>팔로우</button>
      </div>
    </>
  );
}