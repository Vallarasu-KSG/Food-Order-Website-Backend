import UserModel from "../models/UserModel.js";

// Add items to the user cart
const addToCart = async (req, res) => {
    try {
        let userData = await UserModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1;
        }
        else{
            cartData[req.body.itemId] += 1;
        }
        await UserModel.findByIdAndUpdate(req.body.userId,{cartData})
        res.json({success:true, message:"Add To Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// Remove items from the user cart
const removeFromCart = async (req, res) => {
    try {
        let userData = await UserModel.findById(req.body.userId)
        let cartData = await userData.cartData;
        if (cartData[req.body.itemId]>0)
        {
            cartData[req.body.itemId] -= 1;
        }
        await UserModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true, message:"Remove From Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

// Fetch user cart data
const getCart = async (req, res) => {
    try {
        let userData = await UserModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        res.json({success:true, cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:"Error"})
    }
}

export {addToCart, removeFromCart, getCart}
