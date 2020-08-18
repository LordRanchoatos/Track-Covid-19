import React from 'react'; 

const SearchBox= ({ searchfield, searchChange }) => {
    return (
        <div className='pa3'>
            <input className='pa3 b--green ba bg-lightest-blue br3  ' type='search' placeholder='Country' onChange={searchChange} />
        </div>
    )
}

export default SearchBox;