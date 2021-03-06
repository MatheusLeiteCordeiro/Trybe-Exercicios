// import logo from './logo.svg';
// import './App.css';
import React from 'react';
// import HelloFromAnotherFile from './HelloFromAnotherFile';
import Header from './Header';
import Content from './Content';

//JSX

//Componente Funcional - Função
// function App() {
//   return (
//     <section className="hello">Hello World Turma 23</section>
//   )
// }

//Nas classes: funções = métodos
// class App extends React.Component {
//   render() {
//     const valorSoma = 11 + 12;
//     const mensagem = 'Hello World Turma'
//     return (
//       <section>
//         <span className='hello'>{mensagem}{valorSoma}</span>
//         <p className='hello'>Componente de Classes</p>
//       </section>
//     )
//   }
// }

//TODO COMPONENTE REACT COMEÇA COM LETRA MAIÚSCULA

//Novo componente: Usando classes
// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <section>
//          <span className='hello'>Hello World Turma 23</span>
//          <p className='hello'>Componente de Classes do HelloWorld</p>
//        </section>
//     )
//   }
// }
// Pegando componente de outro arquivo
// class App extends React.Component {
//   render() {
//     const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//     return (
//       <main>
//         <HelloWorld />
//         {myArray.map((numero, index) => {
//           return (
//           <div key={index}>
//             {numero}: <HelloFromAnotherFile />
//           </div>
//           );
//         })}
//       </main>
//     ); 
//   }
// }

// Exercicios 1 e 2
// const Task = (value) => {
//   return (
//     <li key={value}>{value}</li>
//   );
// }

// class App extends React.Component {
//   render() {
//     const commitmentsArray = ['commitmentOne', 'commitmentTwo', 'commitmentThree'];
//     return (
//       <ul>{commitmentsArray.map(tasks => Task(tasks))}</ul>
//     );
//   }
// }

class App extends React.Component {
  render() {
    return (
      <div>
         <Header />
         <Content />
      </div>
    );
  }
}

export default App;
