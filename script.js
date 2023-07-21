const endpoint = `https://gauravgitacc.github.io/postAppData/auctionData.json`;
const container = document.getElementById("container");

const BackgroundColorMapping= {
    "APPROVED" : "blue",
    "PENDING" :"yellow",
    "CANCELLED" :"red",
    "COMPLETED" : "green"
}
const textColorMapping= {
    "APPROVED" : "white",
    "PENDING" :"black",
    "CANCELLED" :"white",
    "COMPLETED" : "white"
}

function renderDataOntoUI(data){
    data.forEach(item => {
        const card = document.createElement("div");
        card.className = "card";
        const {status, caseNumber, fromLocation, toLocation, fare, date} = item;
        card.innerHTML = `
    <div class="top_container">
        <div class="left">
            <span class="badge" style = "color: ${textColorMapping[status]}; Background-color:${BackgroundColorMapping[status]};">Approved</span>
            <span>${caseNumber}</span>
        </div>
        <div class="right">
           ${date}
        </div>
    </div>
    <div class="bottom_container">
        <p style="font-weight: 600;">${fromLocation}</p>
        <p>${toLocation}</p>
        <p class="price">${fare}</p>
    </div>`
    container.appendChild(card);
    });

}
async function fetchAuctionDetails(){
    try{
        const response = await fetch(endpoint, {method:"GET"});
        const data = await response.json();
        renderDataOntoUI(data);
    }
    catch(error){
        console.log(error.message);
    }
   
}
fetchAuctionDetails();