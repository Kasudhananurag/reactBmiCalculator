
import React, { useState } from "react";

export default function Calc() {

    const [wght,setWght] = useState(0);
    const [hght,setHght] = useState(0);
    const [bmi,setBmi] = useState(0);
    const [stats,setStats] = useState("");
    const [calrt,setCalrt] = useState("");

    const weight = (e) =>
    {
        setWght(e.target.value);
    }

    const height = (e) =>
    {
        setHght(e.target.value);
    }
    
    const calcBMI = () =>
    {
        const h = Number(hght);
        const w = Number(wght);
        const b = Number(w/(h*h));
        setBmi(b);
        // alert(typeof bmi);  {/* alerts number */}

        console.log(bmi);

        if(b < 19) 
        {
            setStats("You are Underweight");
            setCalrt("danger");
        }
        else if(b >= 19 && b <= 25)
        {
            setStats("You are Healthy");
            setCalrt("primary");
        }
        else if(b > 25)
        {
            setStats("You are Overrweight");
            setCalrt("danger");
        }
        
    }

    return (
        <>
            <div className="col-5 m-auto text-light p-3 shadow rounded my-3" style={{ backgroundColor: '#27777D' }}>
                <div className="container text-center"><h1 >BMI Calcualtor</h1></div>
            </div>
            <div className="col-3 m-auto text-center text-white my-2 p-3 shadow rounded" style={{backgroundColor: 'teal'}}>
                <input type="number" onChange={weight} className="w-75 text-center rounded my-2 border border-0" placeholder="Your weight in Kg" /> 
                <input type="number" onChange={height} className="w-75 text-center rounded my-2 border border-0" placeholder="Your height in metres" max={7} />
                <button className="btn btn-white text-white" onClick={calcBMI} > <b>Calculate BMI</b> </button>
                <div className="container">
                    <p><b>Your BMI is {bmi} </b></p>
                    <p className={`bg-${calrt}`}> {stats} </p>
                </div>

            </div>
        </>
    );
}