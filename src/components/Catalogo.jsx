import styles from './Catalogo.module.css'
import superGirl from '../assets/superGirl.jpg';
import moana from '../assets/moana.png';
import { Products } from './Products'

export function Catalogo () {
    return (
        <div className={styles.catalogo}>
            <Products 
                img={superGirl}
                descricao="Super Girl"
            />
            <Products 
                img={moana}
                descricao="Moana"/>
            <Products 
                img={superGirl}
                descricao="Super Girl"
            />
            <Products 
                img={moana}
                descricao="Moana"/>
            <Products 
                img={superGirl}
                descricao="Super Girl"
            />
            <Products 
                img={moana}
                descricao="Moana"/>
            <Products 
                img={superGirl}
                descricao="Super Girl"
            />
            <Products 
                img={moana}
                descricao="Moana"/>

            
        </div>
                   
    )
}