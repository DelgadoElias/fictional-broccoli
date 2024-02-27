import React from 'react';

const Beneficio = ({ titulo, valor }) => {

    return(<div class="beneficio">
        <h3>
        {
            valor
        }
        </h3>
        <h4>
        {
            titulo
        }
        </h4>
    </div>)
};

export default Beneficio;