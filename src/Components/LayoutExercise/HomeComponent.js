import React, { Component } from 'react';
import HeaderComponent from './HeaderComponent';
import NavigationComponent from './NavigationComponent';
import ContentComponent from './ContentComponent';
import FooterComponent from './FooterComponent';

export default class HomeComponent extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 p-0">
                            <HeaderComponent />
                        </div>
                    </div>
                    <div className="row d-flex">
                        <div className="col-4 p-0">
                            <NavigationComponent />
                        </div>
                        <div className="col-8 p-0">
                            <ContentComponent />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 p-0">
                            <FooterComponent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
