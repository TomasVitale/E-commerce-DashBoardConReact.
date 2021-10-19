let mainController= {
    home: function (req,res){
          res.render("")
      },
    detalleproducto: function (req,res){
        res.render("")
    },
    login: function (req,res){
        res.render("")
    },
    register: function (req,res){
        res.render("")
    }
  }

  res.render('mainList', {'main':main});
  
  module.exports = mainController;