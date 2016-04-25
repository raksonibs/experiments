- Testutils allows shallow rendering, meaning rendering a component one leevel deep, negelecting childs
Shallow rendering doesn’t rely on any DOM, it returns a React Element one level deep meaning calling shallow(Bar, {title: ‘fooBar’}) will return an object.
Shallow rendering doesn’t rely on any DOM, it returns a React Element one level deep meaning calling shallow(Bar, {title: ‘fooBar’}) will return an object.
import { renderIntoDocument } from 'react-addons-test-utils';
function mount(Component, props) {
    return renderIntoDocument(<Component { ...props } />);
}