import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';

import DialogTitle from './DialogTitle';
import DialogContent from './DialogContent';

function PortchainModal({content, open = false, handleClose}) {
    return (
        <Dialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
            maxWidth={false}
        >
            <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                Title
            </DialogTitle>
            <DialogContent dividers>
                {content}
            </DialogContent>
        </Dialog>
    );
}

PortchainModal.propTypes = {
    content: PropTypes.any,
    open: PropTypes.bool,
    handleClose: PropTypes.func.isRequired
};

export default PortchainModal;