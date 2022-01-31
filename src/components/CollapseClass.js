import React from 'react';
import { Component } from 'react/cjs/react.production.min';

class Collapse extends React.Component{

  constructor(){
    super()
    this.state ={           //state ler degisir ama props bilgileri degismez.
      showContent:false
    }
    // this.showMore = () => {
    //   this.setState({showContent:true})  
    // }
    // this.showMore=this.showMore.bind(this)
  }
  // showMore(){
  //   this.setState({showContent:true })  //bu methodu burda yazarsak this i algilamiyor. constroctur ve render gibi reacttan almadigi icin ya constucture icine yzcaz bu methodu. Ama burda yazmaya devam etmek icin i bu daha effective bunun icin de bind ile consturture icine yazarak baglamis oluyoruz. Ama arrow funtion seklinde yazinca bind kullanmaya da gerek kalmiyor.
  // }
  showMore = () => {
    this.setState({showContent:!this.state.showContent}) //setState methodu render tetikledigi icin kullanmak zorundayiz.
  }
  componentDidMount(){
    console.log("component olusturuldu");
  }
  componentDidUpdate(){
    console.log("component update edildi");
  }
  render(){
   return (

    <div>
          <button className="btn btn-primary w-100" //Burdaki w buton ile asagida acilan rsmi esitliyo
                  onClick={this.showMore}
             >
                   {/* {this.props.children.props.cardTitle} bi sürü children olabilecegi icin bu sekilde yazmiyoruz*/}
                   {React.Children.map(this.props.children,children=>children.props.cardTitle)}
            </button>
            {
              this.state.showContent ? (     //turnery ile showcontent true ise göster seklinde kontrol yazdik
                <div className='collapse show'>
                {this.props.children}
            </div>
              ):null
            }
           
  </div>
  )

  }
}

export default Collapse;







