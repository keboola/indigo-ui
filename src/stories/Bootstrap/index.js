import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  Button,
  ButtonGroup,
  HelpBlock,
  Checkbox,
  Radio,
  ControlLabel,
  ResponsiveEmbed,
  Image,
  Popover,
  Tab,
  Tabs,
  DropdownButton,
  MenuItem,
  ProgressBar,
  ListGroup,
  ListGroupItem,
  Alert,
  Table,
  FormGroup,
  Tooltip,
  ButtonToolbar,
  Modal,
  InputGroup,
  Accordion,
  Panel,
  FormControl,
  Label,
  Badge,
  Well,
} from 'react-bootstrap';

storiesOf('Bootstrap', module)
  .add('Buttons', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <h2>Style</h2>
        <div className="bs-example">
          <Button>Default</Button>
          <Button bsStyle="primary">Primary</Button>
          <Button bsStyle="success">Success</Button>
          <Button bsStyle="info">Info</Button>
          <Button bsStyle="warning">Warning</Button>
          <Button bsStyle="danger">Danger</Button>
          <Button bsStyle="link">Link</Button>
        </div>
        <h2>Size</h2>
        <div className="bs-example">
          <Button bsSize="large">Large button</Button>
          <Button>Default button</Button>
          <Button bsSize="small">Small button</Button>
          <Button bsSize="xsmall">Extra small button</Button>
          <br />
          <Button block>Block</Button>
        </div>
        <h2>State</h2>
        <div className="bs-example">
          <Button active>Active</Button>
          <Button disabled>Disabled</Button>
        </div>
        <h2>Link</h2>
        <div className="bs-example">
          <Button href="#">&lt;a/&gt; as button</Button>
        </div>
      </div>
    </div>
  ))
  .add('Button Toolbar', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <ButtonToolbar>
            <Button>some</Button>
            <Button>default</Button>
            <Button>buttons</Button>
          </ButtonToolbar>
        </div>
        <div className="bs-docs-section">
          <h2>Subhead</h2>
          <div className="bs-example">
            <ButtonGroup>
              <Button>Left</Button>
              <Button>Middle</Button>
              <Button>Right</Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('DropdownButton', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <DropdownButton title="DropdownButton" id="bootstrap-showcase-dropdown-button">
            <MenuItem eventKey="1">Action</MenuItem>
            <MenuItem eventKey="2">Another action</MenuItem>
            <MenuItem eventKey="3" active>
              Active Item
            </MenuItem>
            <MenuItem divider />
            <MenuItem eventKey="4">Separated link</MenuItem>
          </DropdownButton>
        </div>
      </div>
    </div>
  ))
  .add('Modal', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <div className="static-modal" style={{ position: 'relative' }}>
            <Modal.Dialog>
              <Modal.Header>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>One fine body...</Modal.Body>

              <Modal.Footer>
                <Button>Close</Button>
                <Button bsStyle="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </div>
        </div>
      </div>
    </div>
  ))
  .add('Tabs / Tab', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <Tabs defaultActiveKey={2} id="indigo-ui-bootstrap-tabs-example-1">
            <Tab eventKey={1} title="Tab 1">
              Tab 1 content
            </Tab>
            <Tab eventKey={2} title="Tab 2">
              Tab 2 content
            </Tab>
            <Tab eventKey={3} title="Tab 3" disabled>
              Tab 3 content
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  ))
  .add('List Group & List Group Item', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <ListGroup>
            <ListGroupItem>Item 1</ListGroupItem>
            <ListGroupItem>Item 2</ListGroupItem>
            <ListGroupItem>...</ListGroupItem>
          </ListGroup>
        </div>
      </div>
    </div>
  ))
  .add('Tables', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <Table hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <td className="active">4</td>
                <td className="active">Larry</td>
                <td className="active">the Bird</td>
              </tr>
              <tr>
                <td className="success">5</td>
                <td className="success">Larry</td>
                <td className="success">the Bird</td>
              </tr>
              <tr>
                <td className="warning">6</td>
                <td className="warning">Larry</td>
                <td className="warning">the Bird</td>
              </tr>
              <tr>
                <td className="danger">7</td>
                <td className="danger">Larry</td>
                <td className="danger">the Bird</td>
              </tr>
              <tr>
                <td className="info">8</td>
                <td className="info">Larry</td>
                <td className="info">the Bird</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  ))
  .add('Panel', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <Panel header="Panel heading without title">Panel content</Panel>
          <Panel header="Panel title">Panel content</Panel>
        </div>
      </div>
    </div>
  ))
  .add('Well', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <Well>WELL, Well, well ...</Well>
        </div>
      </div>
    </div>
  ))
  .add(
    'Accordion',
    () => (
      <div className="container bs-docs-container">
        <div className="bs-docs-section">
          <div className="bs-example">
            <Accordion>
              <Panel header="Collapsible Group Item #1" eventKey="1">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
              </Panel>
              <Panel header="Collapsible Group Item #2" eventKey="2">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
              </Panel>
              <Panel header="Collapsible Group Item #3" eventKey="3">
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor
                brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt
                aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente
                ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer
                farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them
                accusamus labore sustainable VHS.
              </Panel>
            </Accordion>
          </div>
        </div>
      </div>
    ),
    {
      info: {
        text: 'Accordion servers for categorizing the content into collpasible sections.`',
      },
    }
  )
  .add('Form', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <form>
            <Checkbox>Checkbox</Checkbox>

            <FormGroup>
              <Radio name="radioGroup">1</Radio> <Radio name="radioGroup">2</Radio>{' '}
              <Radio name="radioGroup">3</Radio>
            </FormGroup>

            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Select</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option value="select">select</option>
                <option value="other">...</option>
              </FormControl>
            </FormGroup>

            <FormGroup>
              <ControlLabel>Input</ControlLabel>
              <FormControl type="text" value="email@example.com" />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Disabled Input</ControlLabel>
              <FormControl disabled type="text" value="email@example.com" />
            </FormGroup>

            <FormGroup controlId="formControlsTextarea">
              <ControlLabel>Textarea</ControlLabel>
              <FormControl componentClass="textarea" placeholder="textarea" />
            </FormGroup>

            <FormGroup>
              <ControlLabel>Static text</ControlLabel>
              <FormControl.Static>email@example.com</FormControl.Static>
            </FormGroup>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </div>
  ))
  .add('InputGroup', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>@</InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <FormControl type="text" />
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>$</InputGroup.Addon>
              <FormControl type="text" />
              <InputGroup.Addon>.00</InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <FormControl type="text" />
              <InputGroup.Addon>:]</InputGroup.Addon>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroup.Button>
                <Button>Before</Button>
              </InputGroup.Button>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" />
              <DropdownButton
                componentClass={InputGroup.Button}
                title="Action"
                id="indigo-ui-bootstrap-input-group-dropdown-button"
              >
                <MenuItem key="1">Item</MenuItem>
              </DropdownButton>
            </InputGroup>
          </FormGroup>

          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <input type="radio" aria-label="..." />
              </InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <InputGroup>
              <InputGroup.Addon>
                <input type="checkbox" aria-label="..." />
              </InputGroup.Addon>
              <FormControl type="text" />
            </InputGroup>
          </FormGroup>
          <h2>Sizes</h2>
          <FormGroup bsSize="large">
            <FormControl type="text" placeholder="Large text" />
          </FormGroup>
          <FormGroup>
            <FormControl type="text" placeholder="Normal text" />
          </FormGroup>
          <FormGroup bsSize="small">
            <FormControl type="text" placeholder="Small text" />
          </FormGroup>
          <h2>States</h2>
          <FormGroup controlId="formValidationSuccess1" validationState="success">
            <ControlLabel>Input with success</ControlLabel>
            <FormControl type="text" />
            <HelpBlock>Help text with validation state.</HelpBlock>
          </FormGroup>

          <FormGroup controlId="formValidationWarning1" validationState="warning">
            <ControlLabel>Input with warning</ControlLabel>
            <FormControl type="text" />
          </FormGroup>

          <FormGroup controlId="formValidationError1" validationState="error">
            <ControlLabel>Input with error</ControlLabel>
            <FormControl type="text" />
          </FormGroup>

          <FormGroup controlId="formValidationNull" validationState={null}>
            <ControlLabel>Input with no validation state</ControlLabel>
            <FormControl type="text" />
          </FormGroup>
        </div>
      </div>
    </div>
  ))
  .add('ProgressBar', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <ProgressBar now={60} label="60%" />
        </div>
      </div>
    </div>
  ))
  .add('Images', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <h1>Images</h1>
        <h2>Circle</h2>
        <div className="bs-example">
          <Image src="https://avatars2.githubusercontent.com/u/1424387?s=200&v=4" circle />
        </div>
        <h2>Responsive</h2>
        <div className="bs-example">
          <Image src="https://avatars2.githubusercontent.com/u/1424387?s=200&v=4" responsive />
        </div>
        <h2>Centered</h2>
        <div className="bs-example">
          <Image
            className="center-block"
            src="https://avatars2.githubusercontent.com/u/1424387?s=200&v=4"
            responsive
          />
        </div>
      </div>
    </div>
  ))
  .add('ResponsiveEmbed', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <ResponsiveEmbed a16by9>
            <iframe
              className="embed-responsive-item"
              src="//www.youtube.com/embed/g-VBfkV4xfc"
              title="Youtube Video"
            />
          </ResponsiveEmbed>
        </div>
      </div>
    </div>
  ))
  .add('Tooltip', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <Tooltip placement="right" className="in" id="indigo-ui-bootstrap-tooltip-example-1">
            Tooltip right
          </Tooltip>
          <br />
          <br />
          <Tooltip placement="top" className="in" id="indigo-ui-bootstrap-tooltip-example-2">
            Tooltip top
          </Tooltip>
          <br />
          <br />
          <Tooltip placement="left" className="in" id="indigo-ui-bootstrap-tooltip-example-3">
            Tooltip left
          </Tooltip>
          <br />
          <br />
          <Tooltip placement="bottom" className="in" id="indigo-ui-bootstrap-tooltip-example-4">
            Tooltip bottom
          </Tooltip>
        </div>
      </div>
    </div>
  ))
  .add('Popover', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <Popover
            placement="right"
            title="Popover right"
            id="indigo-ui-bootstrap-popover-example-1"
          >
            And here's some <strong>amazing</strong> content. It's very engaging. right?
          </Popover>
        </div>
      </div>
    </div>
  ))
  .add('Alert', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <Alert bsStyle="danger">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
          <Alert bsStyle="danger" className="alert-as-link">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
          <Alert bsStyle="warning">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
          <Alert bsStyle="warning" className="alert-as-link">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
          <Alert bsStyle="success">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
          <Alert bsStyle="success" className="alert-as-link">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
          <Alert bsStyle="info">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
          <Alert bsStyle="info" className="alert-as-link">
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
        </div>
      </div>
    </div>
  ))
  .add('Typography', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <h1>h1. Bootstrap heading</h1>
          <h2>h2. Bootstrap heading</h2>
          <h3>h3. Bootstrap heading</h3>
          <h4>h4. Bootstrap heading</h4>
          <h5>h5. Bootstrap heading</h5>
          <h6>h6. Bootstrap heading</h6>
        </div>

        <h2>List</h2>
        <div className="bs-example">
          <ul className="list-unstyled">
            <li>aaa</li>
            <li>aaa</li>
            <li>
              aaa
              <ul>
                <li>bbb</li>
                <li>bbb</li>
                <li>
                  bbb
                  <ul>
                    <li>ccc</li>
                    <li>ccc</li>
                    <li>ccc</li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <h2>Code </h2>
        <div className="bs-example">
          <code>Sample text here.. &lt;section&gt; Sample text here..</code>
        </div>
      </div>
    </div>
  ))
  .add('Label', () => (
    <div className="container bs-docs-container">
      <div className="bs-docs-section">
        <div className="bs-example">
          <Label bsStyle="default">Default</Label>&nbsp;
          <Label bsStyle="primary">Primary</Label>&nbsp;
          <Label bsStyle="success">Success</Label>&nbsp;
          <Label bsStyle="info">Info</Label>&nbsp;
          <Label bsStyle="warning">Warning</Label>&nbsp;
          <Label bsStyle="danger">Danger</Label>
        </div>
      </div>

      <div className="bs-docs-section">
        <div className="bs-example">
          <Badge>42</Badge>
        </div>
      </div>
    </div>
  ));
