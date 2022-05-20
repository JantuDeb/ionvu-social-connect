import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchFeed, selectFeed } from "../../features/post/post-slice";
import { Post } from "../post/Post";
// import { Stories } from "../stories/Stories";
import styles from "./Feed.module.css";
import { PostForm } from "../forms/PostForm";
import { Loader } from "../loader/Loader";
export const Feed = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFeed());
  }, [dispatch]);

  const { feeds, feedFetchStatus } = useSelector(selectFeed);
  return feedFetchStatus === "loading" ? (
    <Loader />
  ) : (
    <section className={styles.container}>
      {/* <Stories /> */}
      <PostForm />
      <div className={styles.feed}>
        {feeds.map((post) => {
          return <Post key={post._id} post={post} />;
        })}
      </div>
    </section>
  );
};
