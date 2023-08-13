import { useContext, useEffect, useState } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
function HeaderCartButton(props) {
    const [btnIsHigh, setButtonIsHigh] = useState(false);
    const cartCtx = useContext(CartContext);
    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => { return curNumber + item.amount }, 0)
    const buttonClasses = `${classes.button} ${btnIsHigh ? classes.bump : ''}`;
    const { items } = cartCtx;
    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setButtonIsHigh(true);
        const timer = setTimeout(() => {
            setButtonIsHigh(false);
        }, 300);
        return ()=> {
            clearTimeout(timer);
        }
    }, [items]);
    return <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
};
export default HeaderCartButton;