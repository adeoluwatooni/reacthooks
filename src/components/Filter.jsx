// Component to filter Movies by title and ratings.


const Filter = ( {filterByTitle, filterByRate} ) =>{

  return(
    <div className="filterMovie">
      
      {/* creating a text box that filters the current movies by what the user inputs and the ratings the user inputs   */}

      <label> Search By Movie Title: </label>
      <input type="text" id="filterTitle" onChange={filterByTitle} />

      <label> Search By Movie Ratings: </label>
      <input type="number" id="filterRating" onChange={filterByRate} />
    </div>
  )
}

export default Filter;

