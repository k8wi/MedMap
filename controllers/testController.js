const testController = (req, res) => {
    res.status(200).send({
      message: "ytst user",
      success: true,
    });
  };
  
  module.exports = { testController };
  