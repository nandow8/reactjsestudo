import React, { Component } from 'react';

export default class ButtonBackPage extends Component {

  buttonBootstrapClasses(params){
    const classe = params ? params.split(' ') : []
    let classes = ''

    if(classe[0]) classes += ` ${classe[0]}`
    if(classe[1]) classes += ` ${classe[1]}`
    if(classe[2]) classes += ` ${classe[2]}`
    if(classe[3]) classes += ` ${classe[3]}`
    if(classe[4]) classes += ` ${classe[4]}`

    return classes;
  }

  static contextTypes = {
    router: () => null, // replace with PropTypes.object if you use them
  }
  
  render() {
    const buttonClasses = this.buttonBootstrapClasses( this.props.classe )
    return (
      <div>
        <button
          className={ buttonClasses }
          onClick={this.context.router.history.goBack}>
            { this.props.titulo }
        </button>
      </div>
    )
  }
}