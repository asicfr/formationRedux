/*eslint-env jest, jasmine  */
import React from 'react';
import { mount } from 'enzyme';
import HomePage from '../src/components/HomePage/HomePage.jsx';

test('HomePage component renders the text of the title', () => {
    const wrapper = mount(
      <HomePage />
    );
    const p = wrapper.find('.navbar-brand');
    expect(p.text()).toBe('Home page');
});

test('HomePage component change the title when click on hpButton1', () => {
    const wrapper = mount(
      <HomePage />
    );
    const theButton = wrapper.find('#hpButton1');
    theButton.simulate('click');
    const p = wrapper.find('.navbar-brand');
    expect(p.text()).toBe('new value');
});



