import React from 'react';
export default class ColorableContainer extends React.Component {
    
    render() {
        return (
            <div className='colorableContainer' style={{ backgroundColor: this.props.backgroundColor}} >
                {this.props.children}
            <style jsx>{`
                .colorableContainer {
                    width: 100%;
                    height: 40px;
                }
            `}</style>
            </div>
        )
    }
}