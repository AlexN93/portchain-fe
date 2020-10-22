import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

function EnhancedTableHead(props) {
    const { classes, columns, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };

    return (
        <TableHead className={'enhanced-table-head'}>
            <TableRow style={{maxHeight: '10px'}}>
                {columns.map((col, i) => (
                    <TableCell
                        key={col.field}
                        align={'left'}
                        // align={i !== 0 ? 'right' : 'inherit'}
                        padding={col.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === col.field ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === col.field}
                            direction={orderBy === col.field ? order : 'asc'}
                            onClick={createSortHandler(col.field)}
                        >
                            {col.title}
                            {orderBy === col.field ? (
                                <span className={classes.visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </span>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    columns: PropTypes.array,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    onRequestSort: PropTypes.func.isRequired,
};

export default EnhancedTableHead;