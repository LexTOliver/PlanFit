const mongoose = require('mongoose'),
    bcrypt = require('bcrypt'),
    SALT_WORK_FACTOR = 10;

var validaEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const InstrutorSchema = new mongoose.Schema(
  {
    //id: Number, // Desnecessário, pois o Mongoose gera id automaticamente
    nome: {
      type: String,
      required: [true, 'Nome do instrutor não especificado'],
      maxLength: [40, 'Nome "{VALUE}" excedeu o limite de 40 caracteres.'],
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Endereço de email não especificado'],
      validate: [validaEmail, 'Endereço de email inválido']
    },
    username: { 
        type: String, 
        unique: true,
        required: [true, 'Nome de usuário não especificado'], 
        index: { unique: true } 
    },
    senha: { 
        type: String,
        required: [true, 'Senha não especificada'], 
    }
  }
);

InstrutorSchema.pre('save', function(next) {
    var user = this;
    
    // only hash the password if it has been modified (or is new)
    if (!user.isModified('senha')) return next();
    
    // generate a salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        
        // hash the password using our new salt
        bcrypt.hash(user.senha, salt, function(err, hash) {
            
            if (err) return next(err);
            // override the cleartext password with the hashed one
            user.senha = hash;
            next();
        });
    });
});

InstrutorSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.senha, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('Instrutor', InstrutorSchema);


//Hashing da senha só funciona ao adicioná-la, nao em update, etc...
