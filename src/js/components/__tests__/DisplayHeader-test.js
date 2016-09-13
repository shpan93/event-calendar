import expect from 'expect'
import React from 'react'
import { shallow } from 'enzyme'
import DisplayHeader from '../../components/DisplayHeader'
import 'chai'

function setup() {
  const props = {
    caption:'September 2016',
    updateAction:expect.createSpy(),
  };

  const enzymeWrapper = shallow(<DisplayHeader {...props} />)

  return {
    props,
    enzymeWrapper
  }
}

describe('components', () => {
  describe('DisplayHeader ', () => {
    it('root div should has class display-header', () => {
      const { enzymeWrapper } = setup();

      expect(enzymeWrapper.hasClass('display-header')).toBe(true);

    });
    it('buttons should contain arrow icons ', () => {

      const { enzymeWrapper } = setup();
      //expect(enzymeWrapper.find('button.left').find('fa-arrow-circle-left')).to.have.length(1);
      const buttonLeft = enzymeWrapper.find('button.left');
      const buttonRight = enzymeWrapper.find('button.right');
      expect(buttonLeft.find('.fa-arrow-circle-left').length).toBe(1);
      expect(buttonRight.find('.fa-arrow-circle-right').length).toBe(1);
    });
    it('should render current caption in h2 tag ', () => {
      const { enzymeWrapper, props } = setup();
      expect(enzymeWrapper.find('h2').text()).toBe(props.caption);
    });
  //
    it('should call handleUpdatePeriod on click left or right button', () => {
      const { enzymeWrapper, props } = setup();
     const leftButton = enzymeWrapper.find('button.left');
    const rightButton = enzymeWrapper.find('button.right');
      expect(props.updateAction.calls.length).toBe(0);
      leftButton.props().onClick('');

        expect(props.updateAction.calls.length).toBe(1);
      rightButton.simulate('click');
      expect(props.updateAction.calls.length).toBe(2);
    })
   })
});