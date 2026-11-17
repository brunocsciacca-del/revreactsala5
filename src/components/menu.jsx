import s from './menu.module.css'

export const Menu = () => {
    return(
        <nav className={s.menu}>
           <a href="">Home</a>
           <a href="/charts">Gráficos</a>
           <a href="">Produtos</a>
           <a href="">Contato</a>
        </nav> 
    )
}

