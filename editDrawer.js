import React from 'react';

class EditDrawer extends React.Component {

    constructor () {
      super();
      this.state = {
        colorsArray:["#ED5851", "#9CCC64", "#337AEC", "#ff7a45", "#7E58C2", "#FFEB3B", "#78909C", "#FFFFFF", "#213a4b"]
      }
    }
    updateColor = (i) => {
        alert("New Color: " + i);
    }
    render (){
        return (
            <div className="container-fluid animated fadeIn extra-fast-animation tag-edit-drawer">
                <div className="row">
                    <div className="col-xs-12">
                        {this.state.colorsArray.map(function(object, i){
                            return <ColorButton buttonColor={object} key={i} updateColor={this.updateColor}/>;
                        }, this)}
                    </div>
                </div>
            </div>
        );
    }
};


class ColorButton extends React.Component {

    constructor () {
      super();
      this.updateColor = this.updateColor.bind(this);
    };
    componentWillMount(){
      console.log("this.props  ",this.props);
    };

    updateColor ()  {
        console.log("this.props.buttonColor  ",this.props.buttonColor);
        this.props.updateColor(this.props.buttonColor);
    };
    render (){
        var buttonStyle = {
            backgroundColor: this.props.buttonColor,
        };
        return (
            <div className="tag-edit-color-button"
            style={buttonStyle}
            onClick={this.updateColor}>
              {this.props.buttonColor}
            </div>
        )
    }
};

export default EditDrawer;
