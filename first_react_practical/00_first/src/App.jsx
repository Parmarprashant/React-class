import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

 return(
  <>
   <div className="navbar">
    <h3>logo</h3>
    <div className="links">
    <p>home</p>
    <p>about us</p>
    <p>contact us</p>
    </div>
    <div className="menubar">
        <p className='bar1'></p>
        <p className='bar1'></p>
        <p className='bar1'></p>
    </div>
   </div>

   <div className="card1">
    <div className="img-sec">
        <img src="https://images.unsplash.com/photo-1765871321198-30fffc41e605?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    </div>
    <h2>nature image</h2>
     <div className="text">
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla consequuntur dolor corporis, repellendus vero iusto esse deleniti facilis? Accusantium maxime explicabo a tempore nostrum itaque id quod eos! Consequatur quidem aliquid veritatis voluptas cumque.</p>
     </div>

     <button className='btn'>read more</button>
   </div>

   <section>
    <div className="card12">
        <div className="img-1">
            <img className='superman-img' src="https://github.com/Parmarprashant/CGxSU_Semester_1/blob/main/html_css_js/CSS/00.assignment/02.level_2/01.superwars/super-1.png?raw=true" alt="" />
        </div>
        <h4>Spiderman</h4>
        <h1>12</h1>
    </div>

    <div className="card12">
        <div className="img-1">
            <img className='superman-img' src="https://github.com/Parmarprashant/CGxSU_Semester_1/blob/main/html_css_js/CSS/00.assignment/02.level_2/01.superwars/super-2.png?raw=true" alt="" />
        </div>
        <h4>Captain America</h4>
        <h1>30</h1>
    </div>


    <div className="card13">
     <h1>5 - 0</h1>
    </div>

    <div className="card12">
        <div className="img-1">
            <img className='superman-img' src="https://github.com/Parmarprashant/CGxSU_Semester_1/blob/main/html_css_js/CSS/00.assignment/02.level_2/01.superwars/super-3.png?raw=true" alt="" />
        </div>
        <h4>Wonder Women</h4>
        <h1>50</h1>
    </div>

    <div className="card12">
        <div className="img-1">
            <img className='superman-img' src="https://github.com/Parmarprashant/CGxSU_Semester_1/blob/main/html_css_js/CSS/00.assignment/02.level_2/01.superwars/super-4.png?raw=true" alt="" />
        </div>
        <h4>Grem Women</h4>
        <h1>12</h1>
    </div>
   </section>


<div className="calculator">
    <div className="card">
        <div className="top-section">
            <h1 id='num'>7744</h1>
        </div>
        <div className="row1">
        <div className="circle0">AC</div>
        <div className="circle0">DEL</div>
        <div className="circle0">%</div>
        <div className="circle01">/</div>
        </div>
        <div className="row2">
        <div className="circle1">7</div>
        <div className="circle1">8</div>
        <div className="circle1">9</div>
        <div className="circle10">*</div>
        </div>
        <div className="row3">
        <div className="circle2">4</div>
        <div className="circle2">5</div>
        <div className="circle2">6</div>
        <div className="circle20">-</div>
        </div>
        <div className="row4">
        <div className="circle3">1</div>
        <div className="circle3">2</div>
        <div className="circle3">3</div>
        <div className="circle30">=</div>
        </div>
        <div className="row5">
        <div className="circle5">0</div>
        <div className="circle4">.</div>
        <div className="circle4">=</div>
        </div>
    </div>
</div>


  </>
 )
}
 
export default App
