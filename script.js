// Show destination information

function showDestination(place) {

    let message = "";

    if (place === "Paris") {
        message =
            "Paris is famous for the Eiffel Tower, museums, art and French culture.";
    }

    else if (place === "Bali") {
        message =
            "Bali is known for beautiful beaches, temples, nature and relaxing destinations.";
    }

    else if (place === "Dubai") {
        message =
            "Dubai is famous for modern buildings, shopping, beaches and desert adventures.";
    }

    else if (place === "London") {
        message =
            "London offers historic landmarks, museums, parks and cultural attractions.";
    }

    alert(message);
}


// Open booking form

function openBooking() {

    document.getElementById("booking-popup")
        .style.display = "block";
}


// Close booking form

function closeBooking() {

    document.getElementById("booking-popup")
        .style.display = "none";
}


// Confirm booking

function bookTrip() {

    const name =
        document.getElementById("bookingName").value;

    const email =
        document.getElementById("bookingEmail").value;

    const destination =
        document.getElementById("destination").value;

    const date =
        document.getElementById("travelDate").value;

    const travelers =
        document.getElementById("travelers").value;


    if (
        name === "" ||
        email === "" ||
        destination === "" ||
        date === "" ||
        travelers === ""
    ) {

        alert("Please fill in all booking details.");

        return;
    }


    alert(
        "Booking confirmed!\n\n" +
        "Name: " + name + "\n" +
        "Destination: " + destination + "\n" +
        "Travel Date: " + date + "\n" +
        "Travelers: " + travelers
    );


    closeBooking();

}


// Contact form

function sendMessage() {

    const name =
        document.getElementById("contactName").value;

    const email =
        document.getElementById("contactEmail").value;

    const message =
        document.getElementById("contactMessage").value;


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please fill in all fields.");

        return;
    }


    alert(
        "Thank you " +
        name +
        "! Your message has been sent."
    );


    document.getElementById("contactName").value = "";

    document.getElementById("contactEmail").value = "";

    document.getElementById("contactMessage").value = "";

}
