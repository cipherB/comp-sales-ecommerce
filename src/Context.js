import React, { Component } from 'react';
import items from './Data';

const ComputerContext = React.createContext();
class ComputerProvider extends Component {
    constructor(props){
        super(props)

        this.state = {
            computers: [],
            sortedComputers: [],
            featuredComputers: [],
            loading: true,
            type: 'all',
            brand: 'all',
            price: 0,
            minPrice: 0,
            maxPrice: 0,
        }
    }

    componentDidMount(){
        let computers = this.formatData(items);
        let featuredComputers = computers.filter(computer => computer.featured === true);
        let maxPrice = Math.max(...computers.map(item=> item.price));
        this.setState({
            computers, 
            featuredComputers, 
            sortedComputers:computers, 
            loading:false, 
            price:maxPrice,
            maxPrice,
        })
    };

    formatData(items){
        let tempItems = items.map(item=>{
            let id = item.sys.id
            let images = item.fields.images.map(image=> image.fields.file.url);
            let computer = {...item.fields, images, id}
            return computer;
        });
        return tempItems;
    }

    getComputer = (slug) =>{
        let tempComputers = [...this.state.computers];
        const computer = tempComputers.find((computer)=> computer.slug === slug);
        return computer;
    };

    handleChange = event => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        },this.filterComputers)
    };

    filterComputers = () => {
        let{
            computers, type, brand, price
        } = this.state
        //all the computers
        let tempComputers = [...computers];

        //filter by type
        if(type !== 'all'){
            tempComputers = tempComputers.filter(computer => computer.type === type)
        }

        //filter by brand
        if(brand !== 'all'){
            tempComputers = tempComputers.filter(computer => computer.brand === brand)
        }

        //filter by price
        tempComputers = tempComputers.filter(computer => computer.price <= price);

        //change state
        this.setState({
            sortedComputers: tempComputers
        })
    }


    render() {
        return (
            <ComputerContext.Provider value={{...this.state, getComputer: this.getComputer, handleChange: this.handleChange}}>
                {this.props.children}
            </ComputerContext.Provider>
        )
    }
}

const ComputerConsumer = ComputerContext.Consumer;

export function withComputerConsumer(Component){
    return function ConsumerWrapper(props){
        return <ComputerConsumer>
            {value => <Component {...props} context={value} />}
        </ComputerConsumer>
    }
}

export{ComputerProvider, ComputerConsumer, ComputerContext}
