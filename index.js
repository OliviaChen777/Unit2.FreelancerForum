// const freelancers = [
//         { name: "Dr. Slice", price: 25, occupation: "gardener" },
//         { name: "Dr. Pressure", price: 51, occupation: "programmer" },
//         { name: "Prof. Possibility", price: 43, occupation: "teacher" },
//         { name: "Prof. Prism", price: 81, occupation: "teacher" },
//         { name: "Dr. Impulse", price: 43, occupation: "teacher" },
//         { name: "Prof. Spark", price: 76, occupation: "programmer" },
//         { name: "Dr. Wire", price: 47, occupation: "teacher" },
//         { name: "Prof. Goose", price: 72, occupation: "driver" },
//       ];

const occupations = [
    'gardener', 'programmer', 'teacher', 'driver','engineer','chef','artist'
]

const names = [
    'James', 'Kay', 'Annnie','Gery','Olivia','Eugene','Alice'
]


let newFreelancers =[];

      // calculate the average price
function calculateAveragePrice(){
    const allFreelancers = [...newFreelancers]; 
    const totalPrice = allFreelancers.reduce((sum, freelancer)=> sum + freelancer.price, 0);
    const averagePrice = totalPrice / allFreelancers.length ;
    return averagePrice;
}

// Add a random freelancer from the freelancers array
function addFreelancer(){
    let new_price = Math.floor((Math.random() * 80) + 20)
    let new_name = names[Math.floor(Math.random() * names.length)]
    let new_occupation = occupations[Math.floor(Math.random() * occupations.length)]

    const freelancer = {
        name: new_name,
        price: new_price,
        occupation: new_occupation
    }
    newFreelancers.push(freelancer);

    render();
    updateAveragePrice();
}

// Render the freelancers in the table
function render() {
    const freelancersList = document.querySelector("#freelancers tbody");

  // Clear the existing table body
  freelancersList.innerHTML = "";

  newFreelancers.forEach((newFreelancer)=> {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = newFreelancer.name;

    const occupationCell = document.createElement("td");
    occupationCell.textContent = newFreelancer.occupation;

    const priceCell = document.createElement("td");
    priceCell.textContent = `$${newFreelancer.price}`;

    row.appendChild(nameCell);
    row.appendChild(occupationCell);
    row.appendChild(priceCell);

    freelancersList.appendChild(row);

  });
}

    
//     const freelancerElements = freelancers.map((freelancer) => {
//       const freelancerElement = document.createElement("li");
//       freelancerElement.classList.add(freelancer.name, freelancer.occupation, freelancer.price);
//       freelancerElement.textContent =`${freelancer.name} - ${freelancer.occupation} - ${freelancer.price}`;
//      return freelancerElement;
//     });
//     freelancersList.appendChild(...freelancerElements);
      
//     const newFreelancersList =  document.querySelector("#new-freelancers");
//     const newFreelancerElements = newFreelancers.map((newfreelancer) => {
//         const newFreelancerElement = document.createElement("li");
//         newFreelancerElement.classList.add(newFreelancer.name, newFreelancer.occupation,newFreelancer.price);
//         return newFreelancerElement;
// })
//     newFreelancersList.replaceChildren(...newFreelancerElements);
// }

function updateAveragePrice(){
    const averagePriceElement = document.querySelector("#averagePrice");

    const averagePrice = calculateAveragePrice();

    // Truncate to 2 decimal places (without rounding)
    const truncatedPrice = Math.floor(averagePrice * 100) / 100;

    averagePriceElement.textContent = `$${truncatedPrice}`;
}

const addFreelancerIntervaId = setInterval(() => {
    addFreelancer();
},2000);



render();