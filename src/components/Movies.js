import React, { Component } from 'react'
import Data from './Data/sample.json'

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: Data.entries,
      isLoaded: false,
    };
  }
 

  render() {
  return (
      <div>
          <div  className="header"  style={{justifyContent: "center", textAlign:"center"}}>
          <div style={{marginBottom:10, marginTop:10, fontSize:20, fontWeight:700}} >Popular Movies</div>
          <button className="btn" data-slide="true"  onClick={() => this.props.onChange()} style={{padding:5}} >Homepage</button>
        </div>

        <div style={{ display: "flex", flexWrap: "wrap" }} >

          {this.state.items.map(movies => (
            movies.programType.length > 0 && movies.programType == "movie" ?
              <div style={{ padding: 20 }}>
                <div>
                  <img src={movies.images['Poster Art'].url} style={{width:140, height:200}} />
                  <div style={{width:"100px"}} >{movies.title}</div>
                </div>
                </div>
                : null
              
        

          ))

          }
        </div>
      </div>

    )
  }
}

export default Movies;