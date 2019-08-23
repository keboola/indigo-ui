import renderer from 'react-test-renderer';

export const matchesSnapshot = (component) => {
  const tree = renderer
    .create(component)
    .toJSON();
  expect(tree).toMatchSnapshot();
};
