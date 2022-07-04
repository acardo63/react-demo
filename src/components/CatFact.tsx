import { useState } from "react";
import Cat from "../interfaces/Cat";

function CatFact() {

    const [loading, setLoading] = useState(false);

    const [catFact, setFact] = useState<Cat>(
                                    {
                                        fact:'Only facts about cats',
                                        length: 0
                                    });

    const otroDato = () => {
        setLoading(true);
        fetch('https://catfact.ninja/fact')
        .then(r => r.json())
        .then(r => {
            setFact(r);
            setLoading(false);
        })
        .catch(e => console.log(e));
    }

    return(
        <div className="uk-card uk-card-default uk-card-body uk-width-1-2@m">
            <h3 className="uk-card-title">Did you know?</h3>
            {loading ? 
                <img src="./img/loading.gif" alt="Loading..." style={{width: '30%'}}/>
            :
                <p style={{padding: '1em'}}>{catFact.fact}</p>
            }
            <p>Text length is {catFact.length}</p>
            <button className="uk-button uk-button-danger" onClick={otroDato}>More facts</button>
        </div>
    )
};

export default CatFact;