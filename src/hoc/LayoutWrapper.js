
import React from "react";
import { connect } from "react-redux";
import Login from "../screens/Login";








const funcWrapper = (WrappedComponent) => {

    class LayoutWrapper extends React.Component {


        render() {
            return (
                <div>

                    {
                        this.props.isAuthenticated ? <WrappedComponent /> : <Login />
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


export default funcWrapper;