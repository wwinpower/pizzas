import React, { Component } from 'react';
import axios from 'axios';
// import store from './redux/store'

import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import { Header } from './components';

import { Home, Cart } from './pages';

import { setPizzas as setPizzasAction } from './redux/actions/pizzas';

// function App() {
//   const [pizzas, setpizzas] = useState([]);

//   useEffect(() => {
//     axios('http://localhost:3000/db.json').then(({ data }) => setpizzas(data.pizzas));
//   }, []);

//   return;
// }

class App extends Component {
    componentDidMount() {
        axios('http://localhost:3000/db.json').then(({ data }) => {
            this.props.setPizzas(data.pizzas);
        });
    }

    render() {
        console.log(this.props.items);
        return (
            <div className="wrapper">
                <Header />
                <div className="content">
                    <Route path="/" render={() => <Home pizzasItems={this.props.items} />} exact />
                    <Route path="/cart" component={Cart} exact />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.pizzas.items,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPizzas: (items) => dispatch(setPizzasAction(items)),
    };
};

// const mapDispatchToProps = {
//   setPizzas  //- можно просто написать так, все остальное автоматический будет работать
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
