const mongoose = require("mongoose");

const timerSchema = new mongoose.Schema({
 storeId: { type: String, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  promotionText: { type: String, required: true },
   style: {
    color: { type: String, default: "#ff0000" },
    size: { type: String, default: "medium" },
    position: { type: String, default: "top" }
  },
  urgencyThreshold: { type: Number, default: 5 }
}
,{timestamps: true}
);

module.exports = mongoose.model("Timer", timerSchema);