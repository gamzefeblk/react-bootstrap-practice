import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class Collapse extends React.Component{

  render(){
   return (
    
    <div>
          <a className="btn btn-primary w-100" //Burdaki w buton ile asagida acilan rsmi esitliyo
              data-toggle="collapse" 
              href={"#".concat(this.props.href)}
              role="button" 
              aria-expanded="false" 
              aria-controls="collapseExample">
                  {this.props.children.props.cardTitle}
            </a>
            <div className='collapse show' id={this.props.href} //Burdashow classi card lari acik skilde getiriyor
            >
                {this.props.children}
            </div>
  </div>
  )

  }
}

export default Collapse;







