import { Metadata } from "next";
import style from "./messages.module.css";
import Room from "@/app/(afterLogin)/messages/_component/Room";

export const metadata: Metadata = {
  title: "쪽지 / Z",
  description: "쪽지",
};

export default function Home() {
  return (
    <main className={style.main}>
      <div className={style.header}>
        <h3>쪽지</h3>
      </div>
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
      <Room />
    </main>
  );
}
