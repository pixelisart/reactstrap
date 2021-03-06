import React, { PropTypes } from 'react';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};

const ModalBody = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes } = props;
  const classes = mapToCssModules(classNames(
    className,
    'modal-body'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

ModalBody.propTypes = propTypes;
ModalBody.defaultProps = defaultProps;

export default ModalBody;
