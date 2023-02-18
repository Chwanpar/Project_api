const Good = require("../models/good");
const Group = require("../models/group");

//get
exports.group = async (req, res, next) => {
    const group = await Group.find().populate("goods");
    res.status(200).json({
        group: group,
    });
};
exports.showOne = async (req, res, next) => {
    try {
        const {id} = req.params
        const group = await Group.findById(id).populate("goods");
        if(!group){
        const error = new Error("Data not found")
        error.statusCode = 404
        throw error;
    }
    res.status(200).json({
        data:group
    })
    } catch (error) {
        next(error);
    }
    
}
exports.good = async (req, res, next) => {
    const { id } = req.params;
    const group = await Group.findById(id);
    const good = await good.find();
    if (!group) {
        res.status(200).json({
            message: "Data not found",
        });
    }
    res.status(200).json({
        goods: good,
    });
};
//insert
exports.insert = async (req, res, next) => {
    const { id } = req.params;
    const { group, type, color, price,inStock } = req.body;
    const good = new Good({
        group: group,
        type: type,
        color: color,
        price: price,
        inStock: inStock

    });

    await good.save();
    res.status(200).json({
        message: "Add Data Already",
    });
};
//delete
exports.delete = async (req, res, next) => {
    try {
        const { id } = req.params;
        const good = await Good.deleteOne({ _id: id });
        if (good.deletedCount === 0) {
            const error = new Error("Can't found data");
            error.statusCode = 400;
            throw error;
        } else {
            res.status(200).json({
                message: "Delete Already!!"
            });
        }
    } catch (error) {
        next(error);
    }
};

//update
exports.update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { group, type, color, price ,inStock} = req.body;
        const good = await Good.findOne({ _id: id });
        if (!good) {
            const error = new Error("Can't update");
            error.statusCode = 200;
            throw error;
        } else {
            good.group = group;
            good.type = type;
            good.color = color;
            good.price = price;
            good.inStock = inStock;

            await good.save();
            res.status(200).json({
                maessge: "Update data already!!",
            });
        }
    } catch (error) {
        next(error);
    }
};


