

app.get('/getUserDetails', verifyToken , async (req, res) => {
    const profile = await ProfileModel.findById(req.userId);

    res.json(profile);
})
