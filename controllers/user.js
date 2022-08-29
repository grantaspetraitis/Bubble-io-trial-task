exports.generateText = async (req, res) => {
    const text = req.body.text;
    const omittedLetter = req.body.omittedLetter;

    if (isNaN(text) && isNaN(omittedLetter)) {

        const generatedText = text.replace(omittedLetter, '');

        res.status(200).send(generatedText);
    } else {
        res.status(400).send({ msg: 'Please enter letters' })
    }
}