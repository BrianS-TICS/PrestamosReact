import React, { Fragment } from 'react'

const Resultado = ({total, plazo,cantidad}) => {
    return (
        <Fragment>
            <div className='u-full-width resultado'>
                <h2>Resumen:</h2>
                <p>Cantidad solicitada es: ${cantidad}</p>
                <p>Plazo establecido a {plazo} meses</p>
                <p>Su pago mensual es de ${(total/plazo).toFixed(2)}</p>
                <p>Total a pagar: ${total}</p>
            </div>
        </Fragment>
    );
}

export default Resultado;