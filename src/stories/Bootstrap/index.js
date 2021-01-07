import React from 'react';
import { storiesOf } from '@storybook/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons/faCheckCircle';
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
  PanelGroup,
  ProgressBar,
  ListGroup,
  ListGroupItem,
  Alert,
  Table,
  Form,
  FormGroup,
  Tooltip,
  ButtonToolbar,
  Modal,
  InputGroup,
  Panel,
  FormControl,
  Label,
  Badge,
  Well,
} from 'react-bootstrap';

storiesOf('Bootstrap', module)
  .add('Buttons', () => (
    <div>
      <h2>Style</h2>
      <ButtonToolbar>
        <Button>Default</Button>
        <Button bsStyle="primary">Primary</Button>
        <Button bsStyle="success">Success</Button>
        <Button bsStyle="info">Info</Button>
        <Button bsStyle="warning">Warning</Button>
        <Button bsStyle="danger">Danger</Button>
        <Button bsStyle="link">Link</Button>
      </ButtonToolbar>
      <h2>With icon</h2>
      <ButtonToolbar>
        <Button>
          <FontAwesomeIcon icon={faCog} className="icon-addon-right" />
          Default
        </Button>
        <Button bsStyle="primary">
          <FontAwesomeIcon icon={faCheckCircle} className="icon-addon-right" />
          Primary
        </Button>
        <Button bsStyle="success">
          <FontAwesomeIcon icon={faPlus} className="icon-addon-right" />
          Success
        </Button>
        <Button bsStyle="danger">
          <FontAwesomeIcon icon={faTrash} fixedWidth />
        </Button>
        <Button bsStyle="link">
          <FontAwesomeIcon icon={faTrash} fixedWidth />
        </Button>
      </ButtonToolbar>
      <h2>Small</h2>
      <ButtonToolbar>
        <Button bsSize="sm">Default</Button>
        <Button bsSize="sm" bsStyle="success">
          Small button
        </Button>
        <Button bsSize="sm" bsStyle="primary">
          Primary
        </Button>
        <Button bsSize="sm" bsStyle="danger">
          Success
        </Button>
      </ButtonToolbar>
      <h2>Small with icon</h2>
      <ButtonToolbar>
        <Button bsSize="sm">
          <FontAwesomeIcon icon={faCog} className="icon-addon-right" />
          Default
        </Button>
        <Button bsSize="sm" bsStyle="success">
          <FontAwesomeIcon icon={faPlus} className="icon-addon-right" />
          Small button
        </Button>
        <Button bsSize="sm" bsStyle="danger">
          <FontAwesomeIcon icon={faTrash} className="icon-addon-right" />
          Success
        </Button>
        <Button bsSize="sm" bsStyle="danger">
          <FontAwesomeIcon icon={faTrash} fixedWidth />
        </Button>
        <Button bsSize="sm" bsStyle="link">
          <FontAwesomeIcon icon={faTrash} fixedWidth />
        </Button>
      </ButtonToolbar>
      <hr />
      <Button block>Block</Button>
      <h2>State</h2>
      <Button active>Active</Button>
      <Button disabled>Disabled</Button>
      <h2>Link</h2>
      <Button href="#">&lt;a/&gt; as button</Button>
    </div>
  ))
  .add('Button Toolbar', () => (
    <div>
      <ButtonToolbar>
        <Button>some</Button>
        <Button>default</Button>
        <Button>buttons</Button>
      </ButtonToolbar>
      <h2>Subhead</h2>

      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    </div>
  ))
  .add('DropdownButton', () => (
    <DropdownButton title="DropdownButton" id="bootstrap-showcase-dropdown-button">
      <MenuItem eventKey="1">Action</MenuItem>
      <MenuItem eventKey="2">Another action</MenuItem>
      <MenuItem eventKey="3" active>
        Active Item
      </MenuItem>
      <MenuItem divider />
      <MenuItem eventKey="4">Separated link</MenuItem>
    </DropdownButton>
  ))
  .add('Modal', () => (
    <div className="static-modal" style={{ position: 'relative' }}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          One fine body...
          <hr />
          Content after hr
        </Modal.Body>
        <Modal.Footer>
          <Button block bsStyle="success">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  ))
  .add('Tabs / Tab', () => (
    <Tabs defaultActiveKey={2} id="indigo-ui-bootstrap-tabs">
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
  ))
  .add('List Group & List Group Item', () => (
    <ListGroup>
      <ListGroupItem>Item 1</ListGroupItem>
      <ListGroupItem>Item 2</ListGroupItem>
      <ListGroupItem>...</ListGroupItem>
    </ListGroup>
  ))
  .add('Tables', () => (
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
  ))
  .add('Panel', () => (
    <div>
      <Panel>
        <Panel.Heading>Panel heading without title</Panel.Heading>
        <Panel.Body>Panel content</Panel.Body>
      </Panel>
      <Panel>
        <Panel.Heading>
          <Panel.Title>Panel heading with title</Panel.Title>
        </Panel.Heading>
        <Panel.Body>Panel content</Panel.Body>
      </Panel>
    </div>
  ))
  .add(
    'PanelGroup',
    () => (
      <PanelGroup accordion id="accordion-example">
        <Panel eventKey="1">
          <Panel.Heading>
            <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
            squid single-origin coffee nulla assumenda shoreditch et.
          </Panel.Body>
        </Panel>
        <Panel eventKey="2">
          <Panel.Heading>
            <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
            squid single-origin coffee nulla assumenda shoreditch et.
          </Panel.Body>
        </Panel>
        <Panel eventKey="3">
          <Panel.Heading>
            <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
          </Panel.Heading>
          <Panel.Body collapsible>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck
            quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it
            squid single-origin coffee nulla assumenda shoreditch et.
          </Panel.Body>
        </Panel>
      </PanelGroup>
    ),
    {
      info: {
        text: 'Accordion servers for categorizing the content into collpasible sections.`',
      },
    }
  )
  .add('Form', () => (
    <Form>
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
    </Form>
  ))
  .add('InputGroup', () => (
    <div>
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
  ))
  .add('ProgressBar', () => <ProgressBar now={60} label="60%" />)
  .add('Images', () => (
    <div>
      <h2>Circle</h2>
      <Image src="https://avatars2.githubusercontent.com/u/1424387?s=200&v=4" circle />
      <h2>Responsive</h2>
      <Image src="https://avatars2.githubusercontent.com/u/1424387?s=200&v=4" responsive />
      <h2>Centered</h2>
      <Image
        className="center-block"
        src="https://avatars2.githubusercontent.com/u/1424387?s=200&v=4"
        responsive
      />
    </div>
  ))
  .add('ResponsiveEmbed', () => (
    <ResponsiveEmbed a16by9>
      <iframe
        className="embed-responsive-item"
        src="//www.youtube.com/embed/g-VBfkV4xfc"
        title="Youtube Video"
      />
    </ResponsiveEmbed>
  ))
  .add('Tooltip', () => (
    <div>
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
  ))
  .add('Popover', () => (
    <Popover placement="right" title="Popover right" id="indigo-ui-bootstrap-popover-example-1">
      And here's some <strong>amazing</strong> content. It's very engaging. right?
    </Popover>
  ))
  .add('Alert', () => (
    <div>
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
  ))
  .add('Typography', () => (
    <div>
      <h1>h1. Bootstrap heading</h1>
      <h2>h2. Bootstrap heading</h2>
      <h3>h3. Bootstrap heading</h3>
      <h4>h4. Bootstrap heading</h4>
      <h5>h5. Bootstrap heading</h5>
      <h6>h6. Bootstrap heading</h6>

      <h2>List</h2>
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
      <h2>Code</h2>
      <code>Sample text here.. &lt;section&gt; Sample text here..</code>
    </div>
  ))
  .add('Well', () => <Well>WELL, Well, well ...</Well>)
  .add('Badge', () => <Badge>42</Badge>)
  .add('Label', () => (
    <div>
      <Label bsStyle="default">Default</Label>&nbsp;
      <Label bsStyle="primary">Primary</Label>&nbsp;
      <Label bsStyle="success">Success</Label>&nbsp;
      <Label bsStyle="info">Info</Label>&nbsp;
      <Label bsStyle="warning">Warning</Label>&nbsp;
      <Label bsStyle="danger">Danger</Label>
    </div>
  ));
