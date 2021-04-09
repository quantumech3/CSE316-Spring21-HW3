import React        from 'react';
import TableEntry   from './TableEntry';

const TableContents = (props) => {

    const entries = props.activeList ? props.activeList.items : null;

    let entriesToJsx = (entry, index) =>
    {
        let isTop = index === 0;
        let isBottom = entries && index === entries.length - 1

        return <TableEntry
                data={entry} key={entry.id}
                deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                editItem={props.editItem} index={index}
                isTop={isTop}
                isBottom={isBottom}
                setAddListEnabled={props.setAddListEnabled}
            />
    }

    return (
        entries ? <div className=' table-entries container-primary'>
            {
                entries.map(entriesToJsx)
            }

            </div>
            : <div className='container-primary' />
    );
};

export default TableContents;
