import React from 'react'


class HomeItem extends React.Component{
    render(){
        return(
            <div>

                <div className= "card p-5">
               <h1>{this.props.name}</h1>
               <h3>{this.props.color}</h3>
               </div>
            </div>
        )
    }
}
export default HomeItem;