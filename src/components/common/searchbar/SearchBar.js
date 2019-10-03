import React from 'react';

function SearchBar() {
  return (
    <div
      style={{
        fontSize: 12,
        flex: 1,
        float: 'right',
        textAlign: 'right',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '50%',
        padding: 10
      }}
    >
      <input type="text" placeholder="Search for food ,cusines" name="search" />
      <button type="submit">
        <i class="fa fa-search" style={{ color: 'grey' }}></i>
      </button>
    </div>
  );
}
export default SearchBar;
