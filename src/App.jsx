import s from './App.module.css';
import Catalog from './components/TitleCatalog/TitleCatalog';
import Loading from './components/Loading/Loading';
import { useAxios } from './hooks/useAxios';

const App = () => {
  const { data, dataDesc } = useAxios();

  if (data.length === 0) return <Loading />;
  if (data.length > 0) return <Catalog data={data} dataDesc={dataDesc} />;

  return <>{data}</>;
};

export default App;
