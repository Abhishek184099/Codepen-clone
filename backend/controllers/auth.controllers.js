const User = require('../models/User');
const { generateTokenAndSetCookie } = require('../utils/generateToken');
const bcrypt = require('bcryptjs')


const firebaseAuth = async(req,res) =>{
    try{

        const user = await User.findOne({email : req.body.email});
        if(user){
            generateTokenAndSetCookie(user._id,res);
            const {password : pass, ...rest} = user._doc;
            res.status(200).json(rest);
        }
        else{
            const generatedPassword = Math.random().toString(36).slice(-8) 
            + Math.random().toString(36).slice(-8);

            const hashed = await bcrypt.hash(generatedPassword,10);

            const newUser = new User({
                email : req.body.email,
                fullname : req.body.fullname,
                username : req.body.fullname.split(' ').join('').toLowerCase()
                + Math.random().toString(36).slice(-4),
                password : hashed,
                avatar : req.body.photo,
            })

            await newUser.save();
              
            generateTokenAndSetCookie( newUser._id,res);
            const { password: pass, ...rest } = newUser._doc;
            res.status(200).json(rest);
        }
       
    }
    catch(err){
         console.error('error is firebase controller :',err.message);
         res.status(401).json({error : err.message});
    }
}

const signup = async(req,res) =>{
    try {
		const { fullname, username, email, password } = req.body;

	
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ error: "Username is already taken" });
		}

		const existingEmail = await User.findOne({ email });
		if (existingEmail) {
			return res.status(400).json({ error: "Email is already taken" });
		}

		if (password.length < 6) {
			return res.status(400).json({ error: "Password must be at least 6 characters long" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			fullname,
			username,
			email,
			password: hashedPassword,
		});

		if (newUser) {
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullname: newUser.fullname,
				username: newUser.username,
				email: newUser.email,
			});
		} else {
			res.status(400).json({ error: "Invalid user data" });
		}
	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}

}



const logout = async(req,res)=>{
    try{
        res.clearCookie('access_token');
        res.status(200).json('User has been logged out!');
    }
    catch(err){
        console.error("error at logout controller",err.message);
        res.status(500).json({error : 'Internal server error'})
    }
} 

const login = async(req,res)=>{
    try{
        const {username,password} = req.body;

        const user = await User.findOne({username});

        const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: "Invalid username or password" });
		}
       
        generateTokenAndSetCookie(user._id, res);
        res.status(200).json({
			_id: user._id,
			fullName: user.fullname,
			username: user.username,
			photo : user.avatar
        });
    }
    catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}

}

module.exports = {
    firebaseAuth,
    logout,
    signup,
} 