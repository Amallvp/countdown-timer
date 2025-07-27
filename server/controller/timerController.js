const Timer = require("../model/timer");

// Save or update timer
const createOrUpdateTimer = async (req, res) => {
  try {
    const { storeId, promotionText, startDate, endDate } = req.body;

    let timer = await Timer.findOne({ storeId });
    if (timer) {
      timer.promotionText = promotionText;
      timer.startDate = startDate;
      timer.endDate = endDate;
      await timer.save();
    } else {
      timer = await Timer.create({ storeId, promotionText, startDate, endDate });
    }

    res.json(timer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Fetch timer for a store
const getTimer = async (req, res) => {
  try {
    const { storeId } = req.params;
    const timer = await Timer.findOne({ storeId });

    if (!timer) return res.status(404).json({ message: "No timer found" });
    res.json(timer);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createOrUpdateTimer,
  getTimer,
};