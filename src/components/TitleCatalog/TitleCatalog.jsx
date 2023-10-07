import ProductCatalog from './ProductCatalog/ProductCatalog';
import s from './TitleCatalog.module.css';

const TitleCatalog = ({ data, dataDesc }) => {
  return (
    <>
      {dataDesc.map((elDesc, i) => (
        <div key={i} className={s.catalog}>
          <h2 className={s.desc}>{elDesc}</h2>
          <div className={s.block}>
            <ProductCatalog data={data} elDesc={elDesc} />
          </div>
        </div>
      ))}
    </>
  );
};

export default TitleCatalog;
