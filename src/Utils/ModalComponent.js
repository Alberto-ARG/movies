import React, { Component } from 'react'
 
import classNames from 'classnames'
import './ModalComponent.css'

 class ModalComponent extends Component {
   
      render() {
        const { active} = this.props
        return (
         // <div className={classNames('movie-list-item', {'selected': isSelected})} onClick={this.handleClick}>{title}({vote_average})</div>
         <div className={classNames('notvisible', {'visible': active})}>
          <div className="modal">
          
          </div>
           <div className="background-modal">
    
           </div>
        </div>
        )
      }
    }
export default ModalComponent;