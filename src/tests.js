import renderer from 'react-test-renderer';

export const snapshot = (component) => {
  const tree = renderer
    .create(component)
    .toJSON();
  expect(tree).toMatchSnapshot();
};
