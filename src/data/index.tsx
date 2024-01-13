import shipping from "../assets/advantages/cart.svg"
import gear from "../assets/advantages/gear.svg"
import discount from "../assets/advantages/discount.svg"
import wallet from "../assets/advantages/wallet.svg"
import bike_1 from "../assets/products/bike_1.png"
import bike_2 from "../assets/products/bike_2.png"
import bike_3 from "../assets/products/bike_3.png"
import bike_4 from "../assets/products/bike_4.png"
import bike_5 from "../assets/products/bike_5.png"
import bike_6 from "../assets/products/bike_6.png"
import bike_7 from "../assets/products/bike_7.png"
import bike_8 from "../assets/products/bike_8.png"
import label_1 from "../assets/labels/label_1.svg"
import label_2 from "../assets/labels/label_2.svg"
import label_3 from "../assets/labels/label_3.svg"
import label_4 from "../assets/labels/label_4.svg"
import label_5 from "../assets/labels/label_5.svg"
import phone from "../assets/contact/phone.svg";
import envelope from "../assets/contact/envelope.svg";
import location from "../assets/contact/location.svg";

export const navbarData = [
    {
        name: "HOME",
        path: "/"
    },
    {
        name: "SHOP",
        path: "/shop"
    },
    {
        name: "CONTACTS",
        path: "/contact"
    },
    {
        name: "PROFILE",
        path: "/user/profile"
    },
    {
        name: "CART",
        path: "/user/cart"
    },
    {
        name: "LOG OUT",
        path: "logout"
    },
]

export const dropdownTypedata = [
    {
        name: "Mountain Bike",
        value: "mountain"
    },
    {
        name: "Road Bike",
        value: "road"
    },
    {
        name: "BMX Bike",
        value: "bmx"
    },
    {
        name: "City Bike",
        value: "city"
    },
    {
        name: "Kids Bike",
        value: "kids"
    }
]

export const dropdownSizedata = [
    {
        name: 20,
        value: 20
    },
    {
        name: 24,
        value: 24
    },
    {
        name: 26,
        value: 26
    },
    {
        name: 27,
        value: 27
    },
    {
        name: 28,
        value: 28
    },
    {
        name: 30,
        value: 30
    },
]

export const dropdownBranddata = [
    {
        name: "Bianchi",
        value: "bianchi"
    },
    {
        name: "BMC",
        value: "bmc"
    },
    {
        name: "Trek",
        value: "trek"
    },
    {
        name: "Hero",
        value: "hero"
    },
    {
        name: "Avon",
        value: "avon"
    }
]

export const advantages = [
    {
        name: "Free shipping from $500",
        image: shipping,
    },
    {
        name: "Warranty service for 3 months",
        image: gear,
    },
    {
        name: "Exchange and return within 14 days",
        image: wallet,
    },
    {
        name: "Discounts for customers",
        image: discount,
    }
]

export const productsType = [
    {
        name: "All"
    },
    {
        name: "Road bike"
    },
    {
        name: "City bike"
    },
    {
        name: "BMX bike"
    },
]

export const productCardsData = [
    {
        _id: 1,
        image: bike_1,
        price: 12,
        discount: 10,
        title: 'Granite Peak 24" Girls Mountain Bike',
        frameSize: 17,
        classs: "City",
        nos: 7,
        type: "Rigid",
        cr: "INDIA"
    },
    {
        _id: 2,
        image: bike_2,
        price: 12,
        discount: 10,
        title: 'Granite Peak 24" Girls Mountain Bike',
        frameSize: 17,
        classs: "City",
        nos: 7,
        type: "Rigid",
        cr: "INDIA"
    },
    {
        _id: 3,
        image: bike_3,
        price: 12,
        discount: 10,
        title: 'Granite Peak 24" Girls Mountain Bike',
        frameSize: 17,
        classs: "City",
        nos: 7,
        type: "Rigid",
        cr: "INDIA"
    },
    {
        _id: 4,
        image: bike_4,
        price: 12,
        discount: 10,
        title: 'Granite Peak 24" Girls Mountain Bike',
        frameSize: 17,
        classs: "City",
        nos: 7,
        type: "Rigid",
        cr: "INDIA"
    },
    {
        _id: 5,
        image: bike_5,
        price: 12,
        discount: 10,
        title: 'Granite Peak 24" Girls Mountain Bike',
        frameSize: 17,
        classs: "City",
        nos: 7,
        type: "Rigid",
        cr: "INDIA"
    },
    {
        _id: 6,
        image: bike_6,
        price: 12,
        discount: 10,
        title: 'Granite Peak 24" Girls Mountain Bike',
        frameSize: 17,
        classs: "City",
        nos: 7,
        type: "Rigid",
        cr: "INDIA"
    },
    {
        _id: 7,
        image: bike_7,
        price: 12,
        discount: 10,
        title: 'Granite Peak 24" Girls Mountain Bike',
        frameSize: 17,
        classs: "City",
        nos: 7,
        type: "Rigid",
        cr: "INDIA"
    },
    {
        _id: 8,
        image: bike_8,
        price: 12,
        discount: 10,
        title: 'Granite Peak 24" Girls Mountain Bike',
        frameSize: 17,
        classs: "City",
        nos: 7,
        type: "Rigid",
        cr: "INDIA"
    },
]

export const labels = [
    {
        _id: 1,
        lbl: label_1
    },
    {
        _id: 2,
        lbl: label_2
    },
    {
        _id: 3,
        lbl: label_3
    },
    {
        _id: 4,
        lbl: label_4
    },
    {
        _id: 5,
        lbl: label_5
    },
]

export const sortByData = [
    {
        name: "New Product",
        value: "new"
    },
    {
        name: "Top Products",
        value: "top"
    },
    {
        name: "Lowest First",
        value: "lowest"
    },
    {
        name: "Highest First",
        value: "highest"
    },
]

export const typesOfBike = [
    {
        name: "Road Bike",
        id: "road_bike",
    },
    {
        name: "Mountain Bike",
        id: "mountain_bike",
    },
    {
        name: "BMX Bike",
        id: "bmx_bike",
    },
    {
        name: "City Bike",
        id: "city_bike",
    },
    {
        name: "Kids Bike",
        id: "kids_bike",
    },
]

export const colors = ["#eda6c2", "#debbdd", "#1dfaa0", "#84ec57", "dbb3f7", "#ec5d9e", "#f80c0d", "#dadce4"];

export const contactLabels = [
    {
        name: "need help",
        icon: phone,
        info1: "1-800-488-6040",
        info2: "1-800-578-4090",
    },
    {
        name: "questions",
        icon: envelope,
        info1: "mo.amir.code@gmail.com",
        info2: "aamir.business.hub@gmail.com",
    },
    {
        name: "address",
        icon: location,
        info1: "8500, Lorem Street,",
        info2: "Chicago, IL, 55030",
    },
]