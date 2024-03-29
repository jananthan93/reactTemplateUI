import React, { Component } from 'react'
export default class Card extends Component {
    render() {
        return (
          <div className="card">
            <div className="card-header">
              <h3 className="h6 mb-0">{this.props.title}</h3>
            </div>
            <div className="card-body">
              {this.props.children}
            </div>
          </div>
        )
    }
}
