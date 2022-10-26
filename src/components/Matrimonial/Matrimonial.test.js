import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Matrimonial from './Matrimonial';

describe('Matrimonial', () => {
  let props;
  let shallowMatrimonial;
  let renderedMatrimonial;
  let mountedMatrimonial;

  const shallowTestComponent = () => {
    if (!shallowMatrimonial) {
      shallowMatrimonial = shallow(<Matrimonial {...props} />);
    }
    return shallowMatrimonial;
  };

  const renderTestComponent = () => {
    if (!renderedMatrimonial) {
      renderedMatrimonial = render(<Matrimonial {...props} />);
    }
    return renderedMatrimonial;
  };

  const mountTestComponent = () => {
    if (!mountedMatrimonial) {
      mountedMatrimonial = mount(<Matrimonial {...props} />);
    }
    return mountedMatrimonial;
  };  

  beforeEach(() => {
    props = {};
    shallowMatrimonial = undefined;
    renderedMatrimonial = undefined;
    mountedMatrimonial = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
