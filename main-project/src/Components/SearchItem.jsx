import { useState } from 'react'

const users = [
    { firstName: "John", id: 1 },
    { firstName: "Emily", id: 2 },
    { firstName: "Michael", id: 3 },
    { firstName: "Sarah", id: 4 },
    { firstName: "David", id: 5 },
    { firstName: "Jessica", id: 6 },
    { firstName: "Daniel", id: 7 },
    { firstName: "Olivia", id: 8 },
    { firstName: "Matthew", id: 9 },
    { firstName: "Sophia", id: 10 }
]

const SearchItem = () => {
    const [searchItem, setSearchItem] = useState('')
    const [filteredUsers,setFilteredUsers] = useState(users)

    const handleInputChange = (e) => {
        const searchTerm = e.target.value;
        setSearchItem(searchTerm);
        // console.log(searchTerm);

        const filteredItems = users.filter((user)=> {
            return user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
        });
        // console.log(filteredItems)

        setFilteredUsers(filteredItems);

    }

    return (
        <div>
            <h1>Search Item</h1>
            <input
                type="text"
                value={searchItem}
                onChange={handleInputChange}
                placeholder='Type to search..'
            />
<ul>
        {filteredUsers.map(user => <li key={user.id}>{user.firstName}</li>)}
      </ul>
            {/* <div>
                {users.map((user) => <li key={user.id}>{user.firstName}</li>)}
            </div> */}
        </div>
    )
}

export default SearchItem;
