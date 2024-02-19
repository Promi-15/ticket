let mySeats = [];
let totalPrice = 0;
let grandTotal = 0;
let discountPrice = 0;

const applyBtn = document.getElementById("apply-btn");
const nextBtn = document.getElementById("next-btn");
const selectedSeat = document.getElementById("selected-seat");
const seatLeft = document.getElementById("seat-left");


function addMySeat(seatId) {
    const discountPriceElement = document.getElementById('discount-price');
    const grandTotalElement = document.getElementById('grand-total');
    const couponDiv = document.getElementById('coupon-div');
    const totalPriceElemet = document.getElementById('total-price');

    if (mySeats.length < 4) {
        const seatElement = document.getElementById(seatId);
        seatElement.style.backgroundColor = "#00FF00";
        if (!mySeats.includes(seatId)) {
            mySeats.push(seatId);
            selectedSeat.textContent = mySeats.length;
            seatLeft.textContent = 32 - mySeats.length;
            totalPrice = totalPrice + 550;
            grandTotal = totalPrice;
            totalPriceElemet.textContent = totalPrice;
            grandTotalElement.textContent = totalPrice;
        }
        else {
            alert('Already Booked this seat')
        }

    }
    else {
        alert("Already booked 4 seats");
    }

    if (totalPrice > 0) {
        const phoneNo = document.getElementById("phone-no");
        let phoneNoValue = 0;
        phoneNo.addEventListener("input", function () {
            phoneNoValue = phoneNo.value;
            if (phoneNoValue) {
                nextBtn.style.backgroundColor = "#00FF00";
            } else {
                nextBtn.style.backgroundColor = "#d1d5db";
            }
        });
        nextBtn.addEventListener('click', function(){
            if(phoneNoValue.toString().length === 11){
                // window.location.href = "sucess.html";
                my_modal_5.showModal()
                
            }else{
                alert('Please Enter a valid 11 digit Phone number');
            }
        })
    }
    if (mySeats.length == 4) {
        applyBtn.style.backgroundColor = "#00FF00";
        applyBtn.addEventListener('click', function () {
            const couponInput = document.getElementById("coupon-input");
            const couponValue = couponInput.value;
            if (couponValue === 'New15') {
                discountPrice = totalPrice * .15;
                grandTotal = totalPrice - discountPrice;
                discountPriceElement.textContent = discountPrice;
                grandTotalElement.textContent = grandTotal;
                couponDiv.style.display = "none";
            } else if (couponValue === 'Couple20') {
                discountPrice = totalPrice * .20;
                grandTotal = totalPrice - discountPrice;
                discountPriceElement.textContent = discountPrice;
                grandTotalElement.textContent = grandTotal;
                couponDiv.style.display = "none";
            } else {
                alert("Wrong Coupon!");
            }
        })
    }

    const mySeatsElement = document.getElementById("mySeats");
    mySeatsElement.innerHTML = "";
    for (let i = 0; i < mySeats.length; i++) {
        const addedItem = document.createElement("li");
        addedItem.innerHTML = `
        <div class="flex justify-between pt-1">
            <p>${mySeats[i]}</p>
            <p>ECONOMY</p>
            <p>550</p>
        </div>
        `
        mySeatsElement.appendChild(addedItem);
    }
}


const buyTicketBtn = document.getElementById('buy-tickets-btn');
buyTicketBtn.addEventListener('click', function(){
    const section = document.getElementById("ph-paribahan");
    section.scrollIntoView({behavior: 'smooth'});
})