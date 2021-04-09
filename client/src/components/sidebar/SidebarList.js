import React        from 'react';
import SidebarEntry from './SidebarEntry';

const SidebarList = (props) => {
    let getListOfLists = (currentListId, listOfLists) =>
    {
        // Get current list with currentListId as its id
        let currentList = listOfLists.find((list) => list.id === currentListId);

        // If such a list is found:
        if(currentList)
        {
            // Get copy of list of lists without currentListId list
            let newListOfLists = listOfLists.filter((list) => list.id !== currentList.id);

            // Return [current list] + filteredListOfLists
            return [currentList, ...newListOfLists]
        }

        // Else return listOfLists
        return listOfLists
    }

    return (
        <>
            {
                props.todolists &&
                getListOfLists(props.activeid, props.todolists).map(todo => (
                    <SidebarEntry
                        handleSetActive={props.handleSetActive} activeid={props.activeid}
                        id={todo.id} key={todo.id} name={todo.name} _id={todo._id}
                        updateListField={props.updateListField}
                    />
                ))
            }
        </>
    );
};

export default SidebarList;