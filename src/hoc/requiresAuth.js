import React from "react";
import { connect } from "react-redux";


const requiresAuth = (WrappedComponent) => {

    class LayoutWrapper extends React.Component {


        componentDidMount() {
            this._checkAndRedirect();
        }

        componentDidUpdate() {
            this._checkAndRedirect();
        }

        _checkAndRedirect() {
            const { isAuthenticated } = this.props;

            if (!isAuthenticated) {
                this.props.history.push('/login')
            }
        }

        render() {
            return (
                <div>

                    {
                        this.props.isAuthenticated && <WrappedComponent />
                    }

                </div>
            )
        }
    }

    const mapStateToProps = (state) => {
        return { isAuthenticated: state.auth.isAuthenticated }
    }
    return connect(mapStateToProps)(LayoutWrapper);
};


export default requiresAuth;