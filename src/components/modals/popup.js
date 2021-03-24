import React from "react";
import {connect} from "react-redux";
import GeneralActions from "../../reducers";

class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.onDocumentClick = this.onDocumentClick.bind(this);
    }

    onDocumentClick(event) {
        if (event.target === this.myRef.current) {
            this.props.requestEngineer(false);
        }
    }

    render() {
        const {show, requestEngineer} = this.props;
        if (!show) {
            document.body.style.overflow = "";
            return null;
        }
        document.body.style.overflow = "hidden";
        return (
            <div ref={this.myRef} onClick={this.onDocumentClick} className="popup_engineer">
                <div className="popup_dialog">
                    <div className="popup_content text-center">
                        <button type="button" className="popup_close" onClick={() => requestEngineer(false)}>
                            <strong>&times;</strong></button>
                        <div className="popup_form">
                            {this.props.children}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    show: store.showRequestEngineer
})

const mapDispatchToProps = {
    requestEngineer: GeneralActions.requestEngineer
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);