import React from 'react'

function FavoriteFood(props) {
    var mappedFavoriteFoods = props.favoriteFoods.map(favoriteFood => <p>{favoriteFood}</p>)
    return (
        <div>
            <h1>My Favorite Foods:</h1>
            {mappedFavoriteFoods}
        </div>
    )
}

export default FavoriteFood