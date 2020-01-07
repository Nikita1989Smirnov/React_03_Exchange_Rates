import React from "react";
import "./Rate.css";
import Calc from "../Calc/Calc";

class Rate extends React.Component {

    constructor(props) {

        super(props);
        this.state = {
            date: "",
            currencyRate: ""
        }
        this.currencyMass = ["RUB", "CAD", "GBP"];
        this.getRate();


    }
    getRate() {

        fetch("https://api.exchangeratesapi.io/latest")
            .then(result => {

                return result.json();

            })
            .then(result => {

                let resultArr = {};
                for (let i = 0; i < this.currencyMass.length; i++) {

                    resultArr[this.currencyMass[i]] = result.rates[this.currencyMass[i]];

                }
                this.setState({
                    date: result.date,
                    currencyRate: resultArr
                });

            })

    }
    render() {
        return (
            <div className="rate">
                <h3> Курс валют на {this.state.date}</h3>
                <div className="flex-container">
                    {Object.keys(this.state.currencyRate).map(item => {

                        return <div key={item} className="block flex-item">
                            <div className="currency-name">{item}</div>
                            <div className="currency-in">{this.state.currencyRate[item].toFixed(2)} *</div>
                            <p>* за 1 Euro</p>
                        </div>

                    })}
                </div>
                <Calc rate={this.state.currencyRate} />
            </div>
        );
    }
}

export default Rate;