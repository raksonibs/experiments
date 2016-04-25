import TestUtils from 'react-addons-test-utils';
const renderer = TestUtils.createRenderer();

function shallow(Component, props) {
    renderer.render(<Component {...props} />);
    return renderer.getRenderOutput();
}