let myFavPlace = ["Biratnagar", " Lalitpur", " Patan", " Kathmandu", " Pokhara", " Palpa"];

// Showing favourite Places
document.write(`<div>
<h1> My Favourite Palces </h1>
<h2>${myFavPlace}</h2>
</div>`);

// Adding two Places
myFavPlace.push([" Janakpur", " Bhaktapur"]);

// Showing places after adding two places
document.write(`<div>
<h1> After adding 2 Places </h1>
<h2>${myFavPlace}</h2>
</div>`);

// deleting Kathmandu
delete myFavPlace[3];

// Showing remaining Places
document.write(`<div>
<h1>After deleting Kathamndu</h1>
<h2>${myFavPlace}</h2>
<h1>count = ${myFavPlace.length}</h1>
</div>`)
