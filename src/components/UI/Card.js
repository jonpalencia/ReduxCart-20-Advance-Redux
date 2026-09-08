import classes from './Card.module.css';

function Card({ className, children }) {
  return (
    <section className={`${classes.card} ${className ? className : ''}`}>
      {children}
    </section>
  );
}

export default Card;
