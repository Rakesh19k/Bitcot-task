import React, { useState, Component } from 'react'
import "./CSS/Content.css"
import Series from "./Series"
import Movies from "./Movies"

// function Content() {
//     const [series, setSeries] = useState("false")
//     const [movies, setMovies] = useState("false")

//     // const onChange = () => {
//     //     setSeries(false)
//     //     setMovies(false)
//     // }


//     return (
//         <>


//             <div className="cards">
//                 <div>
//                     
//                         <div className="card" onClick={() => setSeries(true)}>
//                             <p>SEARIES</p>
//                         </div> 

//                     
//                     <h5 style={{ fontWeight: 500 }}>Popular series</h5>
//                 </div>
//                 <div>
//                     <div className="card" onClick={() => setMovies(true)}>
//                         <p>MOVIES</p>
//                     </div>
//                     <h5 style={{ fontWeight: 500 }}>Popular movies</h5>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Content;



export default class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {

            Series: false,
            Movies: false,



        }
    }
    onChange = () => {
        this.setState({
            Series: false,
            Movies: false
        })

    }


    render() {
        return (
            <div className="headerpage-1">

                {this.state.Series ? <Series
                    onChange={() => this.onChange()}

                /> :

                    this.state.Movies ? <Movies
                        onChange={() => this.onChange()}

                    /> :

                        <div className="cards">
                            <div>
                                <div className="card" onClick={() => this.setState({ Series: true })}>
                                    <p>SEARIES</p>
                                </div>


                                <h5 style={{ fontWeight: 500 }}>Popular series</h5>
                            </div>
                            <div>
                                <div className="card"  onClick={() => this.setState({ Movies: true })}>
                                    <p>MOVIES</p>
                                </div>
                                <h5 style={{ fontWeight: 500 }}>Popular movies</h5>
                            </div>
                        </div>
                }
            </div>
        )
    }
}