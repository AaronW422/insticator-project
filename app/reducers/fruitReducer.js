import axios from 'axios';

export const GET_FRUITS = 'GET_FRUITS';

export const getFruits = fruits => ({
  type: GET_FRUITS,
  fruits
})

export const fetchFruits = () => {
  return (dispatch) => {
    return axios.get('api/fruits')
      .then(res => res.data)
      .then(fruits => dispatch(getFruits(fruits)))
      .catch(err => { throw (err); })
  }
};

export default (fruits = [], action) => {
  switch (action.type) {
    case GET_FRUITS:
      return action.fruits;
    default:
      return fruits;
  }
}
