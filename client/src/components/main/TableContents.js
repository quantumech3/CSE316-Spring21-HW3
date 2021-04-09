import React        from 'react';
import TableEntry   from './TableEntry';

const TableContents = (props) => {

    let entriesToJsx = (entry, index) =>
    {
        if(index === 0)
        {
            return <TableEntry
                data={entry} key={entry.id}
                deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                editItem={props.editItem} index={index}
                isTop={true}
            />
        }

        return <TableEntry
                data={entry} key={entry.id}
                deleteItem={props.deleteItem} reorderItem={props.reorderItem}
                editItem={props.editItem} index={index}
                isTop={false}
            />
    }

    const entries = props.activeList ? props.activeList.items : null;
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
