import React, { Component } from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

class Pagin extends Component {
    state = {
        items: []
    }
    componentDidMount() {
        const { currPage, pages } = this.props;
        let pagin = []
        for(let i=0; i<=pages; i++){
            pagin.push(i);
        }
        this.setState({ items: pagin })
    }
    render() {
        const {items} = this.state;
        console.log(items)
        return(
            <Pagination>
                {items.map((i, index)=>
                <PaginationItem key={index}>
                    <PaginationLink>{index+1}</PaginationLink>                   
                </PaginationItem>
                )}
            </Pagination>
        )
    }
}

export default Pagin;