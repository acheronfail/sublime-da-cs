/*
 * This file is just an example. I took it from the source one and
 * edited to demonstrate the syntax highlighting. The code may
 * not work or even should not.
 *
 * Original: https://github.com/facebook/react/blob/master/src/renderers/art/ReactARTFiberEntry.js
 * Copyright are held by original authors.
 */

'use strict';

class Pattern {
  constructor(url, width, height, left, top) {
    this._args = slice.call(arguments);
  }

  applyFill(node) {
    node.fillImage.apply(node, this._args);
  }
}

class Surface extends Component {
  componentDidMount() {
    const {height, width} = this.props;

    this._surface = Mode.Surface(+width, +height, this._tagRef);

    this._mountNode = ARTRenderer.createContainer(this._surface);
    ARTRenderer.updateContainer(this.props.children, this._mountNode, this);
  }

  componentDidUpdate(prevProps, prevState) {
    const props = this.props;

    if (props.height !== prevProps.height || props.width !== prevProps.width) {
      this._surface.resize(+props.width, +props.height);
    }

    ARTRenderer.updateContainer(this.props.children, this._mountNode, this);

    if (this._surface.render) {
      this._surface.render();
    }
  }

  componentWillUnmount() {
    ARTRenderer.updateContainer(null, this._mountNode, this);
  }

  render() {
    const props = this.props;

    const Tag = Mode.Surface.tagName;

    return (
      <Tag
        ref={ref => (this._tagRef = ref)}
        accessKey={props.accessKey}
        className={props.className}
        draggable={props.draggable}
        role={props.role}
        style={props.style}
        tabIndex={props.tabIndex}
        title={props.title}
      />
    );
  }
}
