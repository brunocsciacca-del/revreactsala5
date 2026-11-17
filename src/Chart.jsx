import { useState } from 'react'
import s from'./Chart.module.css'
import {Menu} from './components/menu'

function Chart() {
  
    const [show, setShow] = useState("")

    return (
    <>
    <Menu />
    <div className={s.wrapChart}>  
        <div className={s.wrapBtns}>
            <button className={s.btnChart} onClick={() => setShow("barra")}>Gráfico Barra</button>
            <button className={s.btnChart} onClick={() => setShow("pizza")}>Gráfico Pizza</button>
            <button className={s.btnChart} onClick={() => setShow("linha")}>Gráfico Linha</button>
        </div>

        {show === "barra" && <h1>Barra</h1>}
        {show === "pizza" && <h1>Pizza</h1>}
        {show === "linha" && <h1>Linha</h1>}
    </div>
    </>
     
  )
}

export default Chart