import React, { Component } from "react";

class Content extends Component {
    render() {
        const data = this.props.data
        return (
            <p>
                {/*Ladies and gentlemen, this is {this.renderLabel(data.color)} Barber, your sportscaster, bringing you the last inning of the game between the Cleveland {this.renderLabel(data.pluralNoun)} and the {this.renderLabel(data.adjectiveOne)} Yankees. {this.renderLabel(data.celebOne)} is pitching for the Yankees. Here's the pitch! It's a low {this.renderLabel(data.adjectiveTwo)} ball that just cuts the inside of the {this.renderLabel(data.nounOne)} for a strike. That makes the count {this.renderLabel(data.numberOne)} strikes and {this.renderLabel(data.numberTwo)} balls. Now here's the next pitch. The batter swings and connects. It's a long, high {this.renderLabel(data.nounTwo)} out to {this.renderLabel(data.adjectiveThree)} field. But {this.renderLabel(data.celebTwo)} is coming up fast and has it for the second out. The next batter up is {this.renderLabel(data.celebThree)}, the Cleveland {this.renderLabel(data.adjectiveFour)}-stop. Here's the pitch... and it's hit... a short ground ball to third {this.renderLabel(data.nounThree)}. {this.renderLabel(data.celebFour)} scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the {this.renderLabel(data.adjectiveFive)} League!*/}
                Ladies and gentlemen, this is {data.color} Barber, your sportscaster, bringing you the last inning of the game between the Cleveland {data.pluralNoun} and the {data.adjectiveOne} Yankees. {data.celebOne} is pitching for the Yankees. Here's the pitch! It's a low {data.adjectiveTwo} ball that just cuts the inside of the {data.nounOne} for a strike. That makes the count {data.numberOne} strikes and {data.numberTwo} balls. Now here's the next pitch. The batter swings and connects. It's a long, high {data.nounTwo} out to {data.adjectiveThree} field. But {data.celebTwo} is coming up fast and has it for the second out. The next batter up is {data.celebThree}, the Cleveland {data.adjectiveFour}-stop. Here's the pitch... and it's hit... a short ground ball to third {data.nounThree}. {data.celebFour} scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the {data.adjectiveFive} League!
            </p>
        )
    }
}

export default Content;