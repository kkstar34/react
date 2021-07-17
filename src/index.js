import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Client from './Client';
import ClientForm from './ClientForm';
// import App from './App';
import reportWebVitals from './reportWebVitals';

class App extends React.Component {

  /* clientInput= React.createRef(); */

  state = {
    clients : [
      {
        id: 1,
        nom : "Kouyate Karim"
      }, 
      
      {
        id: 2,
        nom : "Martial Yao"
      },
      {
        id: 3,
        nom : "Serge "
      }, 
      {
        id: 4,
        nom : "Vamoussa "
      }, 
      {
        id: 5,
        nom : "Elossy "
      }
    ], 

    newClient : ""
  }


  handleDelete = (id) => {
    let clients = [...this.state.clients];
    const index = clients.findIndex(client=> client.id === id);
    clients.splice(index, 1);
    this.setState({clients: clients})
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const id = new Date().getTime();
    const nom = this.state.newClient;
    const client = {
      id : id,
      nom : nom
    }

   
    

  }

  handleAdd = (client) => {
    const clients = [...this.state.clients];
    clients.push(client);
    this.setState({clients})
  }

  
  render() {
    return <div >
      <h1>Listes de client</h1>
      <ul>
        {this.state.clients.map(client =><Client details={client}  onDelete={this.handleDelete}/>)}
      </ul>

      <ClientForm onClientAdd={this.handleAdd}/>
      
    </div>
  }
}


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
