import IRestaurant from "../models/Restaurant";
import { Pizza,Burger,Tacos,IceCream} from "../images";

export const merchant: IRestaurant[] = [
    {
        id:1,
        name:"La Bella Cusina",
        banner_url: "https://w0.peakpx.com/wallpaper/1008/941/HD-wallpaper-pizza-fast-food-pizza-with-sausage-and-olives-food-concepts-background-with-pizza.jpg",
        logo_url: Pizza,
        ratings:{
            overall_rating: 100,
            star_rating: 5,
            num_rating: 5,
        },
        cuisines: ["Italian","Spanish"],
        price_rating: 4,
        average_price: 20,
        delivery_fee:2,
        delivery_at: "Today at 3:45pm",
        location: {
            distance: "0.7",
            street: "55 Willow Ave",
            state: "New York",
            zip: 10041
        }
    },

    {
        id:2,
        name:"Sarah's Fast Food",
        banner_url: "https://rozlucky.com/media/4962/conversions/T9PdaGMKiRAYANk1qKrxXEgO1I1M3CtWBnSXUkf1-product_detail.webp",
        logo_url: Burger,
        ratings:{
            overall_rating: 85,
            star_rating: 5,
            num_rating: 5,
        },
        cuisines: ["Italian","Spanish","American"],
        price_rating: 4,
        average_price: 20,
        delivery_fee:2,
        delivery_at: "Today at 3:45pm",
        location: {
            distance: "0.8",
            street: "55 Willow Ave",
            state: "New York",
            zip: 10041
        }
    },

    {
        id:3,
        name:"Sabores de Mexico",
        banner_url: "https://f3e6t7k9.stackpathcdn.com/wp-content/uploads/2022/07/tacatacos.png",
        logo_url: Tacos,
        ratings:{
            overall_rating: 152,
            star_rating: 5,
            num_rating: 5,
        },
        cuisines: ["Italian","Spanish","American"],
        price_rating: 4,
        average_price: 20,
        delivery_fee:2,
        delivery_at: "Today at 3:45pm",
        location: {
            distance: "0.01",
            street: "55 Willow Ave",
            state: "New York",
            zip: 10041
        }

    },

    {
        id:4,
        name:"Sweet Scoops",
        banner_url: "https://lovesicecream.com/wp-content/uploads/2018/05/Ingredients-800x500.jpg",
        logo_url: IceCream,
        ratings:{
            overall_rating: 1002,
            star_rating: 5,
            num_rating: 5,
        },
        cuisines: ["Italian","American","Mexican"],
        price_rating: 4,
        average_price: 20,
        delivery_fee:2,
        delivery_at: "Today at 3:45pm",
        location: {
            distance: "0.5",
            street: "240 Kent Ave",
            state: "New York",
            zip: 10041
        }
    },

    {
        id:5,
        name:"Prime Cut Grill",
        banner_url: "https://grillax.com/wp-content/uploads/2018/03/is_180327_grilled_meat_steaks_800x600-800x500.jpg",
        logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwjS5Xj7DHVBnDKk2VPnIbMng8Ql5V4YfWcA&usqp=CAU",
        ratings:{
            overall_rating:1468,
            star_rating:5,
            num_rating:5,
        },
        cuisines : ["Italian","American","Mexican"],
        price_rating:4,
        average_price:20,
        delivery_fee:2,
        delivery_at : "Today at 3:45pm",
        location: {
            distance:"0.3",
            street: "240 Kent Ave",
            state: "New York",
            zip: 10041
        },
    },

    {
        id:6,
        name:"The Ocean's Delight",
        banner_url: "https://memphisgrills.com/content/uploads/2010/01/Spicy-Honey-Glazed-Shrimp-1.jpg",
        logo_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniXkJtNutspZSB1-afuvHEYa8liAjlU8EUA&usqp=CAU",
        ratings: {
            overall_rating:615,
            star_rating:5,
            num_rating:5,
        },
        cuisines:["Greque","American","Barbecue"],
        price_rating:4,
        average_price:20,
        delivery_fee: 2,
        delivery_at: "Today at 3:45pm",
        location: {
            distance: "0.6",
            street: "240 Kent Ave",
            state: "New York",
            zip: 10041,
        },
    },
    
]

