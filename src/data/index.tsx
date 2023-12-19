import shipping from "../assets/advantages/cart.svg"
import gear from "../assets/advantages/gear.svg"
import discount from "../assets/advantages/discount.svg"
import wallet from "../assets/advantages/wallet.svg"

export const navbarData = [
    {
        name:"HOME",
    },
    {
        name:"SERVICES",
    },
    {
        name:"SHOP",
    },
    {
        name:"GALLERY",
    },
    {
        name:"PAGES",
        children:[
            {
                name:"About Us",
            },
            {
                name:"News",
            },
            {
                name:"Page Error 404",
            },
        ]
    },
    {
        name:"CONTACTS",
    },
]

export const dropdownTypedata = [
    {
        name:"Mountain Bike",
        value:"Mountain Bike"
    },
    {
        name:"Hybrid/Comfort Bike",
        value:"Hybrid/Comfort Bike"
    },
    {
        name:"Cyclocross Bike",
        value:"Cyclocross Bike"
    },
    {
        name:"BMX/Trick Bike",
        value:"BMX/Trick Bike"
    },
    {
        name:"Road Bike",
        value:"Road Bike"
    },
    {
        name:"Track Bike",
        value:"Track Bike"
    },
]

export const dropdownSizedata = [
    {
        name:20,
        value:20
    },
    {
        name:24,
        value:24
    },
    {
        name:26,
        value:26
    },
    {
        name:27,
        value:27
    },
    {
        name:28,
        value:28
    },
    {
        name:30,
        value:30
    },
]

export const dropdownBranddata = [
    {
        name:"Abcsd",
        value:"Abcsd"
    },
    {
        name:"Bcgds",
        value:"Bcgds"
    },
    {
        name:"Cdjhs",
        value:"Cdjhs"
    },
    {
        name:"Dskjd",
        value:"Dskjd"
    },
    {
        name:"Efdgf",
        value:"Efdgf"
    },
    {
        name:"Fsadkj",
        value:"Fsadkj"
    },
]

export const advantages = [
    {
        name:"Free shipping from $500",
        image:shipping,
    },
    {
        name:"Warranty service for 3 months",
        image:gear,
    },
    {
        name:"Exchange and return within 14 days",
        image:wallet,
    },
    {
        name:"Discounts for customers",
        image:discount,
    }
]