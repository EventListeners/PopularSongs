import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import App from '../../../react-client/src/components/App.jsx';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

describe('Test App Component', () => {
  
    test('should render component', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.exists()).toBeTruthy();
    });
  
    test('should render container heading', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find('h3').text()).toEqual('Popular');
      expect(wrapper.find('h3').length).toEqual(1);
    });

    test('should be selectable by class "popular-songs"', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.is('.popular-songs')).toBe(true);
    });

  });