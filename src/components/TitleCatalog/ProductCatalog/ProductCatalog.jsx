import s from './ProductCatalog.module.css';

const ProductCatalog = ({ data, elDesc }) => {
  return (
    <>
      {data
        .filter((el) => el.desc === elDesc)
        .map((product) => (
          <div key={product._id} className={s.container}>
            <img
              className={s.img}
              loading="lazy"
              src={product.image}
              alt={product.name}
            />
            <h4>{product.name}</h4>
            <p>price: {product.price} sum</p>
          </div>
        ))}
    </>
  );
};

export default ProductCatalog;
