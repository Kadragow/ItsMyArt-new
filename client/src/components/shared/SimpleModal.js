import React from 'react';
import styled from 'styled-components';
import { Modal, Backdrop, Fade } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const useStyles = makeStyles((theme) => {
  // console.log(theme.palette.background.paper);
  return {
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  };
});

const StyledSvg = styled(CancelPresentationIcon)`
  z-index: 2;
  color: ${({ theme }) => theme.secondary};
  position: absolute;
  top: 2%;
  right: 2%;
  width: 3rem !important;
  height: 3rem !important;

  cursor: pointer;
  transition: 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const SimpleModal = ({ open, onClose, children }) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={onClose}
      className={classes.modal}
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      closeAfterTransition
    >
      <Fade in={open}>
        <>
          <StyledSvg onClick={onClose} />
          {children}
        </>
      </Fade>
    </Modal>
  );
};

export default SimpleModal;
