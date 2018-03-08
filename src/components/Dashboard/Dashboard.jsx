import React from 'react';
import {Component} from 'react';
import {Container, Row, Col} from 'reactstrap';

/**
 * Dashboard class extending react.Component
 */
class Dashboard extends Component {
  /**
   * Class constructor
   * required
   * @param {object} props passed to Class
   */
  constructor(props) {
  	super(props);
  	this.state = {};
  }

   /**
    * componentWillMount is invoked before mounting
    * not required
    */
   componentWillMount() {}

   /**
    * render examins this.props and this.state to return a react element,
    * string and numbers, portals, null and booleans
    * required
    * @return {ReactElement} markup
    */
   render() {
     return (
       <Container>
				 <Row>
					 <Col md="12">
						 <b>Content!</b>
					 </Col>
				 </Row>
			 </Container>
     );
   }

   /**
    * componentDidMount is invoked after mounting
    * not required
    */
   componentDidMount() {}

   /**
    * componentWillReceiveProps is invoked before
    * a mounted component receives new props
    * not required
    * @param {object} nextProps the next properties to attach to component
    */
   componentWillReceiveProps() {}

   /**
    * shouldComponentUpdate is to let React know if a component’s
    * output is not affected by the current change in state or props
    * not required
    * @param {object} nextProps the next properties to attach to component
    * @param {object} nextState the next state of component
    * @return {bool} update component or not
    */
   shouldComponentUpdate() {
     return true;
   }

   /**
    * componentWillUpdate is invoked just before rendering
    * when new props or state are being received
    * Use this as an opportunity to perform preparation before an update
    * if shouldComponentUpdate is false componentWillUpdate is ignored
    * not required
    * @param {object} nextProps the next properties to attach to component
    * @param {object} nextState the next state of component
    */
   componentWillUpdate() {}

   /**
    * componentDidUpdate is invoked immediately after updating occurs
    * if shouldComponentUpdate is false componentDidUpdate is ignored
    * not required
    * @param {object} prevProps the previous properties attached to component
    * @param {object} prevState the previous state of component
    */
   componentDidUpdate() {}

   /**
    * componentWillMount is invoked immediately before
    * a component is unmounted and destroyed
    * not required
    */
   componentWillUnmount() {}

   /**
    * error handling
    * not required
    * @param {object} error
    * @param {object} info
    */
   componentDidCatch() {}
}

Dashboard.defaultProps = {

};

Dashboard.displayName = 'Dashboard';

export default Dashboard;
