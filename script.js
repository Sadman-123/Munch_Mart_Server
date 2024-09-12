const app=require('express')();
const cors=require('cors');
app.use(cors());
var lst = [
    {
      "item_pic": "assets/restaurant.png",
      "item_name": "Food Delivery"
    },
    {
      "item_pic": "assets/shopping-cart.png",
      "item_name": "Shop"
    },
    {
      "item_pic": "assets/delivery.png",
      "item_name": "Pick Up"
    },
    {
      "item_pic": "assets/home_delivery.png",
      "item_name": "Home Delivery"
    },
  ];
  var popular_shop_list = [
    {
      "shop_pic": "https://businesspostbd.com/files/media/daily-media/2021/09/16/21.jpg",
      "deal": "5"
    },
    {
      "shop_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn4ZKvNJsQKNAd23vsjNaVxq-D_o77F8ru8Q&s",
      "deal": "1"
    },
    {
      "shop_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrmHaipOrtaZaYddPByckO-4jT17Ueaz4Uvg&s",
      "deal": "4"
    },
    {
      "shop_pic": "https://www.satv.tv/wp-content/uploads/2024/01/shwapno-logo-1.jpg",
      "deal": "3"
    },
    {
      "shop_pic": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ7_B-OLpbA8poBh7GlvKlWYxCyu4KLHJEXA&s",
      "deal": "2"
    },
  ];
  var prev_orders=[
{
      "prev_order_item":"Sandwich",
      "prev_order_pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-94PYRrAAwvbG7RJLM8YLZ5139GEhcgidULRXBzP0zf9QOZCdhzujP_vR&s=10",
      "prev_order_review":"4.9 (100+)",
      "prev_order_loc":"Mirpur 10",
      "prev_order_delivery_charge":"Delivery 10 Tk",
      "prev_order_price":"120",
    },
    {
      "prev_order_item":"Pasta",
      "prev_order_pic":"https://images.deliveryhero.io/image/fd-bd/LH/s6ow-hero.jpg?width=512&height=384&quality=45",
      "prev_order_review":"5.9 (12000+)",
      "prev_order_loc":"Mirpur 2",
      "prev_order_price":"140",
      "prev_order_delivery_charge":"Delivery 19 Tk"
    },
    {
      "prev_order_item":"Biriyani",
      "prev_order_price":"190",
      "prev_order_pic":"https://www.tbsnews.net/sites/default/files/styles/big_3/public/images/2021/03/19/biriyani.jpg",
      "prev_order_review":"4.4 (9000+)",
      "prev_order_loc":"Mirpur 10",
      "prev_order_delivery_charge":"Delivery 30 Tk"
    },
    {
      "prev_order_item":"Shingara",
      "prev_order_price":"80",
      "prev_order_pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QhsFVSXRxfmZsPLGOOjkYsbFz5TazwhYZA&s",
      "prev_order_review":"4.5 (9300+)",
      "prev_order_loc":"Mirpur 12",
      "prev_order_delivery_charge":"Delivery 54 Tk"
    },
    {
      "prev_order_item":"Pizza",
      "prev_order_price":"350",
      "prev_order_pic":"https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg",
      "prev_order_review":"5.0 (121+)",
      "prev_order_loc":"Mirpur 10",
      "prev_order_delivery_charge":"Delivery 19 Tk"
    },
    {
      "prev_order_item":"Khichuri",
      "prev_order_price":"150",
      "prev_order_pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNLvRoMD-ztoTL3BQoHX2ZX72mL8wbXQ40-Q&s",
      "prev_order_review":"5.5 (1400+)",
      "prev_order_loc":"Shewrapara",
      "prev_order_delivery_charge":"Delivery 19 Tk"
    },
    {
      "prev_order_item":"Chui Jhal",
      "prev_order_price":"190",
      "prev_order_pic":"https://i0.wp.com/petukcouple.com/wp-content/uploads/2021/11/Beef-Chui-Jhal-Recipe.jpeg?resize=700%2C393&ssl=1",
      "prev_order_review":"3.1 (200+)",
      "prev_order_loc":"Mirpur 1",
      "prev_order_delivery_charge":"Delivery 53 Tk"
    },
    {
      "prev_order_item":"Firni",
      "prev_order_price":"50",
      "prev_order_pic":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvY9N2GE8-VFiouugPFFiWrD23NNw5cQJ46A&s",
      "prev_order_review":"4.9 (2100+)",
      "prev_order_loc":"Mirpur 13",
      "prev_order_delivery_charge":"Delivery 19 Tk"
    },
  ];
app.get('/menu',(req,res)=>{
    res.json(lst);
});
app.get('/popular_shop_list',(req,res)=>{
    res.json(popular_shop_list);
});
app.get('/prev_orders',(req,res)=>{
    res.json(prev_orders);
})
app.listen(3040,(req,res)=>{
    console.log('Listening');
})