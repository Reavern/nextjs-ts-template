import _ from 'lodash';

export const SortableTableHead = ({ title, path, currPath, flag, setSortData }) => {
    return (
        <th scope="col" style={{cursor: 'pointer'}} onClick={() => setSortData(path)}>{title}
            {
                path === currPath ?
                    flag ?
                        ( <i className="ni ni-bold-down" /> ) : 
                        ( <i className="ni ni-bold-up" /> )
                    : null
            }
        </th>
    );
}

export function filterItem(items, searchText, paths) {
    if (searchText !== '') {
        let newItems = [];
        if (items && paths) {
            items.forEach((item) => {
                paths.forEach((path) => {
                    const value = _.get(item, path, '');
                    if (value.toString().toLowerCase().includes(searchText.toLowerCase())) {
                        newItems.push(item);
                    }
                });
            });
        }
        return newItems;
    }
    return items
}

export function calculateCurrentPageItem(items, currentPage) {

    const ITEMS_PER_PAGE = 10;

    const START_INDEX = currentPage * ITEMS_PER_PAGE;
    const FINISH_INDEX = (currentPage + 1) * ITEMS_PER_PAGE;

    let output = [];

    for (let i = START_INDEX; i < FINISH_INDEX; i++) {
        if (items.length > i) {
            output.push(items[i]);
        }
    }
    return output;
}

export function sortData(items, sortPath, order) {
    if (sortPath !== '') {
        let output = [];
        if (order) {
            output = items.sort((a, b) => (a[sortPath] > b[sortPath]) ? 1 : -1);
        } else {
            output = items.sort((a, b) => (a[sortPath] < b[sortPath]) ? 1 : -1);
        }

        return output;
    }
    return items;
}

export function getItems(items, searchText, paths, currentPage, sortPath, order) {
    const sortedData = sortData(items, sortPath, order);
    const filteredItems = filterItem(sortedData, searchText, paths);
    return (calculateCurrentPageItem(filteredItems, currentPage));
}