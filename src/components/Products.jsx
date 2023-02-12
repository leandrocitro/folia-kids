import superGirl from '../assets/superGirl.jpg';
import styles from './Products.module.css'

export function Products(props) {
    return(
        <div className={styles.products}>
            <img src={props.img}/>
            <strong>{props.descricao}</strong>

        </div>
        
    )
}