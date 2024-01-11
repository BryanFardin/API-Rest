"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Aluno extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: _sequelize2.default.STRING,
        toDefaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: _sequelize2.default.STRING,
        toDefaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: _sequelize2.default.STRING,
        toDefaultValue: '',
        unique: {
          msg: 'Email Ja existe',
        },
        validate: {
          isEmail: {
            msg: 'Email Invalido.',
          },
        },
      },
      idade: {
        type: _sequelize2.default.INTEGER,
        toDefaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero Inteiro.',
          },
        },
      },
      peso: {
        type: _sequelize2.default.FLOAT,
        toDefaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso Precisa ser um Numero Inteiro ou de ponto Flutuante.',
          },
        },
      },
      altura: {
        type: _sequelize2.default.FLOAT,
        toDefaultValue: '',
        validate: {
          isFloat: {
            msg: 'Altura Precisa ser um Numero Inteiro ou de ponto Flutuante.',
          },
        },
      },
    }, {
      sequelize,
    })
    return this
  }

  static associate(models) {
    this.hasMany(models.Image, { foreignKey: 'aluno_id' })
  }
} exports.default = Aluno;
