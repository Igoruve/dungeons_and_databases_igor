import CharacterHasStats from "../../models/character/character_has_stats.js";

const getByCharacterID = async (req, res) => {
  try {
    const { id } = req.params;

    const stats = await CharacterHasStats.findAll({
      where: { character_id: id },
      attributes: ["stat_name", "value"],
    });

    if (!stats || stats.length === 0) {
      return res
        .status(404)
        .json({ error: "Stats not found for this character" });
    }

    const statsObject = {};
    stats.forEach((stat) => {
      statsObject[stat.stat_name] = stat.value;
    });

    return res.json(statsObject);
  } catch (error) {
    console.error("Error fetching stats:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

export default { getByCharacterID };
