import React from 'react-native';

var {
  Stylesheet,
  View,
  Navigator
} = React;

import Reflux from 'reflux'
import {DeckActions} from './../actions';
import Decks from './Decks'; 
import Review from './Review'; 
import NewCard from './NewCard'; 
import Heading from './Header';

import CardsStore from './../stores/CardsStore'; 
import DeckMetaStore from './../stores/DeckMetaStore';

var Zebreto = React.createClass({
  displayName: 'Zebreto',
   mixins: [Reflux.connect(DeckMetaStore, 'deckMetas')],

   componentWillMOunt() {
    CardsStore.emit()
   },

   review(deckID) {
    DeckActions.reviewDeck(deckID)
    this.refs.navigator.push({
      name: 'review',
      data: {
        deckID: deckID
      }
    })
   },

   createdDeck(deck) {
    this.refs.navigator.push({
      name: 'createCards',
      data: {
        deck: deck
      }
    })
   }
})