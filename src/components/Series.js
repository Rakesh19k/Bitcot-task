import React, { Component } from 'react'
import { useLayoutEffect } from 'react/cjs/react.development';
import Data from './Data/sample.json'

class Series extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: Data.entries,
        };
    }




    render() {

        return (
            <div>

                <div className="header" style={{justifyContent: "center", textAlign:"center"}}>
                    <div style={{marginBottom:10, marginTop:10, fontSize:20, fontWeight:700}} >Popular Series</div>
                    <button className="btn" data-slide="true" onClick={() => this.props.onChange()} style={{padding:5}}>Homepage</button>
                </div>

                <div style={{ display: "flex", flexWrap: "wrap" }} >

                    {this.state.items.map(series => (

                        series.programType.length > 0 && series.programType == "series" ?
                            <div style={{ padding: 20 }}>
                                <div>
                                    <img src={series.images['Poster Art'].url} style={{width:140, height:200}} />
                                    <div style={{ width: '100px' }}>{series.title}</div>
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

export default Series;