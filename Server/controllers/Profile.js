const Profile = require('../models/Profile');
const User = require('../models/User')

exports.searchProfile = async(req, res) => {
    try{
        const{ userName } = req.body

        profileData = await User.findOne({displayName: userName}).populate("userDetails", {new: true}).exec()
    }catch(e){
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error',
            error: e.message
        })
    }
}