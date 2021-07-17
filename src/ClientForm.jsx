import React, { Component } from 'react';


class ClientForm extends Component {
    state = {
        newClient : "",
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const id = new Date().getTime();
        const nom = this.state.newClient;
        const client = {
          id : id,
          nom : nom
        }

        this.props.onClientAdd(client);
        this.setState({newClient: ""})

    }

    handleChange = (event) => {
        this.setState({newClient : event.target.value})
      }
    


    render() {

        return (
            <form onSubmit={this.handleSubmit } >

         <input type="text"  value={this.state.newClient} onChange={this.handleChange} placeholder="Ajouter un client"/>
        <button>Confirmer</button>
      </form>

        )

    }
}


export default ClientForm;