import LOGO from "../assets/LOGO.png";

export const airlineType = {
    name: "",
    img_url: LOGO,
    created_at: new Date()
}

export const airportType = {
    country_id: "",
    name: "",
    city_id: "",
    created_at: new Date()
}

export const aircraftType = {
    name: "",
    airline_id: "",
    airport_id: "",
    created_at: new Date(),
    rows: "",
    cols: "",
    listChair: [],
    status: ""
}

export const serviceDetailsType = {
    name: "",
    status: true,
    img_url: LOGO,
    created_at: new Date()
}

export const serviceAirlinesType = {
    name: "",
    price: "",
    id_airline: "",
    list_id_service: []
}


export const seatTypeType = {
    name: "",
    img_url: LOGO,
    price: "",
    created_at: new Date()
}
export const flightsType = {
    airline_id: "",
    aircraft_id: "",
    from_airport: "",
    to_airport: "",
    departure_time: "",
    arrival_time: "",
    is_round_trip: true,
    discount: "",
    created_at: new Date()
}
export const accountType = {
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
}

export const searchType = {
    is_round_trip: false,
    from: "",
    to: "",
    startDate: "",
    endDate: "",
    phone: "",
    email: "",
    fullName: "",
    flight_id: "",
    seatype_id: "",
    passengerList: [
        {
            id: 1,
            title: "adult",
            condition: "Từ 12 tuổi trở lên",
            listPerson: []
        },
        {
            id: 2,
            title: "child",
            condition: "Từ 2 -12 tuổi",
            listPerson: []
        },
        {
            id: 3,
            title: "infant",
            condition: "Dưới 2 tuổi",
            listPerson: []
        }
    ],
}

export const perSon = {
    country_id: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDay: ""
}