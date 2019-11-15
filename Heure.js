import React from 'react'

const Heure = (props) => {

    const convertir = (ms) => {

let s = Math.floor((ms/1000)%60);

let m = Math.floor((ms/1000/60)%60);

let h = Math.floor((ms/(1000*60*60))%24);

 return {h, m, s}
}


    return (
        <div className="times">
            <div className="time">
          <p> {String(convertir(props.ms).h).padStart(2, '0')  }:</p>
          <p className="heure"> Heure </p>
            </div>
            <div className="time">
          <p> {String(convertir(props.ms).m).padStart(2, '0')  }:</p>
          <p className="minute"> Minute </p>
            </div>
            <div className="time">
          <p> {String(convertir(props.ms).s).padStart(2, '0')  }</p>
          <p className="seconde"> Seconde </p>
            </div>
            
            
              
        </div>
    )
}

export default Heure
