import React            from 'react';
import SidebarHeader    from './SidebarHeader';
import SidebarList      from './SidebarList';

const SidebarContents = (props) => {
    return (
        <>
            <SidebarHeader 
                auth={props.auth} createNewList={props.createNewList} 
                undo={props.undo} redo={props.redo} tpsHasUndo={props.tpsHasUndo} tpsHasRedo={props.tpsHasRedo}
                addListEnabled={props.addListEnabled}
            />
            <SidebarList
                activeid={props.activeid} handleSetActive={props.handleSetActive}
                todolists={props.todolists} createNewList={props.createNewList}
                updateListField={props.updateListField}
            />
        </>
    );
};

export default SidebarContents;