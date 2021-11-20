import React, { Component } from "react";
import axios from "axios";
const API_BASE_URL = "https://www.deckofcardsapi.com/api/deck";
// const API_URL = "https://www.deckofcardsapi.com/api/deck/new/shuffle/";

class Deck extends Component {
  constructor(props) {
    super(props);
    this.state = { deck: "", drawn: [] };
    this.getCard = this.getCard.bind(this);
  }
  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle`);
    this.setState({ deck: deck.data });
  }
  async getCard() {
    //make request using deck id
    //set state using new card info from api
    let deck_id = this.state.deck.deck_id;
    let cardUrl = `${API_BASE_URL}/${deck_id}/draw/`;
    let cardRes = await axios.get(cardUrl);
    // console.log(cardRes);
    // console.log(cardRes.data);
    let card = cardRes.data.cards[0];
    console.log(cardRes.data);
    this.setState((st) => ({
      drawn: [
        ...st.drawn,
        {
          id: card.code,
          image: card.image,
          name: `${card.value} of ${card.suit}`,
        },
      ],
    }));
  }

  render() {
    return (
      <div>
        <h1>Card Dealer</h1>
        <button onClick={this.getCard}>Get Card!</button>
      </div>
    );
  }
}

export default Deck;
