import React from "react";
import "./Calc.css";

class Calc extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rate: "",
            currency: 0
        }
    }

    static getDerivedStateFromProps(props, state) {

        return { rate: props.rate }

    }

    mySubmit = (event) => {
        event.preventDefault();
        let countCurrency = event.target.elements["count-currency"].value;
        let typeCurrency = event.target.elements["type-currency"].value;
        this.setState({
            currency: (countCurrency / this.state.rate[typeCurrency]).toFixed(2)
        });
    }

    render() {
        return (
            <div className="calc">
                <h3> Калькулятор обмена</h3>
                <div className="block">
                    <div>
                        <form onSubmit={this.mySubmit}>
                            <input type="number" defaultValue="150" name="count-currency" />
                            <select name="type-currency" id="">
                                {Object.keys(this.state.rate).map(item => {

                                    return <option key={item}>{item}</option>

                                })}
                            </select>
                            <input type="submit" />
                        </form>
                    </div>
                    <div>
                        <h4>Результат</h4>
                        <div>Euro: {this.state.currency} </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Calc;