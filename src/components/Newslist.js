import React, { Component } from 'react';

class Newslist extends Component {    
    renderNews(){
        if(this.props.news.length === 0){
            return <div>No results</div>;
        }
        return this.props.news.map( item => {
            if(item.title !== null) {
                return (
                    <tr key={item.objectID}>
                        <td>
                            <a href={item.url} target="_blank">{item.title}</a>
                        </td>
                        <td>{item.author}</td>
                    </tr>                    
                );
            }
        })
    }

    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>    
                </thead>
                <tbody>
                    {this.renderNews()}
                </tbody>
            </table>
        )
    }
    
};

export default Newslist;