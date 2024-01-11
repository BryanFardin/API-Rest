import Sequelize, { Model } from 'sequelize';

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        toDefaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      sobrenome: {
        type: Sequelize.STRING,
        toDefaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Sobrenome precisa ter entre 3 e 255 caracteres.',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
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
        type: Sequelize.INTEGER,
        toDefaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um numero Inteiro.',
          },
        },
      },
      peso: {
        type: Sequelize.FLOAT,
        toDefaultValue: '',
        validate: {
          isFloat: {
            msg: 'Peso Precisa ser um Numero Inteiro ou de ponto Flutuante.',
          },
        },
      },
      altura: {
        type: Sequelize.FLOAT,
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
}
