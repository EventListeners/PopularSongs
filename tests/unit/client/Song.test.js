import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Song from '../../../react-client/src/components/Song.jsx';
import Adapter from 'enzyme-adapter-react-16';
import userData from '../../data/user.data';


Enzyme.configure({ adapter: new Adapter() });

describe('Test Song Component', () => {

    test('should render component', () => {
      const wrapper = shallow(<Song key={1} counter={1} albumURL={"https://loremflickr.com/320/240/musician,hollywood,artist,singer/all"} library={false} songName={'commodi quam ut'} streams={172000}/>);
      expect(wrapper.exists()).toBeTruthy();
    });

    test('should display the number of the song listed', () => {
      const wrapper = shallow(<Song key={1} counter={1} albumURL={"https://loremflickr.com/320/240/musician,hollywood,artist,singer/all"} library={false} songName={'commodi quam ut'} streams={172000}/>);
      expect(
        wrapper
          .find('.song-number-play')
          .at(0)
          .html(),
      ).toContain(1);
    });

    test('should display the name of the song', () => {
      const wrapper = shallow(<Song key={1} counter={1} albumURL={"https://loremflickr.com/320/240/musician,hollywood,artist,singer/all"} library={false} songName={'commodi quam ut'} streams={172000}/>);
      expect(
        wrapper
          .find('.song-name')
          .at(0)
          .html(),
      ).toContain('commodi quam ut');
    });

    test('should display the number of streams', () => {
      const wrapper = shallow(<Song key={1} counter={1} albumURL={"https://loremflickr.com/320/240/musician,hollywood,artist,singer/all"} library={false} songName={'commodi quam ut'} streams={172000}/>);
      expect(
        wrapper
          .find('.streams')
          .at(0)
          .html(),
      ).toContain('172,000');
    });

   

});

