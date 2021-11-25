async function getProductDetails(req, res) {
  console.log("I'm in the controller function");
  const db = req.app.get("db");
  try {
    const getAllProducts = await db.get_products();
    console.log(getAllProducts);
  } catch (error) {
    console.log(error);
  }
}

router.get("/api/product", async (req, res) => {
  console.log("I'm in the controller function");
  const db = req.app.get("db");
  try {
    const getAllProducts = await db.get_products();
    console.log(getAllProducts);
    res.status(200).send(getAllProducts);
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  getProductDetails,
};
