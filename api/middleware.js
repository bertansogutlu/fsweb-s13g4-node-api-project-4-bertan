const model = require("./user-model");

function logger(req, res, next) {
  try {
    console.log("hede");
    next();
  } catch (error) {
    console.log("hodo");
  }
}

function checkSameUserName(req, res, next) {
  try {
    const { kullaniciAdi } = req.body;
    const isSame = !!kullaniciAdi && model.isSameUserName(kullaniciAdi);
    if (isSame) {
      res.status(400).json({ message: "Bu kullanici adi mevcut" });
    } else {
      next();
    }
  } catch (error) {
    next(error);
  }
}

function validateNewUser(req, res, next) {
  try {
    const { kullaniciAdi, sifre } = req.body;
    if (!kullaniciAdi || !sifre) {
      res.status(400).json({ message: "Eksik alanlar doldurunuz" });
    } else {
      req.user = { kullaniciAdi: kullaniciAdi, sifre: sifre };
      next();
    }
  } catch (error) {
    next(error);
  }
}

function isValidUser(req, res, next) {
    try {
        const user = {kullaniciAdi:req.body.kullaniciAdi,sifre:req.body.sifre}
        const isExist = model.findUser(user);
        if(!isExist) {
            res.status(404).json({message:'Boyle bir kullanici yok'});
        }
        next();
    } catch (error) {
      next(error);
    }
  }

module.exports = {
  logger, checkSameUserName, validateNewUser, isValidUser
};
