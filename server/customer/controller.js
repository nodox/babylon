const Customer = require('./model');

const findOrCreate = async (req, res) => {
  // TODO: Sanitize user input
  const data = req.body;
  const { profileObj } = data;

  let customer = null;

  try {
    customer = await Customer.findOne({ email: profileObj.email }).exec();
    if (customer !== null) return res.status(200).json(customer);

    customer = new Customer({
      email: profileObj.email,
      firstName: profileObj.givenName,
      lastName: profileObj.familyName,
      profileImage: profileObj.imageUrl,
    })

    await customer.save();
    return res.status(201).json(customer);

  } catch (e) {

    return res.status(404).json({
      error: e
    });
  }

}

module.exports = {
  findOrCreate,
}
