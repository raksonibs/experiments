import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Root, { SearchBar, ReleaseTable, Release } from '../src/Root'

const createShallowRelease = (outOfPrint = true) => {
    let props = {release: { artist: 'foobar', title: 'bar', outOfPrint }};
    return shallow(<Release {...props} />);
};

const createShallowRelaseTable = (noOutOfPrint = false, searchText = '') => {
    let items = [{ artist: 'foobar', title: 'bar', outOfPrint: true }];
    let props = { searchText, releases: items, noOutOfPrint };
    return shallow(<ReleaseTable { ...props } />);
}