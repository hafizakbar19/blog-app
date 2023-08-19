// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(404).send();
    }

    const { email, password } = req.body;

    try {
        save(email, password);
        res.status(200).send();
    }
    catch (err) {
        res.status(400).json({ message: err});
    }

  }
  