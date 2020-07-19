import React, { Component } from 'react';




class searchbar extends Component {
    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

    componentDidMount() {

        fetch('https://www.zaubacorp.com/custom-search')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }


    render() {
        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;
        return (
            <div>
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Name: {item.name} | Email: {item.email}
                        </li>
                    ))}
                </ul>
                </div>
        );
    }
}

export default searchbar;