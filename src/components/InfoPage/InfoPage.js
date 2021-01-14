import React from 'react';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

// const InfoPage = () => (
//   <div>
//     <p>Info Page</p>
//   </div>
// );

// If you needed to add local state or other things,
// you can make it a class component like:


class InfoPage extends React.Component {
  // showDetails = (id) => {
  //   console.log('movie clicked', id);
  //   this.props.dispatch({type: 'FETCH_DETAIL', payload: id})
  //   this.props.history.push('/detail')
  //   console.log('history is ======= ', this.props.history);

  render() {
    return (
      <div>
        <p>Hello Welcome! this is info page/all products</p>
        <p>in nav bar...this will be all products</p>
      </div>
    )
  }
}

export default InfoPage;
