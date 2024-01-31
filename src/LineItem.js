import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className="item flex flex-row text-xl items-center space-x-2">
            <input
                type="checkbox"
                onChange={() => handleCheck(item.id)}
                checked={item.checked}
                className='w-5 h-5 bg-purple-500 mr-2 '
            />
            <label
                style={(item.checked) ? { textDecoration: 'line-through' } : null}
                onDoubleClick={() => handleCheck(item.id)}
                className='flex-1'
            >{item.item}</label>
            <FaTrashAlt
                onClick={() => handleDelete(item.id)}
                role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
                className="text-purple-500 hover:text-red-600"
            />
        </li>
    )
}

export default LineItem