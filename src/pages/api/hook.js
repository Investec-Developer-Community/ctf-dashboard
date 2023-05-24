const hookHandler = async (req, res) => {
  if (req.method === 'POST') {
    console.log(req);

    res.status(response.status);
    res.json(response.data);
  }
}

export default hookHandler;
