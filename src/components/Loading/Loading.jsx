import Skeleton from '../../Skeleton/Skeleton';
import s from './Loading.module.css';

const Loading = () => {
  return (
    <>
      <div className={s.catalog}>
        <h2 className={s.desc}>Loading ...</h2>
        <div className={s.block}>
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </>
  );
};

export default Loading;
