import { DUMMY_DATA } from '../../utils/config';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

function Products() {
  const productItems = DUMMY_DATA.map(item => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
      totalPrice={item.totalPrice}
      quantity={item.quantity}
    />
  ));

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{productItems}</ul>
    </section>
  );
}

export default Products;
