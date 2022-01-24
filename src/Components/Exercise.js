import React, {Component} from 'react';
import {Col, Form, FormGroup, Input, Label, Table} from "reactstrap";

class Exercise extends Component {
    constructor(props) {
        super(props);
        this.state = {
            oneRepMax: 0,
            sets: []
        }
        this.sets = [
            {percentage: 0.75, reps: "5"},
            {percentage: 0.85, reps: "3"},
            {percentage: 0.95, reps: "1+"},
            {percentage: 0.9, reps: "3"},
            {percentage: 0.85, reps: "3"},
            {percentage: 0.8, reps: "3"},
            {percentage: 0.75, reps: "5"},
            {percentage: 0.7, reps: "5"},
            {percentage: 0.65, reps: "5+"}
        ]

        this.handleChange = this.handleChange.bind(this);
        this.calculateWorkout = this.calculateWorkout.bind(this);
    }

    calculateWeight(percentage) {

        var weight = percentage * this.state.oneRepMax
        weight = Math.round(weight/5)*5
        let plate_weight = (weight - 45)  // olympic bar weight
        const weights = [
            45,
            25,
            10,
            5
        ]
        if (localStorage.getItem("enableMiniPlates") === 'true') {
            weights.push(2.5)
        }
        let plates = []
        while (plate_weight > 0) {
            var foundOne = false;
            for (var i = 0; i < weights.length; i++) {
                var amount = weights[i] * 2;
                if (amount <= plate_weight) {
                    plate_weight -= amount;
                    plates.push(weights[i]);
                    foundOne = true;
                    break;
                }
            }
            if (!foundOne) break;
        }
        let total = plates.reduce((partial_sum, a) => partial_sum + a, 0) * 2
        total += 45
        console.log({'total': total, 'plates': plates})
        return  {'total': total, 'plates': plates}
    }

    calculateWorkout(e) {
        if (e) {
            e.preventDefault();
            localStorage.setItem(this.props.type, this.state.oneRepMax)
        }
        let new_sets = []
        this.sets.map((set, index) => {
                let weight = this.calculateWeight(set.percentage)
                const new_set = {
                    "weight": weight.total,
                    "plates": weight.plates,
                    "reps": set.reps
                }
                return new_sets.push(new_set)
            }
        )
        this.setState({sets: new_sets})

    }

    handleChange(event) {
        const {target} = event;
        const value = target.value;
        this.setState({
            oneRepMax: value,
        });
    };

    componentDidMount() {
        let weight = localStorage.getItem(this.props.type)
        if (weight !== undefined) {
            this.setState({oneRepMax: weight}, this.calculateWorkout)
        }
    }
    capitalizeFirstLetter(string) {
        return string.replace(/([A-Z])/g, ' $1').replace(/^./, function(str){ return str.toUpperCase(); })
    }

    render() {
        return (
            <Col>
                <Form inline onSubmit={this.calculateWorkout}>
                    <FormGroup floating>
                        <Input id="squat" name="squat" placeholder="Squat" type="number" value={this.state.oneRepMax}
                               onChange={this.handleChange}/>
                        <Label for="squat">{this.capitalizeFirstLetter(this.props.type)}</Label>
                    </FormGroup>
                </Form>
                <Table>
                    <tbody>
                    {this.state.sets.map((set, index) => {
                        return (
                            <tr onClick={() => alert(set.plates)} key={index}>
                                <th scope="row">
                                    Set {index + 1} - {this.sets[index].percentage * 100}%
                                </th>
                                <td>
                                    {set.weight} x {set.reps}
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </Col>
        );
    }
}

export default Exercise;
