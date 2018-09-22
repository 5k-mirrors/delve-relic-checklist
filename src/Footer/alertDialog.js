import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/core/styles';

class AlertDialog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.label=props.label;
    this.title=props.title;
    this.contentText=props.contentText;
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const StyledButton = withStyles({
      root: {
        color: 'white',
      },
    })(Button);

    return (
      <div>
        <StyledButton onClick={this.handleClickOpen}>{this.label}</StyledButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {this.contentText}
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
