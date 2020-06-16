import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header'
import { Header2 } from './components/header'
//this is import from multicomponent module

//mport Header from './components/header'
//this is a default import of one and only default component from the module
import Footer from './components/footer'

function myAlert(){
  alert('This is Parent Alert!');
  console.log('Parent alert from fuction in App');
}

function App() {
  return (
    <div className="App">
     <Header />
     <Header2 info="Huy znaet chto eto" number="399688" />
     <p>Offloading the responsibility for making your app secure onto QA testers or an information security office is tempting, but security is everyone's responsibility. The Django Admin is one of our favorite features of Django, but unless it's locked down correctly, it presents opportunities for exploitation. To save your users from compromised data, here are 10 tips to make the Django Admin more secure.</p>
     <Footer trademark="page by Tolyanski" myalert={myAlert} />
    </div>
  );
}

export default App;
