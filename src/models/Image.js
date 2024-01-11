import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/app'

export default class Image extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        toDefaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        toDefaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Campo não pode ser vazio.',
          },
        },
      },
      url: {
        type: Sequelize.VIRTUAL,
        get() {
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        },
      },
    }, {
      sequelize,
      tableName: 'imagens',
    })
    return this
  }

  static associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' })
  }
}
