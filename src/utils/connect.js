import React, { PureComponent } from 'react'

import { StoreContext } from "./context";


export function connect(mapStateToProps, mapDispachToProp) {
    return function enhanceHOC(WrappedComponent) {
        class EnhanceCompoent extends PureComponent {
            constructor(props, context) {
              super(props)
              this.state = {
                  storeState: mapStateToProps(context.getState()) // 此时this.context 还没有值 
              }
            }
            componentDidMount() { // 订阅
                this.unsubscribe = this.context.subscribe(() => {
                  this.setState({
                    storeState: mapStateToProps(this.context.getState()),
                  });
                });
              }
              componentWillUnmount() {
                this.unsubscribe(); // 取消订阅
              }
              render() {
                return (
                  <WrappedComponent
                    {...this.props}
                    {...mapStateToProps(this.context.getState())}
                    {...mapDispachToProp(this.context.dispatch)}
                  />
                );
              }
        }
        EnhanceCompoent.contextType = StoreContext;

        return EnhanceCompoent
    }
}
