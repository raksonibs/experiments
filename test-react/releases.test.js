import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Root, { Bar } from '../src/Bar'

describe('low level testing a React Application', () => {
    it('should shallow render', () => {
        const bar = shallow(Bar, {title: 'fooBar'});
        expect(bar.type).toBe('div');
        expect(bar.props.className).toBe('bar');
        expect(bar.props.children).toBe('fooBar');
    });
});