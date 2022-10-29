import Styles from './styles.module.scss'
import React, { useEffect, useState } from 'react';

import {useFetch} from 'hooks/useFetch'
import {getCompromise} from 'services/getCompromise'

const CompromiseInfo = () => {
  const [compromise, setCompromise] = useState({})

  useEffect(() => {
    getCompromise().then(res => {
      console.log(res)
      setCompromise(res)
    })
  }, [])

  return (
    <div className={Styles.CompromiseInfo}>

      <div className={Styles.title}>
        <h3>Compromiso: {compromise.Año} <span>🚧</span></h3>
      </div>

      <div className='body'>

        <div className='techs'>
          <h4>Técnicos responsables:</h4>
          {/* {compromise['Técnicos'].map(tec => (<p>{tec}</p>) )} */}
        </div>

        <div className='data'>
          <p>Fiscalias a realizar mantenimientos: <span>{compromise['No. Fiscalias']}</span></p>
          <p>Equipos de Computo a realizar mantenimientos: <span>99000</span></p>
        </div>

      </div>

    </div>
  );
}

export default React.memo(CompromiseInfo);