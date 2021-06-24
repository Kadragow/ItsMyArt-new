import styled from 'styled-components';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';

const CloseIcon = styled(CancelPresentationIcon)`
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

export default CloseIcon;
