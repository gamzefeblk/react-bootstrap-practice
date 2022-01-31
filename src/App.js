import './App.css';
import Card from './components/Card';
import Collapse from './components/Collapse';

function App() {
 
  
  let id1=`https://picsum.photos/id/${parseInt(Math.random()*100)}/200/300`
  let id2=`${id1}/?blur=5`
  let id3=`${id1}/?grayscale`
  
  return (
  <div className='container'>
    <div className='row'>
     <div className="card-group w-100">
      <div className='col'>
      <Collapse href="CollapseExample1">
         <Card cardTitle="Image" 
               cardText="That is normal image"
               image={id1} />
      </Collapse> 
      </div>
      <div className='col'>
      <Collapse href="CollapseExample2">
        <Card  cardTitle="Blur Image" 
               cardText="That is blur image"
               image={id2}/>
     </Collapse>
      </div>
      <div className='col'>
      <Collapse href="CollapseExample3">
        <Card cardTitle="Grayscale Image"  
              cardText="That is gray image"
              image={id3}/>
     </Collapse>
      </div>
    </div>
   </div>
 </div>

  )
}
export default App;


